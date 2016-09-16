var webpack = require('webpack');
 
module.exports = {
  entry: './main.js',
  output: { path: './build/', filename: 'bundle.js' },
  watch: true,
plugins: [
      new webpack.optimize.UglifyJsPlugin({minimize: true}),
       new webpack.DefinePlugin({
    'process.env': {
      'NODE_ENV': JSON.stringify('production')
    }
  })
    ],
    devtool: "cheap-module-source-map",
  module: {
    loaders: [
      {
        test: /.jsx?$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
        query: {
          presets: ['es2015', 'react']
        }
      }
    ]
  }
};