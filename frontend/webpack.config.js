const webpack = require('webpack')
const extractTextPlugin = require('extract-text-webpack-plugin')

module.exports = {
    entry: './src/index.jsx',
    output: {
        path: __dirname + '/public',
        filename: './app.js'
    },
    devServer: {
        contentBase: './public',
        historyApiFallback: true
    },
    resolve: {
        extensions: [
            ' ', '.js', '.jsx'
        ],
        alias: {
            modules: __dirname + '/node_modules',
            jquery: 'modules/jquery/dist/jquery.min.js',
            bootstrap: 'modules/bootstrap/dist/js/bootstrap.min.js'
        }
    },
    module: {
        rules: [
            {
                test: /.js[x]?$/,
                use: {
                    loader: 'babel-loader',
                    query: {
                        presets: [
                            'es2015', 'react'
                        ],
                        plugins: ['transform-object-rest-spread']
                    }
                },
                exclude: /node_modules/
            }, {
                test: /\.css$/,
                use: extractTextPlugin.extract({fallback: "style-loader", use: "css-loader"})
            }, {
                test: /\.woff|.woff2|.ttf|.eot|.svg|.png|.jpg*.*$/,
                use: 'file-loader'
            }
        ]
    },
    plugins: [
        new webpack.ProvidePlugin({$: 'jquery', jQuery: 'jquery', 'window.jQuery': 'jquery'}),
        new extractTextPlugin('app.css')
    ]
}