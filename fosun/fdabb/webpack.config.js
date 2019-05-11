const path = require('path')
const webpack = require('webpack')
const autoprefixer = require('autoprefixer')
const pxtorem = require('postcss-pxtorem');
const themeConfig = require('./theme');
console.log(themeConfig)
module.exports = {
  entry: [
    'webpack-hot-middleware/client',//当发生热更新时控制台会有提示,生成的bundle.js存储在内存中
    './src/index.js'//入口文件
  ],
  output: {
    filename: 'bundle.js',//打包后的文件名
    chunkFilename: '[name].[chunkhash:5].js',
    path: path.join(__dirname, 'dist'),//打包后的文件存储位置
    publicPath: '/dist/'
  },

  resolve: {
    modules: [path.resolve(__dirname, 'node_modules')],//优化webpack文件搜索范围
    extensions: ['.web.js', '.jsx', '.js', '.json']
  },

  devtool: 'cheap-module-eval-source-map',//开启生成source-map文件功能便于代码调试

  module: {
    rules: [
      {
        test: /\.js$/,
        use: 'babel-loader?cacheDirectory',//开启编译缓存
        exclude: /node_modules/
      },
      {
        test: /\.css$/,
        use: [
          'style-loader',
          'css-loader',//编译css文件的loader并开启css-modules功能
          'postcss-loader'
        ],
      },
      {
        test: /\.less$/,
        use: [
            'style-loader',
            'css-loader',
            {loader: 'less-loader', options: {modifyVars: themeConfig}},
        ],
        include: /node_modules/,
    },
    
      {
        test: /\.less$/,
        exclude: /node_modules/,
        use: [
          'style-loader',
          'css-loader?modules&localIdentName=[local]-[hash:base64:5]',//编译less文件的loader并开启css-modules功能
          'postcss-loader',
          `less-loader`
        ],
      },{
        test: /\.json$/,
        use: "json-loader"
      },
      
      {
        test: /\.(jpe?g|png|gif|mp4|webm|woff|otf|webp)$/,
        use: 'url-loader'
      }
    ],
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),//代码热替换
    new webpack.NoEmitOnErrorsPlugin(),//报错时不退出webpack进程
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify('development')//用于区分开发和生产环境
    }),
    new webpack.LoaderOptionsPlugin({
      options: {
        postcss: () => [autoprefixer,pxtorem({
            rootValue: 100,
            propWhiteList: [],
        })],//css样式及设备适配处理
        url: { limit: 10240 }
      }
    })
  ],
}