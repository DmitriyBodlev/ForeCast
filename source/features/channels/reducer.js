import { createReducer } from 'redux-act';
import { $all, $set } from 'plow-js';
import { DefaultStateType } from './types';
import * as Actions from './actions';

export const initialState = {
  initialLoadPending: false,
  data: null,
};

export const getFirstDataSuccess = (state: DefaultStateType, payload: Object) => {
  console.log(payload);
  return $all(
    $set('data', payload.data),
    $set('initialLoadPending', false),
    state,
  );
};

export const getFirstDataRequest = (state: DefaultStateType) => {
  return $set('initialLoadPending', true, state);
};

export const getFirstDataFail = (state: DefaultStateType) => {
  return $set('initialLoadPending', false, state);
};

export default createReducer({
  [Actions.getFirstDataRequest]: getFirstDataRequest,
  [Actions.getFirstDataSuccess]: getFirstDataSuccess,
  [Actions.getFirstDataFail]: getFirstDataFail,
}, initialState);
