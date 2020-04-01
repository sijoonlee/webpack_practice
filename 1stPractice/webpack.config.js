const path = require('path'); // (old syntax) webpack.config.js supports old version ECMA

module.exports={
  entry:'./src/index.js',
  output:{
    filename:'bundle.js',
    path: path.resolve(__dirname, './dist')
  },
  mode: 'none'
}