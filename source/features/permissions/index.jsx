import React from 'react';
import { connect } from 'react-redux';
import {
  compose,
  branch,
  renderComponent,
  renderNothing,
} from 'recompose';
import { selectPermissionByItem } from './selectors';

const AuthorizationHOC = (componentName: string) => (
  (WrappedComponent: React.ComponentType) => {
    const enhance = compose(
      branch(
        (props: Object) => props.permission,
        renderComponent(WrappedComponent),
        renderNothing,
      ));

    const mapStateToProps = (state: Object) => ({
      permission: selectPermissionByItem(state, componentName),
    });

    return connect(mapStateToProps)(enhance(WrappedComponent));
  }
);

export default AuthorizationHOC;
