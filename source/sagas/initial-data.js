import { put, race, take, call, fork } from 'redux-saga/effects';
import {
  initialDataLoadRequest,
  initialDataLoadSuccess,
  initialDataLoadFail } from '../global-actions';
import * as globalHelpers from '../utils/global-helpers';
import * as authActions from '../features/auth/actions';
import { getPermissionsSaga } from '../features/permissions/sagas';
import { getMenusSaga } from '../features/menus/sagas';

export function* initialDataLoadingSaga() {
  try {
    console.log('go');
    // yield put(initialDataLoadRequest());

    yield put(initialDataLoadSuccess());
    // if (true) {
    //   yield put(initialDataLoadSuccess());
    // } else {
    //   yield put(initialDataLoadFail());
    //   yield call(
    //     globalHelpers.showToastrMessage, 'error', 'toastr:error:initial-data-loading:fail');
    // }
  } catch (error) {
    yield put(initialDataLoadFail(error));
    yield call(globalHelpers.showToastrMessage, 'error', 'toastr:error:initial-data-loading:fail');
  }
}

export function* initialDataWatcherSaga() {
  while (true) { // eslint-disable-line
    try {
      // const { session, logIn } = yield race({
      //   session: take(authActions.receivedSessionValidationSuccess),
      //   logIn: take(authActions.receivedLogInSuccess),
      // });
      if (true) {
        yield fork(getPermissionsSaga);
        yield fork(getMenusSaga);
        yield call(initialDataLoadingSaga);
      }
    } catch (error) {
      // TODO, with correct catching
      console.error('==================== INITIAL DATA LOADING ERROR ====================', error);
    }
  }
}
