// Standalone runtime for Regenerator-compiled generator and async functions
import 'regenerator-runtime/runtime';

import { global, initialState } from '../reducer';
import * as Actions from '../global-actions';

describe('source/reducer', () => {
  it('should return the initial state', () => {
    expect(global(undefined, {})).toEqual(initialState);
  });

  it('should handle initial data load actions', () => {
    const pendingState = global(initialState, Actions.initialDataLoadRequest());
    const successState =
      global(pendingState, Actions.initialDataLoadSuccess());
    const failState = global(successState, Actions.initialDataLoadFail());

    expect(pendingState.initialDataLoading).toBeTruthy();

    expect(successState.initialDataLoading).toBeFalsy();
    expect(successState.initialDataLoaded).toBeTruthy();

    expect(failState.initialDataLoading).toBeFalsy();
    expect(failState.initialDataLoaded).toBeFalsy();
  });
});
