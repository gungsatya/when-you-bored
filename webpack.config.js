const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { merge } = require("webpack-merge");

const commonConfig = {
  entry: "./src/index.js",
  output: {
    filename: "main.js",
    path: path.resolve(__dirname, "dist"),
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          {
            loader: "style-loader",
          },
          {
            loader: "css-loader",
          },
        ],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./src/index.html",
      filename: "index.html",
    }),
  ],
  devServer: {
    static: path.resolve(__dirname, "dist"),
    port: 8080,
    hot: true,
  },
};

const productionConfig = {
  mode: "production",
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: [
          {
            loader: "babel-loader",
            options: {
              presets: ["@babel/preset-env"],
            },
          },
        ],
      },
    ],
  },
};

const developmentConfig = {
  mode: "development",
};

module.exports = (env, args) => {
  switch (args.mode) {
    case "development":
      return merge(commonConfig, developmentConfig);
    case "production":
      return merge(commonConfig, productionConfig);
    default:
      throw new Error("No matching configuration was found!");
  }
};
