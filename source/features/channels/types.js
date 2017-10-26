export type LoginDataType = {
  +access_token: string,
  +enterprise_guid: string,
  +expires_in: number,
  +jti: string,
  +login_id: string,
  +refresh_token: string,
  +scope: string,
  +token_type: string,
  +user_guid: string,
};

export type SessionDataType = {
  +authorities: Array<string>,
  +client_id: string,
  +enterprise_guid: string,
  +exp: number,
  +jti: string,
  +login_id: string,
  +scope: Array<string>,
  +user_guid: string,
  +user_name: string,
};

export type DefaultStateType = {
  initialSessionValidationPending: boolean,
  logInPending: boolean,
  logInError: null | string,
  loggedIn: boolean,
  logOutPending: boolean,
  logOutError: null | string,
  resetPasswordPending: boolean,
  resetPasswordError: null | string,
  createNewPasswordPending: boolean,
  createNewPasswordError: null | string,
  loginData: null | LoginDataType,
  sessionData: null | SessionDataType,
};
