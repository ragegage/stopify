module.exports = {
  context: __dirname,
  entry: "./stopify.jsx",
  output: {
    filename: "js.js"
  },
  module: {
    loaders: [
      {
        test: [/\.jsx?$/, /\.js?$/],
        exclude: /node_modules/,
        loader: 'babel-loader',
        query: {
          presets: ['es2015', 'react'],
          plugins: ["transform-object-rest-spread"]
        }
      }
    ]
  },
  devtool: 'source-maps',
  resolve: {
    extensions: [".js", ".jsx", "*"]
  },
  target: 'node'
};
