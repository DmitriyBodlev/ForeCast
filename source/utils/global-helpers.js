import { toastr } from 'react-redux-toastr';
import { select } from 'redux-saga/effects';
import { and, isNil, not } from 'ramda';
import { makeSelectLocale } from '../features/locales/selectors';
import { history } from '../router';

// helper function to create new object and extend it with props of others
export const assign = (...args: Object) => Object.assign({}, ...args);

// local storage effects
export const getAuthToken = () => JSON.parse(localStorage.getItem('theamoustoken')); // eslint-disable-line
export const setAuthToken = (token: string) => localStorage.setItem('theamoustoken', JSON.stringify(token)); // eslint-disable-line
export const removeAuthToken = () => localStorage.removeItem('theamoustoken'); // eslint-disable-line

// session storage effects
export const getAuthTokenFromSession = () => JSON.parse(sessionStorage.getItem('theamoustoken')); // eslint-disable-line
export const setAuthTokenToSession = (token: string) => sessionStorage.setItem('theamoustoken', JSON.stringify(token)); // eslint-disable-line
export const removeAuthTokenFromSession = () => sessionStorage.removeItem('theamoustoken'); // eslint-disable-line

export const getToken = () => getAuthToken() || getAuthTokenFromSession();

// helper function for spa routing
export const goToRoute = (route: string) => history.push(route);

// helper function to create request headers
export const makeRequestHeaders = (customHeaders: Object) => {
  let token;
  let sessionHeaders = {};

  try {
    token = getAuthToken() || getAuthTokenFromSession();
  } catch (error) {
    token = null;
  }

  if (token) {
    sessionHeaders = {
      Authorization: `Bearer ${token}`,
    };
  }

  return {
    ...sessionHeaders,
    ...customHeaders,
  };
};

// helper generator for showing Toastr messages inside sagas
export function* showToastrMessage(type: string, message: string) {
  const locale = yield select(makeSelectLocale());
  toastr[type](locale[message]);
}

// helper for check two argumens for first be null and second not be null
export const checkIsNilAndNotNil = (firstValue: any, secondValue: any) =>  (
  and(isNil(firstValue), not(isNil(secondValue)))
);

// helper for getting react component display name
export const getDisplayName = (WrappedComponent: React.ComponentType<any>) =>
  WrappedComponent.displayName || WrappedComponent.name || 'Component';

// main logo link
export const renderLogoLink = (currentTheme: string) => (
  `https://s3.amazonaws.com/amous-front-dev/logo/${currentTheme}-logo.svg`
);
