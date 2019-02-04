const path = require("path");
const webpack = require("webpack");

module.exports = {
    entry: {
        parts: "./src/parts/index.js",
        products: "./src/products/index.js"
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /(node_modules|bower_components)/,
                loader: "babel-loader"
            },
            {
                test: /\.css$/,
                use: ["style-loader", "css-loader"]
            },
            {
                test: /\.(jpe?g|png|gif)$/,
                use: {
                    loader: "file-loader",
                    options: {
                        name: "images/[name].[hash].[ext]"
                    }
                }
            }
        ]
    },
    resolve: {
        extensions: ["*", ".js", ".jsx"],
        modules: [path.resolve(__dirname, 'src'), 'node_modules']
    },
    output: {
        path: path.resolve(__dirname, "dist/"),
        publicPath: "/React/dist/",
        filename: "[name].bundle.js"
    },
    //optimization: {
    //    splitChunks: {
    //        chunks: 'all'
    //        }
    //},
    devServer: {
        contentBase: path.join(__dirname, "../"),
        port: 3000,
        publicPath: "http://localhost:3000/React/dist",
        hotOnly: true,
        open: 'Chrome',
        openPage: 'React/public/index.html'
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin()
    ]
};