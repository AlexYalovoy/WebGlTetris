const path = require("path");

module.exports = {
  mode: "development", // this will trigger some webpack default stuffs for dev
  entry: "./src/index.ts", // if not set, default path to './src/index.js'. Accepts an object with multiple key-value pairs, with key as your custom bundle filename(substituting the [name]), and value as the corresponding file path
  output: {
    filename: "main.js", // [name] will take whatever the input filename is. defaults to 'main' if only a single entry value
    path: path.resolve(__dirname, "dist"), // the folder containing you final dist/build files. Default to './dist'
  },
  devServer: {
    contentBase: "./dist",
  },
  module: {
    rules: [
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: "asset/resource",
      },
      {
        test: /\.json$/i,
        use: ["json5-loader"],
      },
      {
        test: /\.tsx?$/,
        use: "ts-loader",
        exclude: /node_modules/,
      },
    ],
  },
  resolve: {
    extensions: [ '.tsx', '.ts', '.js' ],
  },
};