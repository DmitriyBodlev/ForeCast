// Standalone runtime for Regenerator-compiled generator and async functions
import 'regenerator-runtime/runtime';

import defaultReducer, * as Reducer from '../reducer';
import * as Actions from '../actions';

describe('features/menus/reducer', () => {
  const initialState = Reducer.initialState;
  const mockData = {
    navigationMenuItems: [],
  };
  const mockItem = {
    some: 'some',
  };

  it('should return the initial state', () => {
    expect(defaultReducer(undefined, {})).toEqual(initialState);
  });

  it('should handle get manus actions', () => {
    const pendingState = defaultReducer(initialState, Actions.getMenusRequest());
    const successState =
      defaultReducer(pendingState, Actions.receivedMenusSuccess(mockData));
    const failState = defaultReducer(successState, Actions.receivedMenusFail());

    expect(pendingState.requestPending).toBeTruthy();

    expect(successState.requestPending).toBeFalsy();
    expect(successState.menus).toEqual(mockData);

    expect(failState.requestPending).toBeFalsy();
  });

  it('should handle toggle sidebar action', () => {
    const firstState = defaultReducer(initialState, Actions.toggleSidebar());
    const secondState = defaultReducer(firstState, Actions.toggleSidebar());

    expect(firstState.openedSidebar).toBeTruthy();
    expect(secondState.openedSidebar).toBeFalsy();
  });

  it('should handle adding sidebar item to nav', () => {
    const state = defaultReducer(initialState, Actions.receivedMenusSuccess(mockData));
    const newState = defaultReducer(state, Actions.handleAddingSidebarItemToNav(mockItem));

    expect(newState.menus.navigationMenuItems[0]).toEqual(mockItem);
  });
});
