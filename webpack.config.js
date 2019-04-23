const HtmlWebpackPlugin = require('html-webpack-plugin')
const globby = require('globby');
const path = require('path');
paths = globby.sync(['./src/pages/*.js'])
console.log(paths)
const entry = {}
const plugins=[]
paths.map(p=>{
  const name = path.basename(p).split('.').slice(0,-1)[0]
  entry[name]= p
  plugins.push(new HtmlWebpackPlugin({
    filename:`${name}.html`,
    chunks: [name]
  }))
});
module.exports = {
  module: {
    rules: [
      {
        test: /\.scss$/,
        use: [
          "style-loader", // creates style nodes from JS strings
          "css-loader", // translates CSS into CommonJS
          "sass-loader" // compiles Sass to CSS, using Node Sass by default
        ],
      },
    ],
  },
  entry: entry,
  mode:'production',
  plugins:plugins,
};