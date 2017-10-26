/**
 * The loader state selectors
 */

import { createSelector } from 'reselect';

const selectLoaderStore = (state: Object) => state.loader;

const makeSelectLoader = () => createSelector(
  selectLoaderStore,
  (loader: Object) => loader,
);

export {
  selectLoaderStore,
  makeSelectLoader,
};
