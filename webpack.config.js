const path = require('path')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const HTMLWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require( 'mini-css-extract-plugin' );
const CopyWebpackPlugin = require( 'copy-webpack-plugin' );

// let mode = 'development'
// if(process.env.NODE_ENV === 'production'){
//     mode = 'production'
// }
const production = process.env.NODE_ENV === 'production'

console.log(production + ' mode'),
module.exports = {
    mode: production ? 'production' : 'development',
    entry: 'development' ? [
        './src/index.dev.tsx', // in development
    ] : [
        './src/index.prod.tsx', // in production
    ],
    output: {
        path: path.resolve(__dirname, "dist"),
        filename: "[name].[hash].js"
    },
    resolve: {
        extensions: [".ts", ".tsx", ".js", ".jsx", ".scss"]
      },
    devServer: {
        port: 3001,
        historyApiFallback: true,
    },
    devtool: 'source-map',
    plugins: [
        new HTMLWebpackPlugin({template: "./public/index.html"}),
        new CleanWebpackPlugin(), /// Clear dist
        new MiniCssExtractPlugin( {  /// Build css styles
            filename: 'styles/styles.css'
        } ),
        new CopyWebpackPlugin( {  /// Build images
            patterns: [
                {
                    from: path.resolve( __dirname, 'public/images' ),
                    to: path.resolve( __dirname, 'dist/assets' )
                }
            ]
        } ),
    ],
    module: {
        rules: [
            {
                test: /\.(css|scss)$/,
                use: [MiniCssExtractPlugin.loader, "css-loader", "sass-loader"],
            },
            {
                test: /\.(jpg|jpeg|png|svg)$/,
                use: ["file-loader"],
            },
            {
                test: /\.(ts|tsx)$/,
                exclude: /node_modules/,
                use: 'ts-loader'
            },
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: ['babel-loader']
            },
        ],
    }
}