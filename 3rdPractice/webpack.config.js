const path = require('path'); // (old syntax) webpack.config.js supports old version ECMA
const TerserPlugin = require('terser-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');


module.exports={
  entry:'./src/index.js',
  output:{
    filename:'bundle.[contenthash].js',
    path: path.resolve(__dirname, './dist'),
    publicPath: ''
  },
  mode: 'none',
  module:{
    rules:[
      {
        test:/\.(png|jpg|jpeg)$/,
        use:[
          'file-loader'
        ]
      },
      {
        test:/\.css$/,
        use:[
          MiniCssExtractPlugin.loader,'css-loader'
        ]
      },
      {
        test:/\.scss$/,
        use:[
          MiniCssExtractPlugin.loader,'css-loader', 'sass-loader'
        ]
      },
      {
        test:/\.js$/,
        exclude: /node_modules/,
        use:{
          loader:'babel-loader',
          options:{
            presets:['@babel/env'],
            plugins:['transform-class-properties']
          }
        }
      },
      {
        test: /\.hbs$/,
        use: [
          'handlebars-loader'
        ]
      }
    ]
  },
  plugins:[
    new TerserPlugin(),
    new MiniCssExtractPlugin({
      filename: 'style.[contenthash].css'
    }),
    new CleanWebpackPlugin({
      cleanOnceBeforeBuildPatterns:[
        '**/*',
        path.join(process.cwd(), 'build/**/*')
      ]
    }),
    new HtmlWebpackPlugin({
      //filename: 'subfolder/custom_filename.html',
      template: 'src/index.hbs',
      title: 'Hello World',
      description:'some desc 1',
      meta:{
        description:'some desc 2'
      }
    })  
  ]
}