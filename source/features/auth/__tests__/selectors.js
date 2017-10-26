// Standalone runtime for Regenerator-compiled generator and async functions
import 'regenerator-runtime/runtime';

import {
  selectAuthStore,
  selectLoggedInUserData,
  selectSessionData,
  makeSelectAuthData,
  makeSelectCurrentUserData,
  makeSelectCurrentUserGuid,
  makeSelectCurrentUserName,
} from '../selectors';

import * as Reducer from '../reducer';

const authState = Reducer.initialState;

const store = {
  auth: {
    ...authState,
  },
};

describe('features/auth/selectors', () => {
  it('selectAuthStore should select auth state', () => {
    expect(selectAuthStore(store)).toEqual(authState);
  });

  it('selectLoggedInUserData should select auth login data', () => {
    expect(selectLoggedInUserData(store)).toEqual(authState.loginData);
  });

  it('selectSessionData should select auth session data', () => {
    expect(selectSessionData(store)).toEqual(authState.sessionData);
  });

  it('makeSelectAuthData should select auth state', () => {
    const authDataSelector = makeSelectAuthData();

    expect(authDataSelector(store)).toEqual(authState);

    authDataSelector(store);

    expect(authDataSelector.recomputations()).toEqual(1);
  });

  it('makeSelectCurrentUserData should select current user data', () => {
    const currentUserDataSelector = makeSelectCurrentUserData();

    expect(currentUserDataSelector(store)).toEqual(null);
    currentUserDataSelector(store);

    const newState = Reducer.logInSuccess(authState, 'some data');
    const newStore = {
      auth: {
        ...newState,
      },
    };

    expect(currentUserDataSelector(newStore)).toEqual('some data');
    currentUserDataSelector(newStore);

    expect(currentUserDataSelector.recomputations()).toEqual(2);
  });

  it('makeSelectCurrentUserGuid should select current user guid', () => {
    const currentUserGuidSelector = makeSelectCurrentUserGuid();

    expect(currentUserGuidSelector(store)).toEqual(null);
    currentUserGuidSelector(store);

    const newState = Reducer.sessionValidationSuccess(authState, { user_guid: '1111' });
    const newStore = {
      auth: {
        ...newState,
      },
    };

    expect(currentUserGuidSelector(newStore)).toEqual('1111');
    currentUserGuidSelector(newStore);

    expect(currentUserGuidSelector.recomputations()).toEqual(2);
  });

  it('makeSelectCurrentUserName should select current user name', () => {
    const currentUserNameSelector = makeSelectCurrentUserName();

    expect(currentUserNameSelector(store)).toEqual('');
    currentUserNameSelector(store);

    const newState = Reducer.sessionValidationSuccess(authState, { login_id: 'some name' });
    const newStore = {
      auth: {
        ...newState,
      },
    };

    expect(currentUserNameSelector(newStore)).toEqual('some name');
    currentUserNameSelector(newStore);

    expect(currentUserNameSelector.recomputations()).toEqual(2);
  });
});
