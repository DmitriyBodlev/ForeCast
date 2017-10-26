import * as Actions from '../actions';

describe('features/locales/actions', () => {
  it('initialLoadLngRequest should dispatch the action', () => {
    const expectedAction = {
      type: 'initialLoadLngRequest',
      payload: 'data',
    };

    expect(Actions.initialLoadLngRequest('data').type).toEqual(
      expect.stringContaining('initialLoadLngRequest'));

    expect(Actions.initialLoadLngRequest('data').payload).toEqual(expectedAction.payload);
  });

  it('initialLoadLngSuccess should dispatch the action', () => {
    const expectedAction = {
      type: 'initialLoadLngSuccess',
      payload: {
        lng: 'lng',
        data: {},
      },
    };

    expect(Actions.initialLoadLngSuccess('data').type).toEqual(
      expect.stringContaining('initialLoadLngSuccess'));

    expect(Actions.initialLoadLngSuccess('lng', {}).payload).toEqual(expectedAction.payload);
  });

  it('initialLoadLngFail should dispatch the action', () => {
    const expectedAction = {
      type: 'initialLoadLngFail',
      payload: 'data',
    };

    expect(Actions.initialLoadLngFail('data').type).toEqual(
      expect.stringContaining('initialLoadLngFail'));

    expect(Actions.initialLoadLngFail('data').payload).toEqual(expectedAction.payload);
  });

  it('changeLngRequest should dispatch the action', () => {
    const expectedAction = {
      type: 'changeLngRequest',
      payload: 'data',
    };

    expect(Actions.changeLngRequest('data').type).toEqual(
      expect.stringContaining('changeLngRequest'));

    expect(Actions.changeLngRequest('data').payload).toEqual(expectedAction.payload);
  });

  it('changeLngSuccess should dispatch the action', () => {
    const expectedAction = {
      type: 'changeLngSuccess',
      payload: {
        lng: 'lng',
        data: {},
      },
    };

    expect(Actions.changeLngSuccess().type).toEqual(
      expect.stringContaining('changeLngSuccess'));

    expect(Actions.changeLngSuccess('lng', {}).payload).toEqual(expectedAction.payload);
  });

  it('changeLngFail should dispatch the action', () => {
    const expectedAction = {
      type: 'changeLngFail',
      payload: 'data',
    };

    expect(Actions.changeLngFail('data').type).toEqual(
      expect.stringContaining('changeLngFail'));

    expect(Actions.changeLngFail('data').payload).toEqual(expectedAction.payload);
  });
});
