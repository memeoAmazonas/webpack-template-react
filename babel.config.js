const plugins = process.env.NODE_ENV !== "production" ? ["react-refresh/babel"] : []
module.exports = {
    presets: [
        "@babel/preset-env",
        ["@babel/preset-react", {runtime: "automatic"}],
    ],
    plugins,
}
