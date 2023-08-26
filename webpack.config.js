const path = require("path");

module.exports = {
  entry: "./index.js",
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "dist"),
    library: "skillicons-npm",
    libraryTarget: "umd", // Universal Module Definition
    umdNamedDefine: true,
  },
  module: {
    rules: [
      {
        test: /\.svg$/,
        use: "svg-inline-loader",
      },
    ],
  },
  mode: "development", // Set to 'development' during development
};
