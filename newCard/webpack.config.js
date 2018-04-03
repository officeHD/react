const path = require('path');
const webpack = require('webpack');
const autoprefixer = require('autoprefixer');
const cssnano = require('cssnano');
const pxtorem = require('postcss-pxtorem');
const CompressionPlugin = require('compression-webpack-plugin');
module.exports = {

    // cif
    entry: "./src/index",
    output: {
        path: "/Workspaces2018/mstps/WebRoot/static/js/mobile/newcard/",
        filename: "bundle.js"
    },

    resolve: {
        modulesDirectories: ['node_modules', path.join(__dirname, '../node_modules')],
        extensions: ['', '.web.js', '.jsx', '.js', '.json'],
    },
    externals: {
        'react': 'React',
        'react-dom': 'ReactDOM',
        'react-router': 'ReactRouter'
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
            loader: 'url?limit=50000'
        }, {
            test: /\.(svg)$/i,
            loader: 'svg-sprite',
            include: [require.resolve('antd-mobile').replace(/warn\.js$/, ''), path.resolve(__dirname, 'src/components/asset/svg')]
        }, {
            test: /\.css$/,
            loader: 'style!css!postcss'
        }, {
            test: /\.less$/,
            loader: "style!css?modules&localIdentName=[hash:base64:10]!postcss!less"
        }]
    },
    postcss: function() {
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

            'process.env': {
                'NODE_ENV': JSON.stringify('production')
            }
        }),
        new webpack.optimize.UglifyJsPlugin({
            output: {
                comments: false,
            },
            compress: {
                warnings: false
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