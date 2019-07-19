const style = require('style-loader');
const css = require('css-loader');
const path = require('path');
const CompressionPlugin = require('compression-webpack-plugin');
const BrotliPlugin = require('brotli-webpack-plugin');

module.exports = {
  entry: './client/src/index.jsx',
  mode: 'development',
  watch: true,
  output: {
    path: path.resolve(__dirname, './client/dist'),
    filename: 'bundle.js',
  },

  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: ['babel-loader'],
      },
      {
        test: /\.css$/i,
        use: [
          'style-loader',
          {
            loader: 'css-loader',
            options: {
              modules: {
                mode: 'local',
                localIdentName: '[name]__[local]--[hash:base64:5]',
              },
              import: true,
              importLoaders: true,
            },
          },
        ],
      },
    ],
  },

  plugins: [
    new CompressionPlugin({
      filename: '[path].gz[query]',
      algorithm: 'gzip',
      test: /\.(js|css|html|svg|png|woff2|jpg|jpeg|json)$/,
      threshold: 0,
      minRatio: 0.8,
    }),
    new BrotliPlugin({
      asset: '[path].br[query]',
      test: /\.(js|css|html|svg|png|woff2|jpg|jpeg|json)$/,
      threshold: 0,
      minRatio: 0.8,
    }),
  ],

  resolve: {
    extensions: ['*', '.js', '.jsx'],
  },
};
