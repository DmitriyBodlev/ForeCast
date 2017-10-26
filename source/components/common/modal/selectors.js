/**
 * The modal state selectors
 */

import { createSelector } from 'reselect';

const selectModalStore = (state: Object) => state.modal;

const makeSelectModal = () => createSelector(
  selectModalStore,
  (modal: Object) => modal,
);

export {
  selectModalStore,
  makeSelectModal,
};
