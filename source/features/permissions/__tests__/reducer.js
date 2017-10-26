// Standalone runtime for Regenerator-compiled generator and async functions
import 'regenerator-runtime/runtime';

import defaultReducer, * as Reducer from '../reducer';
import * as Actions from '../actions';

describe('features/permissions/reducer', () => {
  const initialState = Reducer.initialState;

  const item = 'NavComponent';
  const mockPermission = {
    'guid': 'some guid',
    'roleGuid': 'some role guid',
    'itemGroup': 'user_settings',
    'itemGroupOwner': null,
    'item': 'NavComponent',
    'permission_on_item': 'WRITE',
    'description': 'The main vabigation menu',
  };

  it('should return the initial state', () => {
    expect(defaultReducer(undefined, {})).toEqual(initialState);
  });

  it('should handle permissions actions', () => {
    const pendingState = defaultReducer(initialState, Actions.getPermissionsRequest());
    const successState =
      defaultReducer(pendingState, Actions.receivedPermissionsSuccess([mockPermission]));
    const failState = defaultReducer(pendingState, Actions.receivedPermissionsFail());

    expect(pendingState.requestPending).toBeTruthy();

    expect(successState.requestPending).toBeFalsy();
    expect(successState.permissionsList.entities.permissions[item]).toEqual(mockPermission);

    expect(failState.requestPending).toBeFalsy();
  });
});
