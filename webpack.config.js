const path = require('path');
const webpack = require('webpack');

let config ={
    entry: "./src/app.js",
    output: {
        path: path.resolve(__dirname, "./public"),
        filename: "./bundle.js"
    },
    plugins: [
        new webpack.optimize.CommonsChunkPlugin({
            name: "commons",
            // (the commons chunk name)
          
            filename: "commons.js",
            // (the filename of the commons chunk)
          
            // minChunks: 3,
            // (Modules must be shared between 3 entries)
          
            // chunks: ["pageA", "pageB"],
            // (Only use these entries)
          })
    ]
}

module.exports = config;