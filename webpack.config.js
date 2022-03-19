const path = require('path');
const ReactRefreshWebpackPlugin = require('@pmmmwh/react-refresh-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const Dotenv = require('dotenv-webpack');

let mode = 'development';
let target = 'web';
const outputSrc = 'dist';
const plugins = [
  new CleanWebpackPlugin(),
  new MiniCssExtractPlugin(),
  new HtmlWebpackPlugin({
    title: 'Webpack React template',
    template: path.resolve(__dirname, 'index.html'),
  }),
];

if (process.env.NODE_ENV === 'production') {
  target = 'browserslist';
  mode = 'production';
} else {
  plugins.push(new ReactRefreshWebpackPlugin());
}

module.exports = {
  mode,
  target,
  devtool: 'source-map',
  entry: path.join(__dirname, 'src', 'index.jsx'),
  devServer: {
    static: `./${outputSrc}`,
    hot: true,
    open: true,
    historyApiFallback: true,
  },
  output: {
    path: path.resolve(__dirname, outputSrc),
    assetModuleFilename: 'images/[hash][ext][query]',
  },

  module: {
    rules: [
      {
        test: /\.(png|jpe?g|gif|svg)$/i,
        type: 'asset',
        parser: {
          dataUrlCondition: {
            maxSize: 30 * 1024,
          },
        },
      },
      {
        test: /\.(s[ac]|c)ss$/i,
        use: [{
          loader: MiniCssExtractPlugin.loader,
          options: { publicPath: '' },
        }, 'css-loader', 'postcss-loader', 'sass-loader'],
      },
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        },
      },
    ],
  },
  plugins: [
    ...plugins,
    new Dotenv(),
  ],
  resolve: {
    extensions: ['.js', '.jsx'],
    alias: {
      Component: path.join(__dirname, 'src', 'components'),
      Slice: path.join(__dirname, 'src', 'store', 'slice'),
      Context: path.join(__dirname, 'src', 'store', 'context'),
      Asset: path.join(__dirname, 'src', 'assets'),
      Theme: path.join(__dirname, 'src', 'theme'),
      Hooks: path.join(__dirname, 'src', 'hooks'),
      Views: path.join(__dirname, 'src', 'view'),
      Src: path.join(__dirname, 'src'),
      Service: path.join(__dirname, 'src', 'services'),
    },
  },
};
