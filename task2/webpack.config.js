const path = require('path');
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  context: path.join(__dirname, "src"),
  entry: './index.jsx',
  mode: "development",
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist')
  },
  resolve: {
    extensions: [".js", ".jsx"]
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        loader: "babel-loader",
        exclude: /node_modules/
      },
      {
        test: /\.css$/,
        use: ["style-loader","css-loader"]
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: "task2",
      hash: true,
      template: "./index.html"
    })
  ]

};