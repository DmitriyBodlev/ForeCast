/* eslint-disable */
import { createStore as createReduxStore, applyMiddleware, compose } from 'redux';
import createSagaMiddleware from 'redux-saga';
import logger from 'redux-logger';
import reducers from './reducer';
import { handleClientLoad } from './utils/api';

let initialState = {};
let devToolsExtensionComposable = null;

if (typeof window !== 'undefined' && process && process.env && process.env.NODE_ENV !== 'production') { // eslint-disable-line
  // zalmoxisus/redux-devtools-extension
  // https://github.com/zalmoxisus/redux-devtools-extension#implementation
  if (window.devToolsExtension) {
    devToolsExtensionComposable = window.devToolsExtension();
  }
}

function createStore(mainSaga, ...additionalMiddlewares) {
  const sagaMiddleware = createSagaMiddleware();
  if (typeof window !== 'undefined' && process && process.env && process.env.NODE_ENV !== 'production') {
    additionalMiddlewares.push(logger)
  }
  const middleWares = [sagaMiddleware, ...additionalMiddlewares];
  const composables = [applyMiddleware(...middleWares)];
  if (devToolsExtensionComposable) composables.push(devToolsExtensionComposable);
  const store = createReduxStore(reducers, initialState, compose(...composables));

  // Hot reload reducers (requires Webpack or Browserify HMR to be enabled)
  if (module.hot) {
    module.hot.accept('./reducer', () => {
      store.replaceReducer(reducers);
    }
  );
}
  const sagas = [
    mainSaga,
  ];
  var script = document.createElement('script');
  script.src = 'https://apis.google.com/js/api.js';
  script.addEventListener('load', function () {
    function some() {
      sagas.forEach((saga) => sagaMiddleware.run(saga));;
    }
    handleClientLoad(some);
  });
  script.addEventListener('error', function (e) {
    console.log('errro')
  });
  document.body.appendChild(script);
  return store;
}

export default createStore;
/* eslint-enable */
