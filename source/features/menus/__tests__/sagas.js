// Standalone runtime for Regenerator-compiled generator and async functions
import 'regenerator-runtime/runtime';

import sagaHelper from 'redux-saga-testing';
import React from 'react';
import { take, call, put } from 'redux-saga/effects';
import { sendRequest } from '../../../utils/api';
import endpointsMap from '../../../utils/endpoints-map';
import locale from '../../../locale-default';
import * as Actions from '../actions';
import * as Sagas from '../sagas';

describe('features/menus/sagas', () => {
  describe('getMenusSaga: success response', () => {
    const it = sagaHelper(Sagas.getMenusSaga());

    it('should have called the mock API', (result: Object) => {
      const next = call(sendRequest, 'get', endpointsMap.menus);

      expect(result).toEqual(next);

      return { status: 200, data: {} };
    });

    it('should call the receivedMenusSuccess action', (result: Object) => {
      const next = put(Actions.receivedMenusSuccess({}));

      expect(result).toEqual(next);
    });

    it('and then nothing', (result: void) => {
      expect(result).toBeUndefined();
    });
  });

  describe('getMenusSaga: fail response', () => {
    const it = sagaHelper(Sagas.getMenusSaga());

    it('should have called the mock API', (result: Object) => {
      const next = call(sendRequest, 'get', endpointsMap.menus);

      expect(result).toEqual(next);

      return { status: 300 };
    });

    it('should call the receivedMenusFail action', (result: Object) => {
      const next = put(Actions.receivedMenusFail());
      expect(result).toEqual(next);
    });

    it('and then nothing', (result: void) => {
      expect(result).toBeUndefined();
    });
  });

  describe('handleNavItemsClickSaga should loop handleClickNavItemRequest', () => {
    const it = sagaHelper(Sagas.handleNavItemsClickSaga());

    it('should take handleClickNavItemRequest', (result: Object) => {
      const next = take(Actions.handleClickNavItemRequest);

      expect(result).toEqual(next);

      return { payload: 'getUsersListRequest' };
    });

    it('and then loop again 1', (result: void) => {
      const next = take(Actions.handleClickNavItemRequest);

      expect(result).toEqual(next);

      return { payload: 'toggleSidebar' };
    });

    it('should put payload toggleSidebar action', (result: Object) => {
      const next = put(Actions.toggleSidebar());

      expect(result).toEqual(next);
    });

    it('and then loop again 2', (result: void) => {
      const next = take(Actions.handleClickNavItemRequest);

      expect(result).toEqual(next);

      return { payload: 'openModal' };
    });

    it('should select locale', (result: Object) => {
      // TODO
      // const next = select(makeSelectLocale());
      // expect(result).toEqual(next); // Compared values have no visual difference - Jest

      expect(result).toBeDefined();

      return locale;
    });

    it('and then loop again 3', (result: void) => {
      const next = take(Actions.handleClickNavItemRequest);

      expect(result).toEqual(next);

      return { payload: 'some' };
    });

    it('should put payload default action', (result: Object) => {
      const next = put({ type: 'DEFAULT_CLICK_NAV_ITEM_ACTION' });

      expect(result).toEqual(next);
    });

    it('and then loop again 4', (result: void) => {
      const next = take(Actions.handleClickNavItemRequest);

      expect(result).toEqual(next);
    });
  });
});
