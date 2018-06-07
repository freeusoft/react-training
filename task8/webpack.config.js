const path = require('path');
const HtmlWebpackPlugin = require("html-webpack-plugin");
const FlowWebpackPlugin = require('flow-webpack-plugin')

module.exports = {
  context: path.join(__dirname, "src"),
  entry: './index.jsx',
  mode: 'development',
  output: {
    filename: '[name].[chunkhash].js',
    path: path.resolve(__dirname, 'dist'),
    publicPath: '/'
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
        test: /\.js$/,
        exclude: /node_modules/,
        use: ['eslint-loader']
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"]
      },
      {
        test: /\.(png|jpg|gif)$/,
        use: [{
          loader: 'file-loader',
          options: {}
        }]
      }
    ]
  },
  devServer: {
    historyApiFallback: true,
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: "MovieDB",
      hash: false,
      template: "./index.html"
    }),
    new FlowWebpackPlugin()
  ]
};
