const path = require('path');
const dev = process.env.NODE_ENV === "development";

let config = {
    mode: (dev)? 'development': 'production',

    entry: "./src/app.js",

    output: {
        path: path.resolve(__dirname, "./public"),
        filename: "./bundle.js"
    },

    plugins: [
    ],

    optimization: {
        splitChunks: {
            cacheGroups: {
                commons: {
                    test: /[\\/]node_modules[\\/]/,
                    name: "vendors",
                    chunks: "all"
                }
            }
        }
    },

    module: {
        rules: [
          {
            test: /\.css$/,
            use: [ 'style-loader', 'css-loader' ]
          }
        ]
      }
}

module.exports = config;