const path = require('path');
const webpack = require('webpack');
const VERSION = require('./package.json').version;

const getModulePath = function(name) {
  return path.join(__dirname, 'node_modules', name);
};

module.exports = [{
  entry: {
    'home': './src/js/home/app.js',
    'device': './src/js/device/app.js',
  },
  output: {
    path: path.join(__dirname, 'build', VERSION),
    filename: '[name].js',
    publicPath: '/static/'
  },
  resolve: {
    extensions: ['', '.js', '.jsx', '.scss', '.css'],
  },
  devtool: 'source-map',
  module: {
    loaders: [{
      test: /\.jsx?$/,
      include: [
        path.resolve(__dirname, 'src'),
      ],
      loaders: ['babel'],
    }, {
      test: /\.scss$/,
      loaders: ['style', 'css?sourceMap', 'sass?sourceMap'],
    }]
  },

  plugins: [
    new webpack.NoErrorsPlugin(),
  ],
}];
