var path = require('path');
 
var config = {
  context: path.join('../src'),
  entry: [
    './index.js',
  ],
  output: {
    path: path.join('../www'),
    filename: 'bundle.js',
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loaders: ['babel'],
      },
    ],
  },
  resolveLoader: {
    root: [
      path.join('../node_modules'),
    ],
  },
  resolve: {
    root: [
      path.join('../node_modules'),
    ],
  },
};
module.exports = config;