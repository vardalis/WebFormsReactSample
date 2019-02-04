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
        publicPath: "React/dist/",
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
        openPage: 'React/public/index.html',
        headers: {
            'Access-Control-Allow-Origin': '*',
            'Access-Control-Allow-Credentials': 'true',
            'Access-Control-Allow-Methods': 'ACL, CANCELUPLOAD, CHECKIN, CHECKOUT, COPY, DELETE, GET, HEAD, LOCK, MKCALENDAR, MKCOL, MOVE, OPTIONS, POST, PROPFIND, PROPPATCH, PUT, REPORT, SEARCH, UNCHECKOUT, UNLOCK, UPDATE, VERSION-CONTROL',
            'Access-Control-Allow-Headers': 'Overwrite, Destination, Content-Type, Depth, User-Agent, Translate, Range, Content-Range, Timeout, X-File-Size, X-Requested-With, If-Modified-Since, X-File-Name, Cache-Control, Location, Lock-Token, If',
            'Access-Control-Expose-Headers': 'DAV, content-length, Allow'
            }
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin()
    ]
};