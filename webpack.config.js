var path = require('path');

const HtmlWebpackPlugin = require('html-webpack-plugin'); 
const CopyWebpackPlugin = require('copy-webpack-plugin'); 
const ExtractTextPlugin = require('extract-text-webpack-plugin'); 
const webpack = require('webpack'); 

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
                loader: ExtractTextPlugin.extract({
                    fallbackLoader : 'style-loader',
                    loader: ['css-loader',
                            'sass-loader']
                })                
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
        new webpack.optimize.UglifyJsPlugin({
            minimize : true,
            mangle : true
        }),
        new HtmlWebpackPlugin({template: './html/index.html'}),
        new CopyWebpackPlugin([
            { from : './img', to: 'img' }
        ]),
        new ExtractTextPlugin("style.css")
    ]
}