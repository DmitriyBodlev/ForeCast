import React from 'react';
import defaultReducer, * as Reducer from '../reducer';
import * as Actions from './../actions';

describe('source/components/common/modal/reducer', () => {
  const initialState = Reducer.initialState;
  const buttonAction = jest.fn();
  const modalParams = {
    component: <div>some text</div>,
    options: {
      position: 'top-right',
      width: 600,
      height: 400,
      controlButtons: [
        { name: 'Save', type: 'primary', action: buttonAction },
      ],
    },
  };

  it('should handle modal actions', () => {
    const openedModal = defaultReducer(initialState, Actions.openModal(modalParams));
    const closedModal = defaultReducer(initialState, Actions.closeModal(modalParams));

    expect(openedModal.modal).toEqual(modalParams);
    expect(openedModal.isOpened).toBeTruthy();

    expect(closedModal.modal).toEqual({});
    expect(closedModal.isOpened).toBeFalsy();
  });
});
