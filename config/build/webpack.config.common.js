// This is base webpack config that extends by webpack.[env].config.js files.
// For extending we use webpack-merge module. Documentation see here: https://github.com/survivejs/webpack-merge

const webpack = require('webpack');
const path = require('path');
const autoprefixer = require('autoprefixer');
const CaseSensitivePathsPlugin = require('case-sensitive-paths-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const HtmlWebpackHarddiskPlugin = require('html-webpack-harddisk-plugin');
const ChunkManifestPlugin = require('chunk-manifest-webpack2-plugin');
const InlineManifestWebpackPlugin = require('inline-manifest-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');


const getPlugins = function() {
  return [
    // By default webpack builds files even if there is some errors.
    // This plugin prevents webpack from building if there is any error occur;
    new webpack.NoEmitOnErrorsPlugin(),
    new webpack.LoaderOptionsPlugin({
      options: {
        postcss: [
          autoprefixer()
        ]
      }
    }),
    new CaseSensitivePathsPlugin(),

    // Extract all imported node_modules into separate chunk
    new webpack.optimize.CommonsChunkPlugin({
      name: "vendor",
      minChunks: function (module) {
        return module.context && module.context.indexOf("node_modules") !== -1;
      }
    }),

    // Extract all webpack related code into separate chunk
    new webpack.optimize.CommonsChunkPlugin({
      name: "manifest",
      minChunks: Infinity
    }),

    // Since all our chunks needs to be included into index.html automatically,
    // lets save them to special manifest.json file to use that later with HtmlWebpackPlugin
    new ChunkManifestPlugin({
      filename: "./manifest.json",
      manifestVariable: "webpackManifest"
    }),

    // Inline all webpack related code into index.html
    new InlineManifestWebpackPlugin({
      name: 'webpackManifest'
    }),

    // Automatically inject all bundles into index.html
    new HtmlWebpackPlugin({
      alwaysWriteToDisk: true,
      inject: true,
      filename: '../index.html',
      template: './app.html',
      minify: false
    }),

    // Copy all localization files to /public/assets
    // to make them accessible to server
    new CopyWebpackPlugin([{from: './locales/**/*', to: '../assets/'}]),

    // This plugin is workaround to make HtmlWebpackPlugin work with webpack-dev-server
    // See this issue https://github.com/webpack/webpack-dev-server/issues/362
    new HtmlWebpackHarddiskPlugin()
  ]
};


const getRules = function() {
  return [
    {
      test: /\.jsx?$/,
      exclude: [/node_modules/, '/config/*.*'],
      loader: 'babel-loader'
    },
    {
      test: /\.css$/,
      exclude: /node_modules/,
      loader: [
        'style-loader',
        'css-loader',
        'postcss-loader',
        'resolve-url-loader'
      ]
    },
    {
      test: /\.(ico|jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2)(\?.*)?$/,
      loader: 'file-loader',
      exclude: /node_modules/,
      options: {
        limit: 10000,
        name: '[name].[hash:base64:5].[ext]'
      }
    }
  ]
};

module.exports = function (env) {
  return {
    context: path.join(__dirname, '../../'),
    entry: [
      './app.js'
    ],
    output: {
      path: path.resolve('./public/assets'),
      filename: "[name].[chunkhash].js",
      chunkFilename: "[chunkhash].js",
      publicPath: '/assets/'
    },
    module: {
      rules: getRules()
    },
    resolve: {
      extensions: ['.js', '.json', '.jsx', '.css', '.styl'],
    },
    plugins: getPlugins(),
    node: {
      fs: 'empty',
      net: 'empty',
      tls: 'empty'
    }
  }
};