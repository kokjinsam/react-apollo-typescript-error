const path = require("path");

module.exports = {
  devtool: "source-map",
  entry: {
    app: [path.join(__dirname, "source/index.tsx")],
  },
  output: {
    filename: "[name].bundle.js",
    path: path.join(__dirname, "build"),
    publicPath: "/",
  },
  resolve: {
    extensions: [".ts", ".tsx", ".js", ".jsx", ".json"],
  },
  module: {
    rules: [
      // *.ts / *.tsx => ES6 => ES5
      {
        test: /\.tsx?$/,
        include: /source/,
        exclude: /node_modules/,
        use: [
          {
            loader: "awesome-typescript-loader",
            options: {
              useBabel: true,
              babelCore: path.join(__dirname, "node_modules/babel-core"),
            },
          },
        ],
      },
    ],
  },
};
