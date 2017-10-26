import { fork, call } from 'redux-saga/effects';
import { getToken } from '../utils/global-helpers';
import loginWatcherSaga, { sessionSaga } from '../features/auth/sagas';
import localesWatcherSaga from '../features/locales/sagas';
import permissionsWatcherSaga from '../features/permissions/sagas';
import menusWatcherSaga from '../features/menus/sagas';
import { initialDataWatcherSaga } from './initial-data';
import channelsWatcherSaga from '../features/channels/sagas';

export default function* mainSaga() {
  yield [
    // fork(loginWatcherSaga),
    // fork(localesWatcherSaga),
    // fork(initialDataWatcherSaga),
    // fork(permissionsWatcherSaga),
    // fork(menusWatcherSaga),
    fork(channelsWatcherSaga),
  ];

  const token = yield call(getToken);
  yield call(sessionSaga, token);
}
