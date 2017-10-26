import { createReducer } from 'redux-act';
import { $all, $set, $toggle, $add } from 'plow-js';
import * as Actions from './actions';

export const initialState = {
  requestPending: false,
  openedSidebar: false,
  menus: null,
};

export const getMenusRequest = (state: Object) => (
  $set('requestPending', true, state)
);

export const receivedMenusSuccess = (state: Object, data: Array) => (
  $all(
    $set('requestPending', false),
    $set('menus', data),
    state,
  )
);

export const receivedMenusFail = (state: Object) => (
  $set('requestPending', false, state)
);

export const toggleSidebar = (state: Object) => (
  $toggle('openedSidebar', state)
);

export const handleAddingSidebarItemToNav = (state: Object, item: Object) => (
  $add('menus.navigationMenuItems', item, state)
);

export default createReducer({
  [Actions.getMenusRequest]: getMenusRequest,
  [Actions.receivedMenusSuccess]: receivedMenusSuccess,
  [Actions.receivedMenusFail]: receivedMenusFail,
  [Actions.toggleSidebar]: toggleSidebar,
  [Actions.handleAddingSidebarItemToNav]: handleAddingSidebarItemToNav,
}, initialState);

