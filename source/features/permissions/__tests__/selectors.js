// Standalone runtime for Regenerator-compiled generator and async functions
import 'regenerator-runtime/runtime';

import {
  selectPermissionsStore,
  makeSelectPermissionsList,
  selectPermissionByItem } from '../selectors';

import * as Reducer from '../reducer';

const permissionsState = Reducer.initialState;

const store = {
  permissions: {
    ...permissionsState,
  },
};

const item = 'NavComponent';
const mockPermission = {
  'guid': 'D63681FF-83BE-4BD1-9D35-5B03A3E40A57',
  'roleGuid': '0b3525ee-2471-48b3-86ec-b95aafbde3bi',
  'itemGroup': 'user_settings',
  'itemGroupOwner': null,
  'item': 'NavComponent',
  'permission_on_item': 'WRITE',
  'description': 'The main vabigation menu',
};

describe('features/permissions/selectors', () => {
  it('selectPermissionsStore should select permissions store', () => {
    expect(selectPermissionsStore(store)).toEqual(store.permissions);
  });

  it('makeSelectPermissionsList should select permissions list', () => {
    const permissionsSelector = makeSelectPermissionsList();

    expect(permissionsSelector(store)).toEqual(store.permissions.permissionsList);

    permissionsSelector(store);

    expect(permissionsSelector.recomputations()).toEqual(1);
  });

  it('selectPermissionByItem should select permission by item name', () => {
    const newState = Reducer.receivedPermissionsSuccess(permissionsState, [mockPermission]);

    const newStore = {
      permissions: {
        ...newState,
      },
    };

    const expectetion = selectPermissionByItem(newStore, item);

    expect(expectetion).toEqual(mockPermission);
  });

  it('selectPermissionByItem should select and recanculate properly', () => {
    const newState = Reducer.receivedPermissionsSuccess(permissionsState, [mockPermission]);

    const newStore = {
      permissions: {
        ...newState,
      },
    };

    const instance1 = selectPermissionByItem(newStore, item);
    const instance2 = selectPermissionByItem(newStore, item);
    selectPermissionByItem(newStore, item);

    expect(instance1).toEqual(instance2);

    const permissionByItemSelector = selectPermissionByItem.getMatchingSelector(newStore, item);

    expect(permissionByItemSelector.recomputations()).toEqual(2);
  });
});
