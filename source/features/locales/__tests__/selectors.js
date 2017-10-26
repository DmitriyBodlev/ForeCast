// Standalone runtime for Regenerator-compiled generator and async functions
import 'regenerator-runtime/runtime';

import {
  selectLocalesStore,
  makeSelectCurrentLocale,
  makeSelectLocale } from '../selectors';

import * as Reducer from '../reducer';

const localesState = Reducer.initialState;

const store = {
  locales: {
    ...localesState,
  },
};

describe('features/locale/selectors', () => {
  it('selectLocalesStore should select locales state', () => {
    expect(selectLocalesStore(store)).toEqual(store.locales);
  });

  it('makeSelectCurrentLocale should select current locale', () => {
    const currentLocaleSelector = makeSelectCurrentLocale();

    expect(currentLocaleSelector(store)).toEqual('en');
    currentLocaleSelector(store);

    const newState = Reducer.initialLoadLngSuccess(localesState, {
      lng: 'ua',
      data: {
        ua: 'some data',
      },
    });

    const newStore = {
      locales: {
        ...newState,
      },
    };

    expect(currentLocaleSelector(newStore)).toEqual('ua');
    currentLocaleSelector(newStore);

    expect(currentLocaleSelector.recomputations()).toEqual(2);
  });

  it('makeSelectLocale should select current locale dict', () => {
    const localeSelector = makeSelectLocale();

    expect(localeSelector(store)).toEqual(store.locales.lngs.en);

    localeSelector(store);

    const newState = Reducer.changeLngSuccess(localesState, {
      lng: 'ua',
      data: {
        ua: 'some data',
      },
    });

    const newStore = {
      locales: {
        ...newState,
      },
    };

    expect(localeSelector(newStore)).toEqual('some data');
    localeSelector(newStore);

    expect(localeSelector.recomputations()).toEqual(2);
  });
});
