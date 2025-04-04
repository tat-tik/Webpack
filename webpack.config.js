
const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
    module: {
    rules: [
      {
        test: /\.(css)$/,
        use: [
          MiniCssExtractPlugin.loader,
          'css-loader',
        ],
      },
          ],
  },
  
  plugins: [
    new MiniCssExtractPlugin(),
    new HtmlWebPackPlugin ({
        template: path.resolve(__dirname, './src/index.html'),
        filename: "./index/html"
       })
  ],
  
};

