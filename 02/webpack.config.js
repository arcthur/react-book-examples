var path = require('path');
var webpack = require('webpack');
var sassLoader = 'style!css?modules&importLoaders=1&localIdentName=[path]___[name]__[local]___[hash:base64:5]!sass?sourceMap=true&sourceMapContents=true';

module.exports = {
  devtool: 'cheap-module-eval-source-map',
  entry: [
    'webpack-hot-middleware/client',
    './js/app.js',
  ],
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: 'bundle.js',
    publicPath: '/static/',
  },
  module: {
    loaders: [{
      test: /\.jsx?$/,
      include: [
        path.resolve(__dirname, 'js'),
      ],
      loaders: ['react-hot', 'babel'],
    },
    {
      test: /\.scss$/,
      include: [
        path.resolve(__dirname, 'css'),
      ],
      loader: sassLoader
    }],
  },
  resolve: {
    alias: {
      'react': path.join(__dirname, 'node_modules', 'react'),
    },
    extensions: ['', '.js', '.jsx', '.scss', '.css'],
  },
  plugins: [
    new webpack.NoErrorsPlugin(),
    new webpack.HotModuleReplacementPlugin()
  ],
};
