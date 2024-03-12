const HtmlWebpackPlugin = require("html-webpack-plugin");
const path = require("path");

module.exports = {
  entry: "./src/index.js",
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "dist"),
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env"],
          },
        },
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./src/index.html",
      minify: {
        collapseWhitespace: true,
        removeComments: true,
      },
      filename: "index.html",
      inject: "body",
    }),
  ],
  mode: "development",
  devServer: {
    historyApiFallback: true,
    static: {
      directory: path.resolve(__dirname, "./src"),
    },
    open: true,
    compress: true,
    hot: true,
    port: 8080,
    headers: {
      "Content-Type": "text/html",
    },
  },
  optimization: {
    minimize: true,
  },
};
