var path = require('path');

module.exports = {
  mode: 'development',
  entry: './bench_bnb.jsx',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'app/assets/javascripts'
  },
  devtool: 'source-map',
  module: {
      rules: [
        // rules for modules (configure loaders, parser options, etc.)
        {
          test: /\.(js|jsx)$/,
          include: [
            path.resolve(__dirname, "app")
          ],
          exclude: [
            path.resolve(__dirname, "app/demo-files"),
            path.resolve(__dirname, "node_modules")
          ],
          use: {
              loader: "babel-loader"
          }
      }]
    },
};
