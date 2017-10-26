// Standalone runtime for Regenerator-compiled generator and async functions
import 'regenerator-runtime/runtime';

import defaultReducer, * as Reducer from '../reducer';
import * as Actions from '../actions';

describe('features/locales/reducer', () => {
  const initialState = Reducer.initialState;
  const lng = 'ua';
  const responseData = {
    'ua': {
      'hello': 'привіт',
    },
  };

  it('should return the initial state', () => {
    expect(defaultReducer(undefined, {})).toEqual(initialState);
  });

  it('should handle initial load language session validation actions', () => {
    const pendingState = defaultReducer(initialState, Actions.initialLoadLngRequest());
    const successState =
      defaultReducer(pendingState, Actions.initialLoadLngSuccess(lng, responseData));
    const failState = defaultReducer(successState, Actions.initialLoadLngFail());

    expect(pendingState.initialLoadPending).toBeTruthy();

    expect(successState.initialLoadPending).toBeFalsy();
    expect(successState.currentLng).toEqual(lng);
    expect(successState.lngs[lng]).toEqual(responseData[lng]);

    expect(failState.initialLoadPending).toBeFalsy();
  });

  it('should handle change language session validation actions', () => {
    const pendingState = defaultReducer(initialState, Actions.changeLngRequest());
    const successState =
      defaultReducer(pendingState, Actions.changeLngSuccess(lng, responseData));
    const failState = defaultReducer(successState, Actions.changeLngFail());

    expect(pendingState.changeLngPending).toBeTruthy();

    expect(successState.changeLngPending).toBeFalsy();
    expect(successState.currentLng).toEqual(lng);
    expect(successState.lngs[lng]).toEqual(responseData[lng]);

    expect(failState.changeLngPending).toBeFalsy();
  });
});
