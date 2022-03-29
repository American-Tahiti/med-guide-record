import path from "path";
export default {
    mode: "development",
    devtool: "eval-source-map",
    entry: "./src/index.js",
    output: {
        path: path.resolve(__dirname, "src"),
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