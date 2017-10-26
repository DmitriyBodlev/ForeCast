export type DefaultStateType = {
  initialLoadPending: boolean,
  initialLoadError: null | string,
  changeLngPending: boolean,
  changeLngError: null | string,
  currentLng: string,
  lngs: Object,
};
