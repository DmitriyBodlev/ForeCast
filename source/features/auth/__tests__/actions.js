import * as Actions from '../actions';

describe('features/auth/actions', () => {
  it('sessionValidationRequest should dispatch the action', () => {
    const expectedAction = {
      type: 'sessionValidationRequest',
      payload: 'data',
    };

    expect(Actions.sessionValidationRequest('data').type).toEqual(
      expect.stringContaining('sessionValidationRequest'));

    expect(Actions.sessionValidationRequest('data').payload).toEqual(expectedAction.payload);
  });

  it('sessionValidationSuccess should dispatch the action', () => {
    const expectedAction = {
      type: 'sessionValidationSuccess',
      payload: 'data',
    };

    expect(Actions.sessionValidationSuccess('data').type).toEqual(
      expect.stringContaining('sessionValidationSuccess'));

    expect(Actions.sessionValidationSuccess('data').payload).toEqual(expectedAction.payload);
  });

  it('sessionValidationFail should dispatch the action', () => {
    const expectedAction = {
      type: 'sessionValidationFail',
      payload: 'data',
    };

    expect(Actions.sessionValidationFail('data').type).toEqual(
      expect.stringContaining('sessionValidationFail'));

    expect(Actions.sessionValidationFail('data').payload).toEqual(expectedAction.payload);
  });

  it('logInRequest should dispatch the action', () => {
    const expectedAction = {
      type: 'logInRequest',
      payload: 'data',
    };

    expect(Actions.logInRequest('data').type).toEqual(expect.stringContaining('logInRequest'));

    expect(Actions.logInRequest('data').payload).toEqual(expectedAction.payload);
  });

  it('logInSuccess should dispatch the action', () => {
    const expectedAction = {
      type: 'logInSuccess',
      payload: 'data',
    };

    expect(Actions.logInSuccess('data').type).toEqual(expect.stringContaining('logInSuccess'));

    expect(Actions.logInSuccess('data').payload).toEqual(expectedAction.payload);
  });

  it('logInFail should dispatch the action', () => {
    const expectedAction = {
      type: 'logInFail',
      payload: 'data',
    };

    expect(Actions.logInFail('data').type).toEqual(expect.stringContaining('logInFail'));

    expect(Actions.logInFail('data').payload).toEqual(expectedAction.payload);
  });

  it('logOutRequest should dispatch the action', () => {
    const expectedAction = {
      type: 'logOutRequest',
      payload: 'data',
    };

    expect(Actions.logOutRequest('data').type).toEqual(expect.stringContaining('logOutRequest'));

    expect(Actions.logOutRequest('data').payload).toEqual(expectedAction.payload);
  });

  it('logOutSuccess should dispatch the action', () => {
    const expectedAction = {
      type: 'logOutSuccess',
      payload: 'data',
    };

    expect(Actions.logOutSuccess('data').type).toEqual(expect.stringContaining('logOutSuccess'));

    expect(Actions.logOutSuccess('data').payload).toEqual(expectedAction.payload);
  });

  it('logOutFail should dispatch the action', () => {
    const expectedAction = {
      type: 'logOutFail',
      payload: 'data',
    };

    expect(Actions.logOutFail('data').type).toEqual(expect.stringContaining('logOutFail'));

    expect(Actions.logOutFail('data').payload).toEqual(expectedAction.payload);
  });

  it('resetPasswordRequest should dispatch the action', () => {
    const expectedAction = {
      type: 'resetPasswordRequest',
      payload: 'data',
    };

    expect(Actions.resetPasswordRequest('data').type).toEqual(
      expect.stringContaining('resetPasswordRequest'));

    expect(Actions.resetPasswordRequest('data').payload).toEqual(expectedAction.payload);
  });

  it('resetPasswordSuccess should dispatch the action', () => {
    const expectedAction = {
      type: 'resetPasswordSuccess',
      payload: 'data',
    };

    expect(Actions.resetPasswordSuccess('data').type).toEqual(
      expect.stringContaining('resetPasswordSuccess'));

    expect(Actions.resetPasswordSuccess('data').payload).toEqual(expectedAction.payload);
  });

  it('resetPasswordFail should dispatch the action', () => {
    const expectedAction = {
      type: 'resetPasswordFail',
      payload: 'data',
    };

    expect(Actions.resetPasswordFail('data').type).toEqual(
      expect.stringContaining('resetPasswordFail'));

    expect(Actions.resetPasswordFail('data').payload).toEqual(expectedAction.payload);
  });

  it('createNewPasswordRequest should dispatch the action', () => {
    const expectedAction = {
      type: 'createNewPasswordRequest',
      payload: 'data',
    };

    expect(Actions.createNewPasswordRequest('data').type).toEqual(
      expect.stringContaining('createNewPasswordRequest'));

    expect(Actions.createNewPasswordRequest('data').payload).toEqual(expectedAction.payload);
  });

  it('createNewPasswordSuccess should dispatch the action', () => {
    const expectedAction = {
      type: 'createNewPasswordSuccess',
      payload: 'data',
    };

    expect(Actions.createNewPasswordSuccess('data').type).toEqual(
      expect.stringContaining('createNewPasswordSuccess'));

    expect(Actions.createNewPasswordSuccess('data').payload).toEqual(expectedAction.payload);
  });

  it('createNewPasswordFail should dispatch the action', () => {
    const expectedAction = {
      type: 'createNewPasswordFail',
      payload: 'data',
    };

    expect(Actions.createNewPasswordFail('data').type).toEqual(
      expect.stringContaining('createNewPasswordFail'));

    expect(Actions.createNewPasswordFail('data').payload).toEqual(expectedAction.payload);
  });
});
