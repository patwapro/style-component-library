var path = require("path");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");

module.exports = {
  entry: "./src/index.js",
  output: {
    path: path.resolve(__dirname, "build"),
    filename: "index.js",
    libraryTarget: "commonjs2"
  },
  plugins: [new CleanWebpackPlugin()],
  module: {
    rules: [
      {
        test: /\.js$/,
        include: path.resolve(__dirname, "src"),
        exclude: /(node_modules|bower_components|build)/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/env"],
            plugins: [
              "@babel/plugin-proposal-object-rest-spread",
              "@babel/plugin-transform-react-jsx"
            ]
          }
        }
      }
    ]
  },
  resolve: {
    alias: {
      "style-component-library": path.resolve(__dirname, "./src")
    }
  },
  optimization: {
    splitChunks: {
      chunks: "all"
    }
  },
  externals: {
    react: "commonjs react"
  }
};
