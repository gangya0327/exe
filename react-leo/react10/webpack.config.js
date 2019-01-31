module.exports = {
    entry: "./index.js",
    output: {
        filename: "./bundle123.js"
    },
    module: {
        rules: [{
            test: /\.css$/,
            use: ["style-loader", "css-loader"]
        }, {
            test: /\.js$/,
            use: ["babel-loader","react-hot-loader"],
            exclude: /node_modules/
        }]
    }
}