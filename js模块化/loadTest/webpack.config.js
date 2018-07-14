const webpack = require('webpack')

module.exports = {
    entry: './main.js',
    output: {
        filename: "./bundle.js"
    },
    resolve: {
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
            },
        ]
    },
}