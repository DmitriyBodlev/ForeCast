import * as Actions from '../actions';

describe('source/components/common/loader/actins', () => {
  it('should dispatch openLoader action', () => {
    const modalParams = {showDimmer: true};

    const action = Actions.openLoader(modalParams);

    expect(action.type).toEqual(expect.stringContaining('openLoader'));
    expect(action).toHaveProperty('payload', modalParams);
  });

  it('should dispatch closeLoader action', () => {
    const action = Actions.closeLoader();

    expect(action.type).toEqual(expect.stringContaining('closeLoader'));
    expect(action.payload).toBeUndefined();
  });
});
