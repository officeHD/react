var path = require('path');
var webpack = require('webpack');

module.exports = {
  devtool: 'cheap-module-eval-source-map',
  entry: [
    'webpack-hot-middleware/client',
    './src/index'
  ],
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'bundle.js',
    publicPath: '/static/'
  },
  resolve: {
    modulesDirectories: ['node_modules', path.join(__dirname, '../node_modules')],
    extensions: ['', '.web.js', '.jsx', '.js', '.json'],
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin()
  ],
  module: {
    loaders: [{
      test: /\.js$/,
      loaders: ['react-hot', 'babel'],
      include: path.join(__dirname, './src')
    },{ 
      test: /\.(svg)$/i, 
      loader: 'svg-sprite', 
      include: [require.resolve('antd-mobile').replace(/warn\.js$/, '')]
    },{
      test: /\.json$/,
      loader: "json"
    },{ 
      test: /\.css$/, 
      loader: 'style!css' 
    }]
  }
};
