var path = require('path');

const HtmlWebpackPlugin = require('html-webpack-plugin'); //installed via npm
const webpack = require('webpack'); //to access built-in plugins

module.exports = {
    entry: './js/app.js',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist'),
    },

    // Das hier bettet das css im js ein. Das ist für die Ladezeiten natürlich
    // suboptimal und soll sich wohl durch das Textextract-Plugin ändern lassen
    module: {
        rules: [
            {   test: /\.scss$/, 
                include: [
                    path.resolve(__dirname, "css")
                ],
                use: [
                    'style-loader',
                    'css-loader',
                    'sass-loader',
                ] 
            },
            {   test: /\.elm$/, 
                include: [
                    path.resolve(__dirname, "src")
                ],
                use: [
                    'elm-hot-loader',
                    'elm-webpack-loader'
                ]                 
            }
        ]
    },    

    plugins: [
        // Das hier geht noch nicht - der mag unser scss nicht
        // new webpack.optimize.UglifyJsPlugin(),
        // Gebe ein Template für die HTML-Datei vor
        new HtmlWebpackPlugin({template: './html/index.html'})
    ]
}