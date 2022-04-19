var path = require('path');
var SRC_DIR = path.join(__dirname, '/client/src');
var DIST_DIR = path.join(__dirname, '/client/html');

module.exports = {
  entry: `${SRC_DIR}/index.jsx`,
  devtool: 'eval-cheap-source-map',
  output: {
    filename: 'bundle.js',
    path: DIST_DIR
  },
  module : {
    rules : [
      {
        test : /\.jsx?/,
        include : SRC_DIR,
        loader : 'babel-loader',   
        options: {
          presets: ['@babel/react', '@babel/preset-env'],
       }
      }
    ]
  }
};