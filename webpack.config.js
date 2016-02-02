const path = require('path');

module.exports = {
  context: __dirname,
  entry: './src/main.js',
  output: {
    path: './build',
    publicPath: '/build',
    filename: 'bundle.js'
  },
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        loader: 'babel-loader',
        query: {
          presets: ['es2015', 'react']
        },
        exclude: /node_modules/
      }
    ]
  },
  resolve: {
    extensions: ['', '.js', '.jsx', '.css'],
    root: [
      path.join(__dirname, 'node_modules'),
      path.join(__dirname, 'src')
    ]
  },
  devtool: 'sourcemap'
};
