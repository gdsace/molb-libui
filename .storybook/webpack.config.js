const path = require("path");
const autoprefixer = require("autoprefixer");
const createCompiler = require('@storybook/addon-docs/mdx-compiler-plugin');
const DEV = process.env.NODE_ENV === "development";

function getDefaultConfig(defaultConfig) {
    // The reason why we use function to export config, can see the document here:
    // https://storybook.js.org/configurations/custom-webpack-config/
    const extraLoader = [// Mostly for tests, but legacy JS in source too
        {
            test: /\.css$/,
            use: ['style-loader', 'css-loader']
        },
        {
            test: /\.scss.nomangle$/,
            include: path.resolve(__dirname, "../src"),
            loaders: ["style-loader", "css-loader", "sass-loader"]
        },
        // PostCSS
        {
            test: /\.scss$/,
            exclude: /node_modules/,
            include: path.resolve(__dirname, "../src"),
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
                {
                    loader: "postcss-loader",
                    options: {
                        plugins: function plugins() {
                            return [autoprefixer("last 2 versions", "ie 11")];
                        }
                    }
                },
                "sass-loader"
            ]
        },
        {
            test: /\.svg$/,
            loader: "svg-sprite-loader",
            include: path.resolve(__dirname, "../src/components/icons"),
            options: {
                runtimeCompat: true
            }
        },
        {
            test: /\.(jpg|png|gif|mp4|webm|mp3|ogg|svg)$/,
            exclude: path.resolve(__dirname, "../src/components/icons"),
            loader: "file-loader",
            options: {
                name: "./f/[hash:16].[ext]"
            }
        },
        {
            test: /\.(woff|woff2|eot|ttf|otf)$/,
            loader: "file-loader",
            include: path.resolve(__dirname, "../src"),
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
        }, {
            test: /\.tsx?$/,
            exclude: /\/node_modules\//,
            use: [
                {
                    loader: "babel-loader",
                    options: {
                        plugins: [
                            "@babel/proposal-class-properties",
                            "@babel/proposal-object-rest-spread",
                            ...(DEV ? ["react-hot-loader/babel"] : [])
                        ],
                        presets: ["@babel/env", "@babel/typescript", "@babel/react"]
                    }
                },
                {
                    loader: "react-docgen-typescript-loader",
                    options: {
                        tsconfigPath: path.resolve(__dirname, "../tsconfig.json")
                    }
                }
            ]
        }, {
            test: /\.mdx?$/,
            exclude: /\/node_modules\//,
            use: [
                {
                    loader: "babel-loader",
                    options: {
                        plugins: [
                            "@babel/proposal-class-properties",
                            "@babel/proposal-object-rest-spread",
                            ...(DEV ? ["react-hot-loader/babel"] : [])
                        ],
                        presets: ["@babel/env", "@babel/typescript", "@babel/react"]
                    }
                }, {
                    loader: '@mdx-js/loader',
                    options: {
                        compilers: [createCompiler({})],
                    },
                },
            ]
        }
        // Vanilla CSS, need to use in notification component.
    ];

    defaultConfig.module.rules = [...extraLoader];

    defaultConfig.resolve = {
        extensions: [".js", ".jsx", ".ts", ".tsx"],
        modules: ["node_modules", path.resolve(__dirname, "../src")]
    };
    return defaultConfig;
}

// function productionBuild(config) {
//     console.log("======building prod======");
//     config.entry = {};   // remove this line if you want storybook js files in output.
//     config.entry["Components"] = ['./src/main.ts'];
//
//     config.output = {
//         path: __dirname + '/dist',
//         filename: 'index.js',
//         library: 'mcf-ui-components',
//         libraryTarget: 'umd',
//         umdNamedDefine: true,
//     };
//     return config;
// }

module.exports = ({ config, mode }) => {
    const resolvedConfig = getDefaultConfig(config);
    // if(mode === "PRODUCTION") return productionBuild(resolvedConfig);
    return resolvedConfig;
};
