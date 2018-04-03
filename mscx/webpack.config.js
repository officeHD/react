var webpack = require('webpack');
var path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin');
const CompressionPlugin = require('compression-webpack-plugin');
module.exports = {

    entry: "./src/index",
    output: {
        path: "/Workspaces2018/mstps/WebRoot/static/js/mobile/mscx/",
        filename: "bundle.js"
    },

    resolve: {
        modulesDirectories: ['node_modules', path.join(__dirname, '../node_modules')],
        extensions: ['', '.web.js', '.jsx', '.js', '.json'],
    },
    externals: {
        'react': 'React',
        'react-dom': 'ReactDOM'
    },
    module: {
        loaders: [{
            test: /\.json$/,
            loader: "json"
        }, {
            test: /\.js$/,
            exclude: /node_modules/,
            loader: 'babel'
        }, {
            test: /\.(png|jpg)$/,
            loader: 'url?limit=40000'
        }, {
            test: /\.(svg)$/i,
            loader: 'svg-sprite',
            include: [require.resolve('antd-mobile').replace(/warn\.js$/, '')]
        }, {
            test: /\.css$/,
            loader: 'style!css'
        }]
    },

    plugins: [
        new webpack.optimize.UglifyJsPlugin({
            output: {
                comments: false,
            },
            compress: {
                warnings: false
            }

        }),
        new webpack.DefinePlugin({

            'process.env': {
                'NODE_ENV': JSON.stringify('production')
            }
        }),
        new CompressionPlugin({ //开启gizp压缩， 
            asset: "[path].gz[query]",
            algorithm: "gzip",
            test: /\.js$|\.css$|\.html$/,
            threshold: 10240,
            minRatio: 0.8
        }),
        new webpack.BannerPlugin("民盛保险 版权所有")
    ],
};