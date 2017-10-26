/**
 * The global state selectors
 */

import { createSelector } from 'reselect';

const selectGlobalStore = (state: Object) => state.global;

const makeSelectGlobal = () => createSelector(
  selectGlobalStore,
  (global: Object) => global,
);

const makeSelectInitialDataLoading = () => createSelector(
  selectGlobalStore,
  (global: Object) => global.initialDataLoading,
);

export {
  selectGlobalStore,
  makeSelectGlobal,
  makeSelectInitialDataLoading,
};
