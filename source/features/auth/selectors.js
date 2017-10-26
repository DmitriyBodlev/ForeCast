/**
 * The auth state selectors
 */

import { createSelector } from 'reselect';

const selectAuthStore = (state: Object) => state.auth;
const selectLoggedInUserData = (state: Object) => state.auth.loginData;
const selectSessionData = (state: Object) => state.auth.sessionData;

const makeSelectAuthData = () => createSelector(
  selectAuthStore,
  (auth: Object) => auth,
);

const makeSelectCurrentUserData = () => createSelector(
  selectLoggedInUserData,
  selectSessionData,
  (loginData: Object | null, sessionData: Object | null) => {
    if (loginData) {
      return loginData;
    } else if (sessionData) {
      return sessionData;
    }
    return null;
  },
);

const makeSelectCurrentUserGuid = () => createSelector(
  selectLoggedInUserData,
  selectSessionData,
  (loginData: Object | null, sessionData: Object | null) => {
    let userGuid = null;
    if (loginData) {
      userGuid = loginData.user_guid;
    } else if (sessionData) {
      userGuid = sessionData.user_guid;
    }
    return userGuid;
  },
);

const makeSelectCurrentUserName = () => createSelector(
  selectLoggedInUserData,
  selectSessionData,
  (loginData: Object | null, sessionData: Object | null) => {
    let userName = '';
    if (loginData) {
      userName = loginData.login_id;
    } else if (sessionData) {
      userName = sessionData.login_id;
    }
    return userName;
  },
);

export {
  selectAuthStore,
  selectLoggedInUserData,
  selectSessionData,
  makeSelectAuthData,
  makeSelectCurrentUserData,
  makeSelectCurrentUserGuid,
  makeSelectCurrentUserName,
};
