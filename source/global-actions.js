import { createAction } from 'redux-act';

export const initialDataLoadRequest = createAction('initialDataLoadRequest');
export const initialDataLoadSuccess = createAction('initialDataLoadSuccess');
export const initialDataLoadFail = createAction('initialDataLoadFail');

