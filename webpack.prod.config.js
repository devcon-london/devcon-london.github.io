var config = require('./webpack.config.js');
var webpack = require('webpack');

config.entry = [
  './client/src/app',
  './client/src/index.html'
];

config.plugins.push(
  new webpack.DefinePlugin({
    "process.env": {
      "NODE_ENV": JSON.stringify("production")
    }
  })
);

module.exports = config;
