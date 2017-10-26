/**
 * The locales state selectors
 */

import { createSelector } from 'reselect';

const selectLocalesStore = (state: Object) => state.locales;

const makeSelectCurrentLocale = () => createSelector(
  selectLocalesStore,
  (locales: Object) => locales.currentLng,
);

const makeSelectLocale = () => createSelector(
  selectLocalesStore,
  (locales: Object) => locales.lngs[locales.currentLng],
);

export {
  selectLocalesStore,
  makeSelectCurrentLocale,
  makeSelectLocale,
};
