const path = require("path");

module.exports = {
  mode: "development",
  resolve: {
    extensions: [".ts", ".tsx", ".js"],
  },
  devtool: "source-map",
  entry: {
    modules: "./modules.ts",
  },
  output: {
    filename: "[name].js",
    path: path.resolve(__dirname, "public"),
    library: "modules",
    libraryTarget: "this",
  },
  externals: {},
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: [
          {
            loader: "ts-loader",
            options: {
              configFile: path.resolve(__dirname, "./tsconfig.json"),
            },
          },
        ],
        exclude: /node_modules/,
      },
    ],
  },
};
