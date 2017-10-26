/**
 * The menus state selectors
 */

import { createSelector } from 'reselect';


const selectMenusStore = (state: Object) => state.menus;

const makeSelectNavigation = () => createSelector(
  selectMenusStore,
  (menusState: Object) => menusState.menus ? menusState.menus.navigationMenuItems : null,
);

const makeSelectSidebar = () => createSelector(
  selectMenusStore,
  (menusState: Object) => menusState.menus ? menusState.menus.sideMenuItems : null,
);

const makeSelectOpenedSidebar = () => createSelector(
  selectMenusStore,
  (menusState: Object) => menusState.openedSidebar,
);

export {
  selectMenusStore,
  makeSelectNavigation,
  makeSelectSidebar,
  makeSelectOpenedSidebar,
};
