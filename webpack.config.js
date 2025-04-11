
const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
    mode: 'development',
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
    devServer: {
        static: {
        directory: path.join(__dirname, './src/js'),
              },
        compress: true,
        port: 9000,
            },
  
  plugins: [
    new MiniCssExtractPlugin(),
    new HtmlWebpackPlugin ({
        template: path.resolve(__dirname, './src/index.html'),
        filename: "./index/html"
       })
  ],
  
};


