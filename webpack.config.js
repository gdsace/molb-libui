const nodeExternals = require("webpack-node-externals");
const path = require("path");

const DEV = process.env.NODE_ENV === "development";

const config = {
  mode: "development",
  entry: `${__dirname}/src/components/index.ts`,
  devtool: "source-map",
  performance: { hints: false },
  output: {
    path: `${__dirname}/dist`,
    filename: "index.js",
    library: "molb-libui",
    libraryTarget: "umd",
    umdNamedDefine: true
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"]
      },
      {
        test: /\.scss.nomangle$/,
        include: path.resolve(__dirname, "src"),
        loaders: ["style-loader", "css-loader", "sass-loader"]
      },
      // PostCSS
      {
        test: /\.scss$/,
        exclude: /node_modules/,
        include: [path.resolve(__dirname, "src")],
        loaders: [
          "style-loader",
          {
            loader: "css-loader",
            options: {
              modules: true,
              importLoaders: 1,
              localIdentName: "[name]__[local]--[hash:base64:5]"
            }
          },
          "postcss-loader",
          "sass-loader"
        ]
      },
      {
        test: /\.svg$/,
        loader: "svg-sprite-loader",
        include: [path.resolve(__dirname, "src/components/icons")],
        options: {
          runtimeCompat: true
        }
      },
      {
        test: /\.(jpg|png|gif|mp4|webm|mp3|ogg|svg)$/,
        exclude: [path.resolve(__dirname, "src/components/icons")],
        loader: "file-loader",
        options: {
          name: "./f/[hash:16].[ext]"
        }
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/,
        loader: "file-loader",
        options: {
          name: "./f/[name].[ext]"
        }
      },
      {
        test: /\.jsx?$/,
        exclude: /\/node_modules\//,
        loader: "babel-loader",
        options: {
          plugins: [
            "@babel/plugin-proposal-class-properties",
            "@babel/proposal-object-rest-spread",
            ...(DEV ? ["react-hot-loader/babel"] : [])
          ],
          presets: ["@babel/env", "@babel/react"]
        }
      },
      {
        test: /\.tsx?$/,
        exclude: /\/node_modules\//,
        loader: "babel-loader",
        options: {
          plugins: [
            "@babel/proposal-class-properties",
            "@babel/proposal-object-rest-spread",
            ...(DEV ? ["react-hot-loader/babel"] : [])
          ],
          presets: ["@babel/env", "@babel/typescript", "@babel/react"]
        }
      }
    ]
  },
  externals: [nodeExternals()],
  resolve: {
    extensions: [".ts", ".tsx", ".js", ".jsx", ".json"],
    alias: {
      "@libui": path.resolve(__dirname, "src"),
      "@src": path.resolve(__dirname, "src"),
      "@test": path.resolve(__dirname, "test")
    }
  }
};

module.exports = config;
