const { merge } = require("webpack-merge");
const common = require("./webpack.common.js");
const WorkboxPlugin = require("workbox-webpack-plugin");

module.exports = merge(common, {
    mode: "production",
    devtool: "source-map",
    output: {
        filename: "[name].[contenthash].js",
    },
    plugins: [
        new WorkboxPlugin.GenerateSW({
            clientsClaim: true,
            skipWaiting: true,
            maximumFileSizeToCacheInBytes: 10 * 1024 * 1024,
        }),
    ],
});
