const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: './src/index',
    output: {
        path: path.join(__dirname, '/public'),
        filename: 'bundle.js',
        publicPath: '/'
    },
    resolve: {
        extensions: ['.tsx', '.ts', '.js', '.json'],
    },
    devtool: 'inline-source-map',
    module: {
        rules: [
            {
                test: /\.(ts|js)x?$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                }
            },

            {
                test: /\.css$/,
                exclude: /node_modules/,
                use: [ {loader: 'style-loader'}, {loader: 'css-loader'} ],
            },
            {
                test: /\.(png|svg|jpg|gif|ico)$/i,
                exclude: /node_modules/,
                use: ['file-loader?name=[name].[ext]'],
              },
              {
                enforce: 'pre',
                test: /\.js$/,
                loader: 'source-map-loader',
              },
        ]
    },
    devServer: {
        contentBase: path.join(__dirname, 'public'),
        compress: true,
        port: 4000,
        historyApiFallback: true
    },
    plugins: [new HtmlWebpackPlugin({
        template: './public/index.html',
        favicon: './public/favicon.ico'
    })]
};