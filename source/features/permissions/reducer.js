import { createReducer } from 'redux-act';
import { normalize } from 'normalizr';
import { $all, $set } from 'plow-js';
import * as Actions from './actions';
import * as schema from './schema';

export const initialState = {
  requestPending: false,
  permissionsList: {
    entities: {
      permissions: {},
    },
    result: [],
  },
};

export const getPermissionsRequest = (state: Object) => (
  $set('requestPending', true, state)
);

export const receivedPermissionsSuccess = (state: Object, data: Array) => (
  $all(
    $set('requestPending', false),
    $set('permissionsList', normalize(data, schema.userPermissionsSchema)),
    state,
  )
);

export const receivedPermissionsFail = (state: Object) => (
  $set('requestPending', false, state)
);

export default createReducer({
  [Actions.getPermissionsRequest]: getPermissionsRequest,
  [Actions.receivedPermissionsSuccess]: receivedPermissionsSuccess,
  [Actions.receivedPermissionsFail]: receivedPermissionsFail,
}, initialState);

