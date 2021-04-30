var path = require("path");
var miniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
  mode: "none",
  entry: "./src/index.js",
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "dist"),
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [{ loader: miniCssExtractPlugin.loader }, "css-loader"],
      },
    ],
  },
  plugins: [new miniCssExtractPlugin()],
};
