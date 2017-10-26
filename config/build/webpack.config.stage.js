const webpack = require('webpack');
const webpackMerge = require('webpack-merge');
const commonConfig = require('./webpack.config.common.js');
const WebpackChunkHash = require('webpack-chunk-hash');

const getPlugins = function() {
  return [
    new webpack.LoaderOptionsPlugin({
      minimize: true,
      debug: false
    }),
    new webpack.DefinePlugin({
      'process.env': {
        'NODE_ENV': JSON.stringify('stage')
      }
    }),
    new webpack.optimize.AggressiveMergingPlugin(),
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: false,
        screw_ie8: true,
        conditionals: true,
        unused: true,
        comparisons: true,
        sequences: true,
        dead_code: true,
        evaluate: true,
        join_vars: true,
        if_return: true
      },
      output: {
        comments: false
      },
      beautify: false,
      mangle: {
        screw_ie8: true,
        keep_fnames: true
      },
      comments: false
    }),
    new WebpackChunkHash(),
    new webpack.HashedModuleIdsPlugin()
  ];
};

module.exports = function(env) {
  return webpackMerge(commonConfig(), {
    devtool: false,
    plugins: getPlugins()
  })
};