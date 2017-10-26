/**
 * The permissions state selectors
 */

import { createSelector } from 'reselect';
import createCachedSelector from 're-reselect';


const selectPermissionsStore = (state: Object) => state.permissions;

const makeSelectPermissionsList = () => createSelector(
  selectPermissionsStore,
  (permissionsState: Object) => permissionsState.permissionsList,
);

const selectPermissionByItem = createCachedSelector(
  selectPermissionsStore,
  (permissionsState: Object, itemName: string) => itemName,
  (permissionsState: Object, itemName: string) => {
    const permissions = permissionsState.permissionsList.entities.permissions;
    return permissions[itemName] ? permissions[itemName] : null;
  },
)(
  (permissionsState: Object, itemName: string) => itemName,
);


export {
  selectPermissionsStore,
  makeSelectPermissionsList,
  selectPermissionByItem,
};
