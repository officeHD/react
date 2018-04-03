var webpack = require('webpack');
var path = require('path');
var ExtractTextPlugin = require('extract-text-webpack-plugin'); //抽取CSS文件插件
var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: {
        login: path.resolve(__dirname, 'src/js/login.jsx'),
        index: path.resolve(__dirname, 'src/js/index.jsx'),
        chart: path.resolve(__dirname, 'src/js/chart.jsx')
    },
    output: {
        path: path.join(__dirname, 'dist'),
        publicPath:'../',  //模板、样式、脚本、图片等资源对应的server上的路径
        filename: 'js/[name].js',
        chunkFilename: 'js/[id].chunk.js'
    },
    module: {
        loaders: [
            { test: /\.html$/, loader: "html-loader" },
            { test: /\.css$/, loader: ExtractTextPlugin.extract('style-loader', 'css-loader') },
            { test: /\.less$/, loader: ExtractTextPlugin.extract("css-loader!less-loader") },
            { test: /\.js[x]?$/, exclude: /node_modules/, loader: 'babel-loader' },
            { test: /\.(png|jpg|jpeg|gif)$/, loader:"url-loader?limit=1024&name=img/[name].[ext]"  },
            { test: /\.(woff|woff2|eot|ttf|svg)(\?.*$|$)/, loader: "file-loader" }
        ]
    },
    resolve: {
        extensions: [ '.js', '.jsx'],
    },
    plugins: [
        new webpack.ProvidePlugin({ $:"jquery" }),
        new ExtractTextPlugin("css/[name].css"),
        new webpack.optimize.CommonsChunkPlugin({
            name: 'vendors', 
            chunks: ['login','index','chart'], 
            minChunks: 3 
        }),
        new HtmlWebpackPlugin({ 
            filename: 'view/login.html', 
            template: './src/view/tpl.html', 
            inject: 'body', 
            hash: true, 
            chunks: ['vendors', 'login']            
        }),
        new HtmlWebpackPlugin({ 
            filename: 'view/index.html', 
            template: './src/view/tpl.html', 
            inject: 'body', 
            hash: true, 
            chunks: ['vendors', 'index']            
        }),
        new HtmlWebpackPlugin({ 
            filename: 'view/chart.html', 
            template: './src/view/tpl.html', 
            inject: 'body', 
            hash: true, 
            chunks: ['vendors', 'chart']            
        }),
        new webpack.optimize.UglifyJsPlugin({
            compress: {
                warnings: false
            }
        })
    ]
};
