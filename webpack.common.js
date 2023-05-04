const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

const rules = [
    {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
            loader: "babel-loader",
        },
    },
    {
        test: /\.tsx?$/,
        exclude: /node_modules/,
        use: {
            loader: "ts-loader",
            options: {
                configFile: path.resolve(__dirname, "tsconfig.json"),
            },
        },
    },
    {
        test: /\.(png|woff|woff2|eot|ttf|svg|jpg|jpeg)$/,
        loader: "url-loader",
    },
    {
        test: /\.css$/,
        exclude: /node_modules/,
        use: ["style-loader", "css-loader"],
    },
];

module.exports = {
    entry: {
        app: path.join(__dirname, "src", "index.tsx"),
        // app: "./src/index.ts",
    },
    output: {
        filename: "[name].bundle.js",
        publicPath: "/",
        path: path.resolve(__dirname, "dist"),
        clean: true,
    },
    resolve: {
        extensions: [".tsx", ".ts", ".jsx", ".js", "..."],
    },
    module: { rules },
    plugins: [
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, "public", "index.html"),
        }),
    ],
};
