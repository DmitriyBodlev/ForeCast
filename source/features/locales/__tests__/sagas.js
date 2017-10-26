// Standalone runtime for Regenerator-compiled generator and async functions
import 'regenerator-runtime/runtime';

import sagaHelper from 'redux-saga-testing';
import { call, put } from 'redux-saga/effects';
import { sendRequest } from '../../../utils/api';
import * as globalHelpers from '../../../utils/global-helpers';
import endpointsMap from '../../../utils/endpoints-map';
import * as Actions from '../actions';
import * as Sagas from '../sagas';

describe('features/locales/sagas', () => {
  const lng = 'en';
  const url = endpointsMap.getLocaleEndpoint(lng);
  const successResponse = { some: '' };
  const successResponseEmpty = {};
  const payload = {
    'features:user-settings:locale': lng,
  };

  describe('getLocaleSaga: success response', () => {
    const it = sagaHelper(Sagas.getLocaleSaga({
      payload,
    }));

    it('should call getLocaleEndpoint', (result: Object) => {
      const next = call(endpointsMap.getLocaleEndpoint, lng);

      expect(result).toEqual(next);

      return url;
    });

    it('should have called the mock API', (result: Object) => {
      const next = call(sendRequest, 'get', url);

      expect(result).toEqual(next);

      return { status: 200, data: successResponse };
    });

    it('should call the initialLoadLngSuccess', (result: Object) => {
      const next = put(Actions.initialLoadLngSuccess(lng, {[lng]: successResponse}));

      expect(result).toEqual(next);
    });

    it('and then nothing', (result: void) => {
      expect(result).toBeUndefined();
    });
  });

  describe('getLocaleSaga: success response empty', () => {
    const it = sagaHelper(Sagas.getLocaleSaga({
      payload,
    }));

    it('should call getLocaleEndpoint', (result: Object) => {
      const next = call(endpointsMap.getLocaleEndpoint, lng);

      expect(result).toEqual(next);

      return url;
    });

    it('should have called the mock API', (result: Object) => {
      const next = call(sendRequest, 'get', url);

      expect(result).toEqual(next);

      return { status: 200, data: successResponseEmpty };
    });

    it('should call the initialLoadLngFail', (result: Object) => {
      const next = put(Actions.initialLoadLngFail());

      expect(result).toEqual(next);
    });

    it('and then nothing', (result: void) => {
      expect(result).toBeUndefined();
    });
  });

  describe('getLocaleSaga: fail response', () => {
    const it = sagaHelper(Sagas.getLocaleSaga({
      payload,
    }));

    it('should call getLocaleEndpoint', (result: Object) => {
      const next = call(endpointsMap.getLocaleEndpoint, lng);

      expect(result).toEqual(next);

      return url;
    });

    it('should have called the mock API', (result: Object) => {
      const next = call(sendRequest, 'get', url);

      expect(result).toEqual(next);

      return { status: 300 };
    });

    it('should call the initialLoadLngFail', (result: Object) => {
      const next = put(Actions.initialLoadLngFail());

      expect(result).toEqual(next);
    });

    it('and then nothing', (result: void) => {
      expect(result).toBeUndefined();
    });
  });

  describe('handleChangeLngRequest: success response', () => {
    const payload = {
      lng: 'en',
    };
    const it = sagaHelper(Sagas.handleChangeLngRequest({
      payload,
    }));

    it('should call getLocaleEndpoint', (result: Object) => {
      const next = call(endpointsMap.getLocaleEndpoint, lng);

      expect(result).toEqual(next);

      return url;
    });

    it('should have called the mock API', (result: Object) => {
      const next = call(sendRequest, 'get', url);

      expect(result).toEqual(next);

      return { status: 200, data: successResponse };
    });

    it('should call the changeLngSuccess', (result: Object) => {
      const next = put(Actions.changeLngSuccess(lng, {[lng]: successResponse}));

      expect(result).toEqual(next);
    });

    it('and then nothing', (result: void) => {
      expect(result).toBeUndefined();
    });
  });

  describe('handleChangeLngRequest: fail response', () => {
    const payload = {
      lng: 'en',
    };
    const it = sagaHelper(Sagas.handleChangeLngRequest({
      payload,
    }));

    it('should call getLocaleEndpoint', (result: Object) => {
      const next = call(endpointsMap.getLocaleEndpoint, lng);

      expect(result).toEqual(next);

      return url;
    });

    it('should have called the mock API', (result: Object) => {
      const next = call(sendRequest, 'get', url);

      expect(result).toEqual(next);

      return { status: 300 };
    });

    it('should call showing toastr error message', (result: Object) => {
      const next = call(globalHelpers.showToastrMessage, 'error', 'toastr:error:server');

      expect(result).toEqual(next);
    });

    it('should call the changeLngFail', (result: Object) => {
      const next = put(Actions.changeLngFail());

      expect(result).toEqual(next);
    });

    it('and then nothing', (result: void) => {
      expect(result).toBeUndefined();
    });
  });
});
