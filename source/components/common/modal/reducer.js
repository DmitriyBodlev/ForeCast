import { createReducer } from 'redux-act';
import { $all, $set } from 'plow-js';
import * as Actions from './actions.js';

export const initialState = {
  modal: {},
  isOpened: false,
};

export const openModal = (state: Object, payload: Object) => (
  $all(
    $set('isOpened', true),
    $set('modal', payload),
    state,
  )
);

export const closeModal = (state: Object) => ({
  ...state,
  modal: {},
  isOpened: false,
});

// Can't make closeModal function with plow-js because of
// Converting circular structure to JSON error
// it happened because of initialState.modal.component._owner

export default createReducer({
  [Actions.openModal]: openModal,
  [Actions.closeModal]: closeModal,
}, initialState);
