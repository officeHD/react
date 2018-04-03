const webpack = require('webpack');
const path = require('path');
const autoprefixer = require('autoprefixer');
const cssnano = require('cssnano');
const pxtorem = require('postcss-pxtorem');

module.exports = {
  devtool: 'cheap-module-eval-source-map',
  entry: [
    'webpack-hot-middleware/client',
    './src/main'
  ],
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'bundle.js',
    publicPath: '/static/',
    chunkFilename: 'chunk.[name].[chunkhash:5].js',
  },
  resolve: {
    modulesDirectories: ['node_modules', path.join(__dirname, '../node_modules')],
    extensions: ['', '.web.js', '.jsx', '.js', '.json'],
  },
  module: {
    loaders: [{
      test: /\.js$/,
      loaders: ['react-hot', 'babel'],
      include: path.join(__dirname, './src')
    },{ 
      test: /\.(svg)$/i, 
      loader: 'svg-sprite', 
      include: [require.resolve('antd-mobile').replace(/warn\.js$/, ''), path.resolve(__dirname, 'src/components/asset/svg')]
    },{
      test: /\.json$/,
      loader: "json"
    },{ 
      test: /\.css$/, 
      loader: 'style!css!postcss' 
    },{ 
      test: /\.less$/, 
      loader: "style!css?modules&localIdentName=[hash:base64:10]!postcss!less" 
    },{
      test: /\.(png|jpg)$/,
      loader: 'url?limit=40000'
    }
    ]
  },
  postcss: function () {
    return [
        autoprefixer({
            browsers: ['last 3 versions', '> 1%']
        }),
        pxtorem({
            rootValue: 100,
            propWhiteList: [],
        }),
        cssnano
      ]
  },
  plugins: [
    new webpack.DefinePlugin({
        isMock: JSON.stringify(true)
      }),
    new webpack.HotModuleReplacementPlugin()
  ]
};
