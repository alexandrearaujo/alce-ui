var path = require('path');
var webpack = require('webpack');

module.exports = {
    mode: 'development',
    devtool: 'source-map',
    entry: {app: './src/index.js'},
    plugins: [
        new webpack.LoaderOptionsPlugin({
            debug: true
        })
    ],
    output: {
        path: path.resolve('build'),
        filename: 'index.js',

        library: 'components',
        libraryTarget: 'umd'
    },
    externals: [
        'react',
        'react-dom'
    ],
    resolve: {
        extensions: ['.js', '.jsx', '.ts', '.tsx', '.css']
    },
    module: {
        rules: [
            {
                test: /\.(ts|tsx|js|jsx)$/,
                include: path.resolve(__dirname, 'src'),
                exclude: /(node_modules|bower_components|build)/,
                use: {
                    loader: 'babel-loader'
                }
            },
            {
                test: /\.css$/,
                loader: "style-loader!css-loader"
            }
        ]
    }
}