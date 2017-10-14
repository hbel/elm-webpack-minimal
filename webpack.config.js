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

    module: {
        rules: [
            {   test: /\.scss$/, 
                include: [
                    path.resolve(__dirname, "css")
                ],
                use: ExtractTextPlugin.extract({
                    fallback: 'style-loader',
                    use: ['css-loader',
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
