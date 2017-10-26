/// This file contains all app related configuration
// Split the configuration into the different environments
const config = {
  "development": {
    apiURL: 'url',
  },

  "stage": {
    apiURL: 'url',
  },

  "production": {
    apiURL: 'url',
  }
};

module.exports = config[process.env.NODE_ENV];