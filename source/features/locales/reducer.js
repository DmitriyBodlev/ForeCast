import { createReducer } from 'redux-act';
import { $all, $set } from 'plow-js';
import en from '../../locale-default';
import { DefaultStateType } from './types';
import * as Actions from './actions';

export const initialState = {
  initialLoadPending: true,
  changeLngPending: false,
  currentLng: 'en',
  lngs: {
    en: { ...en },
    ua: null,
  },
};

export const initialLoadLngRequest = (state: DefaultStateType) => (
  $set('initialLoadPending', true, state)
);

export const initialLoadLngSuccess = (state: DefaultStateType, payload: Object) => (
  $all(
    $set('initialLoadPending', false),
    $set('currentLng', payload.lng),
    $set(`lngs.${payload.lng}`, payload.data[payload.lng]),
    state,
  )
);

export const initialLoadLngFail = (state: DefaultStateType) => (
  $set('initialLoadPending', false, state)
);

export const changeLngRequest = (state: DefaultStateType) => (
  $set('changeLngPending', true, state)
);

export const changeLngSuccess = (state: DefaultStateType, payload: Object) => (
  $all(
    $set('changeLngPending', false),
    $set('currentLng', payload.lng),
    $set(`lngs.${payload.lng}`, payload.data[payload.lng]),
    state,
  )
);

export const changeLngFail = (state: DefaultStateType) => (
  $set('changeLngPending', false, state)
);

export default createReducer({
  [Actions.initialLoadLngRequest]: initialLoadLngRequest,
  [Actions.initialLoadLngSuccess]: initialLoadLngSuccess,
  [Actions.initialLoadLngFail]: initialLoadLngFail,
  [Actions.changeLngRequest]: changeLngRequest,
  [Actions.changeLngSuccess]: changeLngSuccess,
  [Actions.changeLngFail]: changeLngFail,
}, initialState);
