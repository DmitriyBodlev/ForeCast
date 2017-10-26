import * as Actions from '../actions';

describe('features/menus/actions', () => {
  it('getMenusRequest should dispatch the action', () => {
    const expectedAction = {
      type: 'getMenusRequest',
      payload: 'data',
    };

    const action = Actions.getMenusRequest('data');

    expect(action.type).toEqual(expect.stringContaining('getMenusRequest'));

    expect(action.payload).toEqual(expectedAction.payload);
  });

  it('receivedMenusSuccess should dispatch the action', () => {
    const expectedAction = {
      type: 'receivedMenusSuccess',
      payload: 'data',
    };

    const action = Actions.receivedMenusSuccess('data');

    expect(action.type).toEqual(expect.stringContaining('receivedMenusSuccess'));

    expect(action.payload).toEqual(expectedAction.payload);
  });

  it('receivedMenusFail should dispatch the action', () => {
    const expectedAction = {
      type: 'receivedMenusFail',
      payload: 'data',
    };

    const action = Actions.receivedMenusFail('data');

    expect(action.type).toEqual(expect.stringContaining('receivedMenusFail'));

    expect(action.payload).toEqual(expectedAction.payload);
  });

  it('handleClickNavItemRequest should dispatch the action', () => {
    const expectedAction = {
      type: 'handleClickNavItemRequest',
      payload: 'data',
    };

    const action = Actions.handleClickNavItemRequest('data');

    expect(action.type).toEqual(expect.stringContaining('handleClickNavItemRequest'));

    expect(action.payload).toEqual(expectedAction.payload);
  });

  it('toggleSidebar should dispatch the action', () => {
    const expectedAction = {
      type: 'toggleSidebar',
      payload: 'data',
    };

    const action = Actions.toggleSidebar('data');

    expect(action.type).toEqual(expect.stringContaining('toggleSidebar'));

    expect(action.payload).toEqual(expectedAction.payload);
  });

  it('handleAddingSidebarItemToNav should dispatch the action', () => {
    const expectedAction = {
      type: 'handleAddingSidebarItemToNav',
      payload: 'data',
    };

    const action = Actions.handleAddingSidebarItemToNav('data');

    expect(action.type).toEqual(expect.stringContaining('handleAddingSidebarItemToNav'));

    expect(action.payload).toEqual(expectedAction.payload);
  });
});
