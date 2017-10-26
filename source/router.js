/* eslint-disable */
import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { Route } from 'react-router-dom';
import { ConnectedRouter } from 'react-router-redux';
import createHistory from 'history/createBrowserHistory';
import ReduxToastr from 'react-redux-toastr';

import createStore from './store';
import mainSaga from './sagas';

import routes from './routes-config';
import { RootWrapper } from './ui';

import RootContainer from './components/root-container';

export const history = createHistory();

const store = createStore(mainSaga);

export const RouteWithSubRoutes = (route: Object) => (
  <Route
    path={route.path}
    render={(props: Object) => (
      <route.component {...props} routes={route.routes} />
    )} />
);

class AppRouter extends Component {
  render() {
    return (
      <Provider store={store}>
        <ConnectedRouter history={history}>
          <RootWrapper>
            <RootContainer routes={routes} />
            <ReduxToastr
              timeOut={5000}
              newestOnTop={false}
              preventDuplicates
              position='top-left'
              transitionIn='fadeIn'
              transitionOut='fadeOut'
              progressBar />
          </RootWrapper>
        </ConnectedRouter>
      </Provider>
    );
  }
}

export default AppRouter;
/* eslint-enable */
