import { createSelector } from 'reselect';


const selectChannelsStore = (state: Object) => state.channels;

const makeSelectChannels = () => createSelector(
  selectChannelsStore,
  (channels: Object) => channels.data,
);

export {
  selectChannelsStore,
  makeSelectChannels,
};
