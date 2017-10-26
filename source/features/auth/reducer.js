import { createReducer } from 'redux-act';
import { $all, $set } from 'plow-js';
import { DefaultStateType, LoginDataType, SessionDataType } from './types';
import * as Actions from './actions';

export const initialState = {
  initialSessionValidationPending: false,
  logInPending: false,
  logInError: null,
  loggedIn: false,
  logOutPending: false,
  logOutError: null,
  resetPasswordPending: false,
  createNewPasswordPending: false,
  createNewPasswordError: null,
  loginData: null,
  sessionData: null,
};

export const sendSessionValidationRequest = (state: DefaultStateType) => (
  $set('initialSessionValidationPending', true, state)
);

export const receivedSessionValidationSuccess =
  (state: DefaultStateType, data: SessionDataType) => (
    $all(
      $set('initialSessionValidationPending', false),
      $set('loggedIn', true),
      $set('sessionData', data),
      state,
    )
);

export const receivedSessionValidationFail = (state: DefaultStateType) => (
  $all(
    $set('initialSessionValidationPending', false),
    $set('loggedIn', false),
    $set('sessionData', null),
    $set('loginData', null),
    state,
  )
);

export const sendLogInRequest = (state: DefaultStateType) => (
  $all(
    $set('logInPending', true),
    $set('logInError', null),
    state,
  )
);

export const receivedLogInSuccess = (state: DefaultStateType, data: LoginDataType) => (
  $all(
    $set('logInPending', false),
    $set('loggedIn', true),
    $set('loginData', data),
    state,
  )
);

export const receivedLogInFail = (state: DefaultStateType, msg: string) => (
  $all(
    $set('logInPending', false),
    $set('logInError', msg),
    state,
  )
);

export const sendLogOutRequest = (state: DefaultStateType) => (
 $all(
    $set('logOutPending', true),
    $set('logOutError', null),
    state,
  )
);

export const receivedLogOutSuccess = (state: DefaultStateType) => (
  $all(
    $set('logOutPending', false),
    $set('loggedIn', false),
    $set('sessionData', null),
    $set('loginData', null),
    state,
  )
);

export const receivedLogOutFail = (state: DefaultStateType, msg: string) => (
  $all(
    $set('logOutPending', false),
    $set('logOutError', msg),
    state,
  )
);

export const sendResetPasswordRequest = (state: DefaultStateType) => (
  $set('resetPasswordPending', true, state)
);

export const receivedResetPasswordSuccess = (state: DefaultStateType) => (
  $set('resetPasswordPending', false, state)
);

export const sendCreateNewPasswordRequest = (state: DefaultStateType) => (
  $set('createNewPasswordPending', true, state)
);

export const receivedCreateNewPasswordSuccess = (state: DefaultStateType) => (
  $all(
    $set('createNewPasswordPending', false),
    $set('createNewPasswordError', null),
    state,
  )
);

export const receivedCreateNewPasswordFail = (state: DefaultStateType, msg: string) => (
  $all(
    $set('createNewPasswordPending', false),
    $set('createNewPasswordError', msg),
    state,
  )
);

export default createReducer({
  [Actions.sendSessionValidationRequest]: sendSessionValidationRequest,
  [Actions.receivedSessionValidationSuccess]: receivedSessionValidationSuccess,
  [Actions.receivedSessionValidationFail]: receivedSessionValidationFail,
  [Actions.sendLogInRequest]: sendLogInRequest,
  [Actions.receivedLogInSuccess]: receivedLogInSuccess,
  [Actions.receivedLogInFail]: receivedLogInFail,
  [Actions.sendLogOutRequest]: sendLogOutRequest,
  [Actions.receivedLogOutSuccess]: receivedLogOutSuccess,
  [Actions.receivedLogOutFail]: receivedLogOutFail,
  [Actions.sendResetPasswordRequest]: sendResetPasswordRequest,
  [Actions.receivedResetPasswordSuccess]: receivedResetPasswordSuccess,
  [Actions.sendCreateNewPasswordRequest]: sendCreateNewPasswordRequest,
  [Actions.receivedCreateNewPasswordSuccess]: receivedCreateNewPasswordSuccess,
  [Actions.receivedCreateNewPasswordFail]: receivedCreateNewPasswordFail,
}, initialState);
