import { createAction } from 'redux-act';

export const getPermissionsRequest = createAction('getPermissionsRequest');
export const receivedPermissionsSuccess = createAction('receivedPermissionsSuccess');
export const receivedPermissionsFail = createAction('receivedPermissionsFail');
