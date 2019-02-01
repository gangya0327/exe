module.exports = {
    entry: './index.js',
    output: {
        filename: 'bundle789.js'
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