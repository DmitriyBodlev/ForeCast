// Standalone runtime for Regenerator-compiled generator and async functions
import 'regenerator-runtime/runtime';

import defaultReducer, * as Reducer from '../reducer';
import * as Actions from '../actions';

describe('features/auth/reducer', () => {
  const initialState = Reducer.initialState;
  const mockData = {
    'some': 'some',
  };
  const msg = 'some message';

  it('should return the initial state', () => {
    expect(defaultReducer(undefined, {})).toEqual(initialState);
  });

  it('should handle session validation actions', () => {
    const pendingState = defaultReducer(initialState, Actions.sendSessionValidationRequest());
    const successState =
      defaultReducer(pendingState, Actions.receivedSessionValidationSuccess(mockData));
    const failState = defaultReducer(successState, Actions.receivedSessionValidationFail());

    expect(pendingState.initialSessionValidationPending).toBeTruthy();

    expect(successState.initialSessionValidationPending).toBeFalsy();
    expect(successState.loggedIn).toBeTruthy();
    expect(successState.sessionData).toEqual(mockData);

    expect(failState.initialSessionValidationPending).toBeFalsy();
    expect(failState.loggedIn).toBeFalsy();
    expect(failState.sessionData).toBeNull();
    expect(failState.loginData).toBeNull();
  });

  it('should handle login actions', () => {
    const pendingState = defaultReducer(initialState, Actions.sendLogInRequest());
    const successState =
      defaultReducer(pendingState, Actions.receivedLogInSuccess(mockData));
    const failState = defaultReducer(pendingState, Actions.receivedLogInFail(msg));

    expect(pendingState.logInPending).toBeTruthy();

    expect(successState.logInPending).toBeFalsy();
    expect(successState.loggedIn).toBeTruthy();
    expect(successState.loginData).toEqual(mockData);

    expect(failState.logInPending).toBeFalsy();
    expect(failState.logInError).toEqual(msg);
  });

  it('should handle logout actions', () => {
    const userLoggedInState =
      defaultReducer(initialState, Actions.receivedLogInSuccess(mockData));
    const pendingState = defaultReducer(userLoggedInState, Actions.sendLogOutRequest());
    const successState =
      defaultReducer(userLoggedInState, Actions.receivedLogOutSuccess());
    const failState = defaultReducer(userLoggedInState, Actions.receivedLogOutFail(msg));

    expect(pendingState.logOutPending).toBeTruthy();
    expect(pendingState.logOutError).toBeNull();

    expect(successState.logOutPending).toBeFalsy();
    expect(successState.loggedIn).toBeFalsy();
    expect(successState.sessionData).toBeNull();
    expect(successState.loginData).toBeNull();

    expect(failState.logOutPending).toBeFalsy();
    expect(failState.logOutError).toEqual(msg);
  });

  it('should handle reset password actions', () => {
    const pendingState = defaultReducer(initialState, Actions.sendResetPasswordRequest());
    const successState =
      defaultReducer(pendingState, Actions.receivedResetPasswordSuccess());

    expect(pendingState.resetPasswordPending).toBeTruthy();

    expect(successState.resetPasswordPending).toBeFalsy();
  });

  it('should handle create new password actions', () => {
    const userLoggedInState =
      defaultReducer(initialState, Actions.receivedLogInSuccess(mockData));
    const pendingState = defaultReducer(userLoggedInState, Actions.sendCreateNewPasswordRequest());
    const successState =
      defaultReducer(userLoggedInState, Actions.receivedCreateNewPasswordSuccess());
    const failState = defaultReducer(userLoggedInState, Actions.receivedCreateNewPasswordFail(msg));

    expect(pendingState.createNewPasswordPending).toBeTruthy();

    expect(successState.createNewPasswordPending).toBeFalsy();
    expect(successState.createNewPasswordError).toBeNull();

    expect(failState.createNewPasswordPending).toBeFalsy();
    expect(failState.createNewPasswordError).toEqual(msg);
  });
});
