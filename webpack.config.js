/* eslint-env node */
const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
    devtool: 'source-map',
    entry: {
        vendor: './src/vendor.js',
        app: './src/index.js'
    },
    output: {
        path: path.resolve(__dirname, 'public'),
        filename: 'app/[name].[chunkhash].js'
    },
    resolve: {
        extensions: ['.js'],
        modules: [path.resolve(__dirname, 'src'), 'node_modules']
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                use: 'babel-loader',
                exclude: /node_modules/
            },
            {
                test: /\.css$/,
                use: ExtractTextPlugin.extract({
                    use: 'css-loader'
                })
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: 'src/index.html'
        }),
        new webpack.ProvidePlugin({
            $: 'jquery',
            jQuery: 'jquery',
            'window.jQuery': 'jquery',
        }),
        new webpack.optimize.CommonsChunkPlugin({names: ['vendor', 'manifest']}),
        new ExtractTextPlugin('app/app.[chunkhash].css'),
        new CopyWebpackPlugin([{ from: './CNAME' },])
    ],
    devServer: {
        contentBase: 'public/',
        host: '127.0.0.1',
        port: '5678',
        disableHostCheck: true // not recommended, but allows access from VMs
    }
};
