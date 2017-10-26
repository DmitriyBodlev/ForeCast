import * as Actions from '../actions';

describe('features/permissions/actions', () => {
  it('getPermissionsRequest should dispatch the action', () => {
    const expectedAction = {
      type: 'getPermissionsRequest',
      payload: 'data',
    };

    const action = Actions.getPermissionsRequest('data');

    expect(action.type).toEqual(expect.stringContaining('getPermissionsRequest'));

    expect(action.payload).toEqual(expectedAction.payload);
  });

  it('receivedPermissionsSuccess should dispatch the action', () => {
    const expectedAction = {
      type: 'receivedPermissionsSuccess',
      payload: 'data',
    };

    const action = Actions.receivedPermissionsSuccess('data');

    expect(action.type).toEqual(expect.stringContaining('receivedPermissionsSuccess'));

    expect(action.payload).toEqual(expectedAction.payload);
  });

  it('receivedPermissionsFail should dispatch the action', () => {
    const expectedAction = {
      type: 'receivedPermissionsFail',
      payload: 'data',
    };

    const action = Actions.receivedPermissionsFail('data');

    expect(action.type).toEqual(expect.stringContaining('receivedPermissionsFail'));

    expect(action.payload).toEqual(expectedAction.payload);
  });
});
