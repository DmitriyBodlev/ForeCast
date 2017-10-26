import React from 'react';
import { take, takeLatest, call, put, fork } from 'redux-saga/effects';
import { sendRequest } from '../../utils/api';
import endpointsMap from '../../utils/endpoints-map';
import * as Actions from './actions';
import { openModal } from '../../components/common/modal/actions';

export function* getMenusSaga() {
  try {
    const res = yield call(sendRequest, 'get', endpointsMap.menus);
    if (res.status === 200) {
      yield put(Actions.receivedMenusSuccess(res.data));
    } else {
      yield put(Actions.receivedMenusFail());
    }
  } catch (error) {
    yield put(Actions.receivedMenusFail(error));
  }
}

export function* handleNavItemsClickSaga() {
  while (true) { // eslint-disable-line
    const request = yield take(Actions.handleClickNavItemRequest);
    switch (request.payload) {
      case 'toggleSidebar':
        yield put(Actions.toggleSidebar());
        break;
      case 'openModal':
        yield put(openModal({}));
        break;
      default:
        yield put({ type: 'DEFAULT_CLICK_NAV_ITEM_ACTION' });
        break;
    }
  }
}

export function* menusWatcherSaga() {
  yield fork(handleNavItemsClickSaga);
  yield takeLatest(Actions.getMenusRequest, getMenusSaga);
}

export default menusWatcherSaga;
