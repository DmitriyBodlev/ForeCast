import React from 'react';
import { connect } from 'react-redux';
import {
  compose,
  branch,
  renderComponent,
  renderNothing,
} from 'recompose';

const mapStateToProps = (state: Object) => ({
  loggedIn: state.auth.loggedIn,
});

// todo with selector and pure

const authenticationHOC = (WrappedComponent: React.ComponentType<any>) => {
  const enhance = compose(
    branch(
      (props: Object) => props.loggedIn,
      renderComponent(WrappedComponent),
      renderNothing,
  ));

  return connect(mapStateToProps)(enhance(WrappedComponent));
};

export default authenticationHOC;
