import { combineReducers } from 'redux';
import { $all, $set } from 'plow-js';
import { routerReducer as router } from 'react-router-redux';
import { reducer as form } from 'redux-form';
import { reducer as toastr } from 'react-redux-toastr';
import { createReducer } from 'redux-act';
import * as Actions from './global-actions';

export const initialState = {
  initialDataLoading: false,
  initialDataLoaded: false,
};

export const initialDataLoadRequest = (state: Object) => (
  $set('initialDataLoading', true, state)
);

export const initialDataLoadSuccess = (state: Object) => (
  $all(
    $set('initialDataLoading', false),
    $set('initialDataLoaded', true),
    state,
  )
);

export const initialDataLoadFail = (state: Object) => (
  $all(
    $set('initialDataLoading', false),
    $set('initialDataLoaded', false),
    state,
  )
);

export const global = createReducer({
  [Actions.initialDataLoadRequest]: initialDataLoadRequest,
  [Actions.initialDataLoadSuccess]: initialDataLoadSuccess,
  [Actions.initialDataLoadFail]: initialDataLoadFail,
}, initialState);

import auth from './features/auth/reducer';
import locales from './features/locales/reducer';
import permissions from './features/permissions/reducer';
import modal from './components/common/modal/reducer';
import menus from './features/menus/reducer';
import loader from './components/common/loader/reducer';
import channels from './features/channels/reducer';

const appReducer = combineReducers({
  router,
  form,
  toastr,
  global,
  auth,
  locales,
  modal,
  permissions,
  menus,
  loader,
  channels,
});

const rootReducer = (state: Object, action: Object) => {
  if (action.type === 'CLEAR_STORE') {
    return appReducer(undefined, action);
  }
  return appReducer(state, action);
};

export default rootReducer;
