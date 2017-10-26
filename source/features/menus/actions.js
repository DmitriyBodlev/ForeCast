import { createAction } from 'redux-act';

export const getMenusRequest = createAction('getMenusRequest');
export const receivedMenusSuccess = createAction('receivedMenusSuccess');
export const receivedMenusFail = createAction('receivedMenusFail');

export const handleClickNavItemRequest = createAction('handleClickNavItemRequest');

export const toggleSidebar = createAction('toggleSidebarRequest');

export const handleAddingSidebarItemToNav = createAction('handleAddingSidebarItemToNav');
