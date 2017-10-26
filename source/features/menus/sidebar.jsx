import React from 'react';
import { connect } from 'react-redux';
import { compose, pure, withHandlers } from 'recompose';
import { createStructuredSelector } from 'reselect';
import { handleClickNavItemRequest, handleAddingSidebarItemToNav } from './actions';
import { makeSelectLocale } from '../locales/selectors';
import { makeSelectSidebar, makeSelectOpenedSidebar } from './selectors';
import { SidebarContainer, SidebarHeader } from './ui';
import SidebarItemComponent from './components/sidebar-item';
import AuthorizationHOC from '../permissions';

const enhance = compose(
  withHandlers({
    handleClickNavItem: (props: Object) => (action: string) => {
      props.handleClickNavItemRequest(action);
    },
    handleClickPlusIcon: (props: Object) => (item: Object) => {
      props.handleAddingSidebarItemToNav(item);
    },
  }),
  AuthorizationHOC('SidebarComponent'),
  pure,
);

export const SidebarComponent = (props: Object) => (
  <SidebarContainer className={props.openedSidebar ? 'opened' : 'closed'}>
    <SidebarHeader onClick={() => props.handleClickNavItem('toggleSidebar')} />
    { props.sidebar &&
      props.sidebar.map((item: Object) => (
        <SidebarItemComponent
          key={item.title}
          lightLink={item.lightLink}
          darkLink={item.darkLink}
          title={item.title}
          subitems={item.subitems}
          handleClickNavItem={props.handleClickNavItem}
          handleClickPlusIcon={props.handleClickPlusIcon} />
      ))
    }
  </SidebarContainer>
);

const mapStateToProps = (state: Object) => (createStructuredSelector({
  locale: makeSelectLocale(state),
  sidebar: makeSelectSidebar(state),
  openedSidebar: makeSelectOpenedSidebar(state),
}));

export default connect(mapStateToProps, {
  handleClickNavItemRequest,
  handleAddingSidebarItemToNav,
})(enhance(SidebarComponent));
