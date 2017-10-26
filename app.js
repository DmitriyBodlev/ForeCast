// Standalone runtime for Regenerator-compiled generator and async functions
import 'regenerator-runtime/runtime';

// Important import related to HMR. It have to be at the
// very top of the application source code.
import 'react-hot-loader/patch';

// Special AppContainer to make HMR work
import { AppContainer } from 'react-hot-loader';

// React and ReactDOM instances
import React from 'react';
import ReactDOM from 'react-dom';

import App from './source/router';

const isDevelopment = (process.env.NODE_ENV === 'development');

// From this place our app start loading;
// In development mode HMR activated using react-hot-loader
const render = (Component: Object) => {
  ReactDOM.render(
    <div id='app-container'>
      {isDevelopment ? (
        <AppContainer>
          <Component />
        </AppContainer>
      ) : (
        <Component />
      )}
    </div>,
    document.getElementById('sorecast-app'));
};

render(App);
