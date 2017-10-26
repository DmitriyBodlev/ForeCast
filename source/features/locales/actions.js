import { createAction } from 'redux-act';

export const initialLoadLngRequest = createAction('initialLoadLngRequest');
export const initialLoadLngSuccess = createAction('initialLoadLngSuccess',
  (lng: string, data: Object) => ({ lng, data }));
export const initialLoadLngFail = createAction('initialLoadLngFail');

export const changeLngRequest = createAction('changeLngRequest');
export const changeLngSuccess = createAction('changeLngSuccess',
  (lng: string, data: Object) => ({ lng, data }));
export const changeLngFail = createAction('changeLngFail');
