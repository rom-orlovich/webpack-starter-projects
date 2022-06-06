import * as webpack from "webpack";
import * as path from "path";
import Minicss from "mini-css-extract-plugin";
import Htmlp from "html-webpack-plugin";
import "webpack-dev-server";

const config: webpack.Configuration = {
  mode: "development",
  devtool: "inline-source-map",
  devServer: {
    static: {
      directory: path.resolve(__dirname, "public"),
    },
    port: "3000",
    client: {
      overlay: { errors: true, warnings: true },
    },

    hot: true,
    compress: true,
    historyApiFallback: true,
    open: true,
  },
  entry: {
    build: path.resolve(__dirname, "src/ts/app.ts"),
  },
  output: {
    filename: "[name][contenthash].js",
    path: path.resolve(__dirname, "public"),
    clean: true,
  },
  module: {
    rules: [
      {
        test: /\.ts$/,
        exclude: /node_modules/,
        use: ["ts-loader"],
        include: [path.resolve(__dirname, "src/ts")],
      },

      {
        test: /\.scss$/,
        use: [Minicss.loader, "css-loader", "sass-loader"],
        include: [path.resolve(__dirname, "src/style")],
      },
    ],
  },

  resolve: {
    extensions: [".ts", ".js"],
  },

  plugins: [
    new Minicss(),
    new Htmlp({
      template: "./src/index.html",
      title: "Pong-App",
      filename: "index.html",
    }),
  ],
};

export default config;
