import React from 'react';
import { connect } from 'react-redux';
import {
  compose,
  pure,
  branch,
  renderComponent,
} from 'recompose';
import { createStructuredSelector } from 'reselect';
import authenticationHOC from '../HOCs/authentication-hoc';
import { makeSelectInitialDataLoading } from '../global-selectors';
import { makeSelectModal } from './common/modal/selectors';
import { makeSelectLoader } from './common/loader/selectors';
import { makeSelectLocale } from '../features/locales/selectors';
import { LayoutsWrapper } from '../ui';
import NavComponent from '../features/menus/navigation';
import SidebarComponent from '../features/menus/sidebar';
import Header from './header';
import Channels from '../features/channels';
import CommonModal from './common/modal';
import LoaderComponent from './common/loader';

const enhance = compose(
  authenticationHOC,
  branch(
    (props: Object) => props.initialDataLoading,
    renderComponent(LoaderComponent),
  pure,
));

export const MainLayouts = (props: Object) => (
  <LayoutsWrapper>
    <Header locale={props.locale} />
    <SidebarComponent />
    <Channels />
    <NavComponent />
    { props.modal.isOpened && <CommonModal params={props.modal} /> }
    { props.loader.isOpened && <LoaderComponent /> }
  </LayoutsWrapper>
);

const mapStateToProps = (state: Object) => (createStructuredSelector({
  initialDataLoading: makeSelectInitialDataLoading(state),
  locale: makeSelectLocale(state),
  modal: makeSelectModal(state),
  loader: makeSelectLoader(state),
}));

export default connect(mapStateToProps)(enhance(MainLayouts));
