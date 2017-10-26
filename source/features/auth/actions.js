import { createAction } from 'redux-act';

export const sendSessionValidationRequest = createAction('sendSessionValidationRequest');
export const receivedSessionValidationSuccess = createAction('receivedSessionValidationSuccess');
export const receivedSessionValidationFail = createAction('receivedSessionValidationFail');

export const sendLogInRequest = createAction('sendLogInRequest');
export const receivedLogInSuccess = createAction('receivedLogInSuccess');
export const receivedLogInFail = createAction('receivedLogInFail');

export const sendLogOutRequest = createAction('sendLogOutRequest');
export const receivedLogOutSuccess = createAction('receivedLogOutSuccess');
export const receivedLogOutFail = createAction('receivedLogOutFail');

export const sendResetPasswordRequest = createAction('sendResetPasswordRequest');
export const receivedResetPasswordSuccess = createAction('receivedResetPasswordSuccess');
export const receivedResetPasswordFail = createAction('receivedResetPasswordFail');

export const sendCreateNewPasswordRequest = createAction('sentCreateNewPasswordRequest');
export const receivedCreateNewPasswordSuccess = createAction('receivedCreateNewPasswordSuccess');
export const receivedCreateNewPasswordFail = createAction('receivedCreateNewPasswordFail');
