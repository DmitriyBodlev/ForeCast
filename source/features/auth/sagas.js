import { takeLatest, call, put } from 'redux-saga/effects';
import { sendRequest, setSigninStatus, buildApiRequest } from '../../utils/api';
import * as globalHelpers from '../../utils/global-helpers';
import endpointsMap from '../../utils/endpoints-map';
import routesMap from '../../utils/routes-map';
import * as Actions from './actions';
import * as GetDataActions from '../channels/actions';

const auth = {
  username: 'frontend',
  password: 'secret',
};

export function* handleLoginRequest(action: Object) {
  try {
    const { username, password, remember } = action.payload;
    const data = {
      grant_type: 'password',
      username,
      password,
    };
    const res = yield call(sendRequest, 'post', endpointsMap.login, { data, auth }, true);
    if (res.status === 200) {
      if (remember) {
        yield call(globalHelpers.setAuthToken, res.data.access_token);
      } else {
        yield call(globalHelpers.setAuthTokenToSession, res.data.access_token);
      }
      yield put(Actions.receivedLogInSuccess(res.data));
    } else {
      yield call(globalHelpers.showToastrMessage, 'error', 'toastr:error:unknown');
    }
  } catch (error) {
    if (error && error.response) {
      yield put(Actions.receivedLogInFail(error.response.data.error_description));
    } else {
      yield call(globalHelpers.showToastrMessage, 'error', 'toastr:error:change-locale');
    }
  }
}

export function* handleResetPasswordRequest(action: Object) {
  try {
    const { email, loginId } = action.payload;
    const data = {
      email,
      loginId,
    };
    const res = yield call(sendRequest, 'post', endpointsMap.forgot, { data, auth }, true);
    if (res.status === 200) {
      yield call(globalHelpers.showToastrMessage, 'success', 'toastr:success:forgot:psw');
    } else {
      yield call(globalHelpers.showToastrMessage, 'error', 'toastr:error:unknown');
    }
  } catch (error) {
    yield call(globalHelpers.showToastrMessage, 'error', 'toastr:error:server');
  }
}

export function* handleCeateNewPasswordRequest(action: Object) {
  try {
    const { newPassword, token } = action.payload;
    const data = {
      newPassword,
    };
    const headers = {
      Authorization: `Bearer ${token}`,
    };
    const res = yield call(sendRequest, 'post', endpointsMap.reset, { data, headers });
    if (res.status === 200) {
      yield call(globalHelpers.showToastrMessage, 'success', 'toastr:success:reset:psw');
      yield call(globalHelpers.goToRoute, routesMap.loginPage);
      yield put(Actions.receivedCreateNewPasswordSuccess());
    } else {
      yield call(globalHelpers.showToastrMessage, 'error', 'toastr:error:unknown');
    }
  } catch (error) {
    if (error && error.response) {
      yield put(Actions.receivedCreateNewPasswordFail(error.response.data.error_description));
    } else {
      yield call(globalHelpers.showToastrMessage, 'error', 'toastr:error:server');
    }
  }
}

function some(res) {
  console.log('RESPONSE', res);
}

export function* sessionSaga(token: string) {
  try {
    yield put(Actions.receivedSessionValidationSuccess({}));
    // yield put(setSigninStatus());
    // yield call(buildApiRequest, 'GET',
    // '/youtube/v3/search', {
    //   'maxResults': '25',
    //   'part': 'snippet',
    //   'q': 'Руслан Усачев',
    //   'type': ''
    // },
    // null,
    // some);
    // console.log(res)
    // const data = { token };
    // const res = yield call(sendRequest, 'post', endpointsMap.checkToken, { data, auth }, true);
    // if (res.status === 200) {
    //   yield put(Actions.receivedSessionValidationSuccess(res.data));
    // } else {
    //   yield put(Actions.receivedSessionValidationFail());
    //   yield call(globalHelpers.goToRoute, routesMap.loginPage);
    //   yield put({ type: 'CLEAR_STORE' });
    // }
  } catch (error) {
    // yield put(Actions.receivedSessionValidationFail(error));
    // yield call(globalHelpers.goToRoute, routesMap.loginPage);
    // yield put({ type: 'CLEAR_STORE' });
  }
}

export function* handleLogoutRequest() {
  try {
    yield put(Actions.receivedLogOutSuccess());
    yield call(globalHelpers.goToRoute, routesMap.loginPage);
    yield call(globalHelpers.removeAuthToken);
    yield call(globalHelpers.removeAuthTokenFromSession);
    yield put({ type: 'CLEAR_STORE' });
  } catch (error) {
    yield call(globalHelpers.showToastrMessage, 'error', 'toastr:error:unknown');
    yield put(Actions.receivedLogOutFail(error));
  }
}

function* loginWatcherSaga() {
  yield takeLatest(Actions.sendLogInRequest, handleLoginRequest);
  yield takeLatest(Actions.sendLogOutRequest, handleLogoutRequest);
  yield takeLatest(Actions.sendResetPasswordRequest, handleResetPasswordRequest);
  yield takeLatest(Actions.sendCreateNewPasswordRequest, handleCeateNewPasswordRequest);
}

export default loginWatcherSaga;
