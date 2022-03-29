import path from "path";

export default {
    mode: "production",
    devtool: "source-map",
    entry: "./src/index.js",
    output: {
        path: path.resolve(__dirname, "dist"),
        publicPath: "/",
        filename: "bundle.js",
    },
    plugins: [],
    module: {
        rules:[
            { test: /\.jd$/, exclude: /node_modules/, use: ["babel-loader"] },
            { test: /\.css$/, use: ["style-loader", "css-loader"] },
        ],
    },
};