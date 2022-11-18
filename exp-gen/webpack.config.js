const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
    entry: './config.js',
    output: {
        filename: 'app.js',
        path: path.resolve(__dirname, 'public/javascripts')
    },
    module: {
        rules: [
          {
            test: /\.css$/,
            use: ExtractTextPlugin.extract({
              fallback: "style-loader",
              use: [
                {
                    loader: "css-loader",
                    options:{
                        minimize:true
                    }
                }
              ]
            })
          }
        ]
      },
      plugins: [
        new ExtractTextPlugin("../stylesheets/styles.css"),
      ]
    }