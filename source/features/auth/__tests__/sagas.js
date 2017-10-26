// Standalone runtime for Regenerator-compiled generator and async functions
import 'regenerator-runtime/runtime';

import sagaHelper from 'redux-saga-testing';
import { call, put } from 'redux-saga/effects';
import { sendRequest } from '../../../utils/api';
import * as globalHelpers from '../../../utils/global-helpers';
import endpointsMap from '../../../utils/endpoints-map';
import routesMap from '../../../utils/routes-map';
import * as Sagas from '../sagas';
import * as Actions from '../actions';

const auth = {
  username: 'frontend',
  password: 'secret',
};

describe('features/auth/sagas', () => {
  const data = {
    grant_type: 'password',
    username: 'first',
    password: 'first',
  };
  const successResponse = {
    access_token: 'some token',
    enterpriseGuid: '0',
    expires_in: 3599,
    jti: 'e119f82d-534b-4268-883a-17942829e686',
    refresh_token: 'some token',
    scope: 'read write',
    token_type: 'bearer',
  };

  describe('handleLoginRequest: success response and clicked "remember"', () => {
    const payload = {
      remember: true,
      username: 'first',
      password: 'first',
    };
    const it = sagaHelper(Sagas.handleLoginRequest({
      payload,
    }));

    it('should have called the mock API', (result: Object) => {
      const next = call(sendRequest, 'post', endpointsMap.login, { data, auth }, true);

      expect(result).toEqual(next);

      return { status: 200, data: successResponse };
    });

    it('should call the setAuthToken', (result: Object) => {
      const next = call(globalHelpers.setAuthToken, successResponse.access_token);

      expect(result).toEqual(next);
    });

    it('should trigger the logInSuccess action', (result: Object) => {
      const next = put(Actions.logInSuccess(successResponse));

      expect(result).toEqual(next);
    });

    it('and then nothing', (result: void) => {
      expect(result).toBeUndefined();
    });
  });

  describe('handleLoginRequest: success response and without "remember"', () => {
    const payload = {
      remember: false,
      username: 'first',
      password: 'first',
    };
    const it = sagaHelper(Sagas.handleLoginRequest({
      payload,
    }));

    it('should have called the mock login endpoint', (result: Object) => {
      const next = call(sendRequest, 'post', endpointsMap.login, { data, auth }, true);

      expect(result).toEqual(next);

      return { status: 200, data: successResponse };
    });

    it('should call the setAuthTokenToSession', (result: Object) => {
      const next = call(globalHelpers.setAuthTokenToSession, successResponse.access_token);

      expect(result).toEqual(next);
    });

    it('should trigger the logInSuccess action', (result: Object) => {
      const next = put(Actions.logInSuccess(successResponse));

      expect(result).toEqual(next);
    });

    it('and then nothing', (result: void) => {
      expect(result).toBeUndefined();
    });
  });

  describe('handleLoginRequest: fail response', () => {
    const payload = {
      remember: false,
      username: 'first',
      password: 'first',
    };
    const it = sagaHelper(Sagas.handleLoginRequest({
      payload,
    }));

    it('should have called the mock login endpoint', (result: Object) => {
      const next = call(sendRequest, 'post', endpointsMap.login, { data, auth }, true);

      expect(result).toEqual(next);

      return { status: 300 };
    });

    it('should call showing Toastr error message', (result: Object) => {
      const next = call(globalHelpers.showToastrMessage, 'error', 'toastr:error:unknown');

      expect(result).toEqual(next);
    });

    it('and then nothing', (result: void) => {
      expect(result).toBeUndefined();
    });
  });

  describe('handleResetPasswordRequest: success response', () => {
    const payload = {
      email: 'some email',
    };
    const data = {
      email: 'some email',
    };
    const it = sagaHelper(Sagas.handleResetPasswordRequest({
      payload,
    }));

    it('should have called the mock API', (result: Object) => {
      const next = call(sendRequest, 'post', endpointsMap.forgot, { data, auth }, true);

      expect(result).toEqual(next);

      return { status: 200 };
    });

    it('should call showing Toastr success message', (result: Object) => {
      const next = call(globalHelpers.showToastrMessage, 'success', 'toastr:success:forgot:psw');

      expect(result).toEqual(next);
    });

    it('and then nothing', (result: void) => {
      expect(result).toBeUndefined();
    });
  });


  describe('handleResetPasswordRequest: fail response', () => {
    const payload = {
      email: 'some email',
    };
    const data = {
      email: 'some email',
    };
    const it = sagaHelper(Sagas.handleResetPasswordRequest({
      payload,
    }));

    it('should have called the mock API', (result: Object) => {
      const next = call(sendRequest, 'post', endpointsMap.forgot, { data, auth }, true);

      expect(result).toEqual(next);

      return { status: 300 };
    });

    it('should call showing Toastr error message', (result: Object) => {
      const next = call(globalHelpers.showToastrMessage, 'error', 'toastr:error:unknown');

      expect(result).toEqual(next);
    });

    it('and then nothing', (result: void) => {
      expect(result).toBeUndefined();
    });
  });

  describe('handleCeateNewPasswordRequest: success response', () => {
    const payload = {
      newPassword: 'some psw',
      token: 'some token',
    };
    const data = {
      newPassword: 'some psw',
    };
    const headers = {
      Authorization: 'Bearer some token',
    };
    const it = sagaHelper(Sagas.handleCeateNewPasswordRequest({
      payload,
    }));

    it('should have called the mock API', (result: Object) => {
      const next = call(sendRequest, 'post', endpointsMap.reset, { data, headers });

      expect(result).toEqual(next);

      return { status: 200 };
    });

    it('should call showing Toastr success message', (result: Object) => {
      const next = call(globalHelpers.showToastrMessage, 'success', 'toastr:success:reset:psw');
      expect(result).toEqual(next);
    });

    it('should call redirect to login page', (result: Object) => {
      const next = call(globalHelpers.goToRoute, routesMap.loginPage);

      expect(result).toEqual(next);
    });

    it('should trigger the createNewPasswordSuccess action', (result: Object) => {
      const next = put(Actions.createNewPasswordSuccess());

      expect(result).toEqual(next);
    });

    it('and then nothing', (result: void) => {
      expect(result).toBeUndefined();
    });
  });

  describe('handleCeateNewPasswordRequest: fail response', () => {
    const payload = {
      newPassword: 'some psw',
      token: 'some token',
    };
    const data = {
      newPassword: 'some psw',
    };
    const headers = {
      Authorization: 'Bearer some token',
    };
    const it = sagaHelper(Sagas.handleCeateNewPasswordRequest({
      payload,
    }));

    it('should have called the mock API', (result: Object) => {
      const next = call(sendRequest, 'post', endpointsMap.reset, { data, headers });

      expect(result).toEqual(next);

      return { status: 300 };
    });

    it('should call showing Toastr error message', (result: Object) => {
      const next = call(globalHelpers.showToastrMessage, 'error', 'toastr:error:unknown');
      expect(result).toEqual(next);
    });

    it('and then nothing', (result: void) => {
      expect(result).toBeUndefined();
    });
  });

  describe('sessionSaga: success response', () => {
    const token = 'some token';
    const data = { token };
    const it = sagaHelper(Sagas.sessionSaga(token));

    it('should have called the mock check token endpoint', (result: Object) => {
      const next = call(sendRequest, 'post', endpointsMap.checkToken, { data, auth }, true);

      expect(result).toEqual(next);

      return { status: 200 };
    });

    it('should trigger the sessionValidationSuccess action', (result: Object) => {
      const next = put(Actions.sessionValidationSuccess());

      expect(result).toEqual(next);
    });

    it('and then nothing', (result: void) => {
      expect(result).toBeUndefined();
    });
  });

  describe('sessionSaga: fail response', () => {
    const token = 'some token';
    const data = { token };
    const it = sagaHelper(Sagas.sessionSaga(token));

    it('should have called the mock check token endpoint', (result: Object) => {
      const next = call(sendRequest, 'post', endpointsMap.checkToken, { data, auth }, true);

      expect(result).toEqual(next);

      return { status: 300 };
    });

    it('should trigger the sessionValidationFail action', (result: Object) => {
      const next = put(Actions.sessionValidationFail());

      expect(result).toEqual(next);
    });

    it('should call redirection to login page', (result: Object) => {
      const next = call(globalHelpers.goToRoute, routesMap.loginPage);

      expect(result).toEqual(next);
    });

    it('should trigger clear store action', (result: Object) => {
      const next = put({ type: 'CLEAR_STORE' });

      expect(result).toEqual(next);
    });

    it('and then nothing', (result: void) => {
      expect(result).toBeUndefined();
    });
  });

  describe('handleLogoutRequest saga should remove user from local and session storages', () => {
    const it = sagaHelper(Sagas.handleLogoutRequest());

    it('should trigger the logOutSuccess action', (result: Object) => {
      const next = put(Actions.logOutSuccess());

      expect(result).toEqual(next);
    });

    it('should call redirect to login page', (result: Object) => {
      const next = call(globalHelpers.goToRoute, routesMap.loginPage);

      expect(result).toEqual(next);
    });

    it('should call the removeAuthToken', (result: Object) => {
      const next = call(globalHelpers.removeAuthToken);

      expect(result).toEqual(next);
    });

    it('should call the removeAuthTokenFromSession', (result: Object) => {
      const next = call(globalHelpers.removeAuthTokenFromSession);

      expect(result).toEqual(next);
    });

    it('should trigger clear store action', (result: Object) => {
      const next = put({ type: 'CLEAR_STORE' });

      expect(result).toEqual(next);
    });

    it('and then nothing', (result: void) => {
      expect(result).toBeUndefined();
    });
  });
});
