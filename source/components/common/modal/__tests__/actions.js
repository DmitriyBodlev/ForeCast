import React from 'react';
import * as Actions from '../actions';

describe('source/components/common/modal/actins', () => {
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

  it('should dispatch openModal action', () => {
    const action = Actions.openModal(modalParams);

    expect(action.type).toEqual(expect.stringContaining('openModal'));
    expect(action).toHaveProperty('payload', modalParams);
  });

  it('should dispatch closeModal action', () => {
    const action = Actions.closeModal();

    expect(action.type).toEqual(expect.stringContaining('closeModal'));
    expect(action.payload).toBeUndefined();
  });
});
