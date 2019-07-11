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
        loader: 'css-loader',
        options: {
          modules: true,
        },
      },
    ],
  },

  resolve: {
    extensions: ['*', '.js', '.jsx'],
  },
};
