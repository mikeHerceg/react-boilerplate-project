
module.exports = {
  presets: [
    "@babel/preset-env",
    // Runtime automatic with React 17+ allows not importing React
    // in files only using JSX (no state or React methods)
    ["@babel/preset-react", { runtime: "automatic" }],
  ],
  "plugins": ["@babel/plugin-syntax-dynamic-import"]
 //// plugins: plugins,
};