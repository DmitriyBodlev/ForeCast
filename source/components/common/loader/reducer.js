import { createReducer } from 'redux-act';
import { $all, $set } from 'plow-js';
import * as Actions from './actions.js';

export const initialState = {
  isOpened: false,
  showDimmer: false,
};

export const openLoader = (state: Object, payload: Object = false) => (
  $all(
    $set('isOpened', true),
    $set('showDimmer', payload.showDimmer),
    state,
  )
);

export const closeLoader = (state: Object) => (
  $all(
    $set('isOpened', false),
    $set('showDimmer', false),
    state,
  )
);

export default createReducer({
  [Actions.openLoader]: openLoader,
  [Actions.closeLoader]: closeLoader,
}, initialState);
