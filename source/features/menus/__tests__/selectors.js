// Standalone runtime for Regenerator-compiled generator and async functions
import 'regenerator-runtime/runtime';

import {
  selectMenusStore,
  makeSelectNavigation,
  makeSelectSidebar,
  makeSelectOpenedSidebar,
} from '../selectors';

import * as Reducer from '../reducer';

const menusState = Reducer.initialState;

const store = {
  menus: {
    ...menusState,
  },
};

const mockItem = {
  some: 'some',
};

const mockData = {
  navigationMenuItems: [
    mockItem,
  ],
  sideMenuItems: [
    mockItem,
  ],
};

describe('features/menus/selectors', () => {
  it('selectMenusStore should select menus state', () => {
    expect(selectMenusStore(store)).toEqual(menusState);
  });

  it('makeSelectNavigation should select navigation', () => {
    const navigationSelector = makeSelectNavigation();

    expect(navigationSelector(store)).toBeNull();
    navigationSelector(store);

    const newState = Reducer.receivedMenusSuccess(menusState, mockData);
    const newStore = {
      menus: {
        ...newState,
      },
    };

    expect(navigationSelector(newStore)).toEqual(mockData.navigationMenuItems);
    navigationSelector(newStore);

    expect(navigationSelector.recomputations()).toEqual(2);
  });

  it('makeSelectSidebar should select sidebar', () => {
    const sidebarSelector = makeSelectSidebar();

    expect(sidebarSelector(store)).toBeNull();
    sidebarSelector(store);

    const newState = Reducer.receivedMenusSuccess(menusState, mockData);
    const newStore = {
      menus: {
        ...newState,
      },
    };

    expect(sidebarSelector(newStore)).toEqual(mockData.sideMenuItems);
    sidebarSelector(newStore);

    expect(sidebarSelector.recomputations()).toEqual(2);
  });

  it('makeSelectOpenedSidebar should select openinig sidebar state', () => {
    const openingSidebarSelector = makeSelectOpenedSidebar();

    expect(openingSidebarSelector(store)).toBeFalsy();

    const newState = Reducer.toggleSidebar(menusState);
    const newStore = {
      menus: {
        ...newState,
      },
    };

    expect(openingSidebarSelector(newStore)).toBeTruthy();

    expect(openingSidebarSelector.recomputations()).toEqual(2);
  });
});
