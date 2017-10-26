// Standalone runtime for Regenerator-compiled generator and async functions
import 'regenerator-runtime/runtime';

import defaultReducer, * as Reducer from '../reducer';
import * as Actions from '../actions';

describe('features/user-settings/reducer', () => {
  const initialState = Reducer.initialState;

  it('should return the initial state', () => {
    expect(defaultReducer(undefined, {})).toEqual(initialState);
  });

  it('should handle current user settings actions', () => {
    const openedLoaderState = defaultReducer(initialState, Actions.openLoader({showDimmer: true}));

    expect(openedLoaderState.isOpened).toBeTruthy();
    expect(openedLoaderState.showDimmer).toBeTruthy();

    const closedLoaderState = defaultReducer(initialState, Actions.closeLoader());

    expect(closedLoaderState.isOpened).toBeFalsy();
    expect(closedLoaderState.showDimmer).toBeFalsy();
  });
});
