const path = require('path');

module.exports = {
  entry: './client/src/index.jsx',
  mode: 'development',
  watch: true,
  output: {
    path: path.resolve(__dirname, './client/dist'),
    filename: 'bundle.js'
  },

  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react']
          }
        }
      }
    ]
  },

  resolve: {
    extensions: ['*', '.js', '.jsx']
  }
};