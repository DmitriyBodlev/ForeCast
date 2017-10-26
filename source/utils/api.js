// axios config for all ajax requests
/* global GoogleAuth, gapi */
import axios from 'axios';
import { makeRequestHeaders } from './global-helpers';

const qs = require('qs');

const instance = axios.create({
  baseURL: 'http://dev.cubeua.com', // TODO, with environments
});

const logApiSuccess = (response: Object) => {
  console.debug('========== API SUCCESS ==========\n');
  console.log(response.request.responseURL);
  console.log(response);
  console.debug('=================================');
  return response;
};

const logApiError = (error: string) => {
  console.error('========== API ERROR ==========\n');
  console.error(error);
  console.error('=================================');
  return error;
};

// The axios interceptor for all responses
instance.interceptors.response.use(
  logApiSuccess,
  logApiError,
);

export function sendRequest(method: string, url: string, options: Object = {}, isFormData: boolean) { // eslint-disable-line
  const config = {
    method,
    url,
    data: options.data || {},
    params: options.params || {},
    headers: makeRequestHeaders(options.headers || {}),
  };

  if (options.auth) {
    config.auth = options.auth;
  }

  if (isFormData && method === 'post') {
    config.data = qs.stringify(options.data);
  }

  return instance(config);
}


export function initClient(callback) {
  gapi.client.init({
    'clientId': '178621390101-cvo78i0ci6ifqpkhki5t14mvgflbg36u',
    'discoveryDocs': ['https://www.googleapis.com/discovery/v1/apis/youtube/v3/rest'],
    'scope': 'https://www.googleapis.com/auth/youtube.force-ssl https://www.googleapis.com/auth/youtubepartner'
  }).then(function () {
    GoogleAuth = gapi.auth2.getAuthInstance();
    callback()
  });
}

export function handleClientLoad(callback) {
  gapi.load('client:auth2', () => initClient(callback));
}


export function newScript() {
  return new Promise(function(resolve, reject){
    var script = document.createElement('script');
    script.src = 'https://apis.google.com/js/api.js';
    script.addEventListener('load', function () {
      function some() {
        resolve();
      }
      handleClientLoad(some);
    });
    script.addEventListener('error', function (e) {
      reject(e);
    });
    document.body.appendChild(script);
  });
}

export function setSigninStatus() {
  if (!GoogleAuth) {
    console.log('no GoogleAuth');
    return;
  }
  const user = GoogleAuth.currentUser.get();
  const isAuthorized = user.hasGrantedScopes(
    'https://www.googleapis.com/auth/youtube.force-ssl https://www.googleapis.com/auth/youtubepartner');
  // Toggle button text and displayed statement based on current auth status.
  if (isAuthorized) {
    console.log('isAuthorized');
  } else {
    GoogleAuth.signIn();
  }
}

function createResource(properties) {
  var resource = {};
  var normalizedProps = properties;
  for (var p in properties) {
    var value = properties[p];
    if (p && p.substr(-2, 2) == '[]') {
      var adjustedName = p.replace('[]', '');
      if (value) {
        normalizedProps[adjustedName] = value.split(',');
      }
      delete normalizedProps[p];
    }
  }
  for (var p in normalizedProps) {
    // Leave properties that don't have values out of inserted resource.
    if (normalizedProps.hasOwnProperty(p) && normalizedProps[p]) {
      var propArray = p.split('.');
      var ref = resource;
      for (var pa = 0; pa < propArray.length; pa++) {
        var key = propArray[pa];
        if (pa == propArray.length - 1) {
          ref[key] = normalizedProps[p];
        } else {
          ref = ref[key] = ref[key] || {};
        }
      }
    };
  }
  return resource;
}

function removeEmptyParams(params) {
  for (var p in params) {
    if (!params[p] || params[p] == 'undefined') {
      delete params[p];
    }
  }
  return params;
}

function executeRequest(request, callback = null) {
  
}

export function buildApiRequest(requestMethod, path, params, properties, callback = null) {
  params = removeEmptyParams(params);
  var request;
  if (properties) {
    var resource = createResource(properties);
    return gapi.client.request({
      'body': resource,
      'method': requestMethod,
      'path': path,
      'params': params
    });
  } else {
    return gapi.client.request({
      'method': requestMethod,
      'path': path,
      'params': params
    });
  }
}
