const style = require('style-loader');
const css = require('css-loader');
const path = require('path');

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

  resolve: {
    extensions: ['*', '.js', '.jsx'],
  },
};
