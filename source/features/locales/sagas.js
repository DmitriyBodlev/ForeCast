import { takeLatest, call, put} from 'redux-saga/effects';
import { sendRequest } from '../../utils/api';
import { isEmpty } from 'ramda';
import * as globalHelpers from '../../utils/global-helpers';
import endpointsMap from '../../utils/endpoints-map';
import * as Actions from './actions';


export function* getLocaleSaga(action: Object) {
  try {
    // const lng = action.payload['features:user-settings:locale'];
    // const url = yield call(endpointsMap.getLocaleEndpoint, lng);
    // const res = yield call(sendRequest, 'get', url);
    yield put(Actions.initialLoadLngFail());
    // if (res.status === 200) {
    //   if (isEmpty(res.data)) {
    //     yield put(Actions.initialLoadLngFail());
    //   } else {
    //     yield put(Actions.initialLoadLngSuccess(lng, {[lng]: res.data}));
    //   }
    // } else {
    //   yield put(Actions.initialLoadLngFail());
    // }
  } catch (error) {
    yield put(Actions.initialLoadLngFail(error));
  }
}

export function* handleChangeLngRequest(action: Object) {
  try {
    yield put(Actions.changeLngFail());
    // const lng = action.payload.lng;
    // const url = yield call(endpointsMap.getLocaleEndpoint, lng);
    // const res = yield call(sendRequest, 'get', url);
    // if (res.status === 200) {
    //   yield put(Actions.changeLngSuccess(lng, {[lng]: res.data}));
    // } else {
    //   yield call(globalHelpers.showToastrMessage, 'error', 'toastr:error:server');
    //   yield put(Actions.changeLngFail());
    // }
  } catch (error) {
    yield call(globalHelpers.showToastrMessage, 'error', 'toastr:error:server');
    yield put(Actions.changeLngFail(error));
  }
}

function* localesWatcherSaga() {
  yield takeLatest(Actions.initialLoadLngRequest, getLocaleSaga);
  yield takeLatest(Actions.changeLngRequest, handleChangeLngRequest);
}

export default localesWatcherSaga;
