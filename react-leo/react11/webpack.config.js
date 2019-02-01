module.exports = {
    entry: './index.js',
    output: {
        filename: './bundle789.js'
    },
    devServer: {
        port: 7788,
        open: true,
        contentBase: './dist',
        inline: true
    },
    module: {
        rules: [{
            test: /\.css$/,
            use: ['style-loader','css-loader']
        },{
            test: /\.js$/,
            use: ['react-hot-loader','babel-loader'],
            exclude: /node_modules/
        }]
    },
    mode: 'development'
}