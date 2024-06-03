const path = require('path');
const webpack = require('webpack');
const htmlWebpackPlugin = require('html-webpack-plugin');

module.exports={
    mode: 'development',
    entry: './routes/index.js',
    output: {
        path:path.join(__dirname, 'public'),
        filename:'bundle.js'
    },
    module:{
        rules:[{
            test: /\.css$/,
            use:['style-loader', 'css-loader']
        }]
    },
    plugins:[
        new htmlWebpackPlugin({
            template:'./views/index.html'
        })
    ]
};