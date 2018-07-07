var webpack = require('webpack')
var path = require('path');


module.exports = {
    entry: "./index.js",
    output: {
        filename: "./bundle.js",
        path: __dirname + "/dist",
        publicPath: "/dist"
    },
    devServer: {
        host: '127.0.0.1',
        hot: true,
        inline: true,
        historyApiFallback: true,
    },
    resolve: {
        // Add '.ts' and '.tsx' as resolvable extensions.
        extensions: [".jsx", ".js"]
    },
    module: {
        loaders: [{
                test: /\.jsx|.js$/,
                exclude: /node_modules/,
                loader: 'babel-loader',
                query: {
                    presets: ['env'],
                }
            }
        ]
    },
}