var webpack = require('webpack');
var path = require('path');
var CommonsChunkPlugin = require("webpack/lib/optimize/CommonsChunkPlugin");
var ExtractTextPlugin = require("extract-text-webpack-plugin");
var OpenBrowserPlugin = require('open-browser-webpack-plugin');
var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    devServer: {
        historyApiFallback: true,
        hot: true,
        inline: true,
        progress: true,
        contentBase: './',
        port: 3000
    },
    entry: {
        // login: path.resolve(__dirname, 'src/page/login.jsx'),
        index: path.resolve(__dirname, 'src/page/index.jsx'),
        chart: path.resolve(__dirname, 'src/page/chart.jsx')
    },
    output: {
        path: path.join(__dirname, 'dist'),
        publicPath: '/dist/',
        filename: 'js/[name].js',
        chunkFilename: 'js/[id].chunk.js'
    },
    module: {
        loaders: [{
                test: /\.html$/,
                loader: "html-loader"
            },
            {
                test: /\.css$/, 
                loader:  ExtractTextPlugin.extract('style-loader', 'css-loader')
            },
            {
                test: /\.less$/,
                loader: ExtractTextPlugin.extract("css-loader!less-loader")
            },
            {
                test: /\.js[x]?$/,
                exclude: /node_modules/,
                loader: 'babel-loader'
            },
            {
                test: /\.(png|jpg|jpeg|gif)$/,
                loader: "url-loader?limit=1024&name=img/[name].[ext]"
            },
            {
                test: /\.(woff|woff2|eot|ttf|svg)(\?.*$|$)/,
                loader: "file-loader"
            }
        ]
    },
    resolve: {
        extensions: ['.js', '.jsx'],
    },
    plugins: [
        new webpack.ProvidePlugin({ $: "jquery" }),
        new ExtractTextPlugin("css/[name].css"),
        new webpack.optimize.CommonsChunkPlugin({
            name: 'vendors',
            chunks: ['login', 'index', 'chart'],
            minChunks: 3
        }),
        // new HtmlWebpackPlugin({
           
        //     filename: 'view/login.html',
        //     template: './src/view/login.html',
        //     inject: 'body',
        //     hash: true,
        //     chunks: ['vendors', 'login']
        // }),
        new HtmlWebpackPlugin({
           
            filename: 'view/index.jsp',
            template: './src/view/index.html',
            inject: 'body',
            hash: true,
            chunks: ['vendors', 'index']
        }),
        new HtmlWebpackPlugin({
           
            filename: 'view/chart.html',
            template: './src/view/chart.html',
            inject: 'body',
            hash: true,
            chunks: ['vendors', 'chart']
        }),
        new OpenBrowserPlugin({ url: 'http://localhost:3000/dist/view/index.html' })

    ]
};