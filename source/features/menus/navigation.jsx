import React from 'react';
import { connect } from 'react-redux';
import { compose, pure, withHandlers } from 'recompose';
import { createStructuredSelector } from 'reselect';
import { handleClickNavItemRequest } from './actions';
import { makeSelectLocale } from '../locales/selectors';
import { makeSelectNavigation, makeSelectOpenedSidebar } from './selectors';
import { NavContainer, NavItem } from './ui';
import AuthorizationHOC from '../permissions';

const enhance = compose(
  withHandlers({
    handleClickNavItem: (props: Object) => (action: string) => {
      props.handleClickNavItemRequest(action);
    },
  }),
  AuthorizationHOC('NavComponent'),
  pure,
);

export const NavComponent = (props: Object) => (
  <NavContainer openedSidebar={props.openedSidebar}>
    { props.navigation &&
      props.navigation.map((item: Object) => (
        <NavItem
          key={item.title}
          lightLink={item.lightLink}
          darkLink={item.darkLink}
          action={item.action}
          onClick={() => props.handleClickNavItem(item.action)}
        >
          {item.title}
        </NavItem>
      ))
    }
  </NavContainer>
);

const mapStateToProps = (state: Object) => (createStructuredSelector({
  locale: makeSelectLocale(state),
  navigation: makeSelectNavigation(state),
  openedSidebar: makeSelectOpenedSidebar(state),
}));

export default connect(mapStateToProps, {
  handleClickNavItemRequest,
})(enhance(NavComponent));
