import {
  takeLatest,
  call,
  put
} from 'redux-saga/effects';
import {
  buildApiRequest
} from '../../utils/api';
import * as globalHelpers from '../../utils/global-helpers';
import * as Actions from './actions';


export function* handleGetFirstData() {
  try {
    const res = yield call(buildApiRequest,
      'GET',
      '/youtube/v3/videos',
      {
        'chart': 'mostPopular',
        'regionCode': 'UA',
        'part': 'snippet,contentDetails,statistics',
        'videoCategoryId': '',
        'maxResults': '20',
      });
    const ids = res.result.items.map((item: Object) => {
      return item.snippet.channelId;
    }).join(',');
    const res2 = yield call(buildApiRequest,
      'GET',
      '/youtube/v3/channels',
      {
        'id': ids,
        'part': 'snippet,contentDetails,statistics,brandingSettings',
      });
    res2.result.items.forEach((item: Object) => {
      console.log(item.brandingSettings.channel.title, item.brandingSettings.image.bannerTabletHdImageUrl);
    });
    console.log(res2);
    const images = res2.result.items.map((item: Object) => {
      return item.brandingSettings.image.bannerTabletHdImageUrl;
    });
    if (res2.status === 200) {
      yield put(Actions.getFirstDataSuccess({
        data: images,
      }));
    } else {
      yield call(globalHelpers.showToastrMessage, 'error', 'toastr:error:server');
      yield put(Actions.getFirstDataFail());
    }
  } catch (error) {
    yield put(Actions.getFirstDataFail());
    yield call(globalHelpers.showToastrMessage, 'error', 'toastr:error:server');
  }
}

function* channelsWatcherSaga() {
  yield takeLatest(Actions.getFirstDataRequest, handleGetFirstData);
}

export default channelsWatcherSaga;
