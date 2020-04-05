const path = require('path'); // (old syntax) webpack.config.js supports old version ECMA
const TerserPlugin = require('terser-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');


module.exports={
  entry: {
    'landing':'./src/index.js',
    'acorn-image':'./src/acorn-image.js'
  },
  output:{
    filename:'[name].[contenthash].js',
    path: path.resolve(__dirname, './dist'),
    publicPath: ''
  },
  mode: 'production',
  optimization:{
    splitChunks:{
      chunks:"all",
      minSize: 10000,
      automaticNameDelimiter:'_'
    }
  },
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
    // new TerserPlugin(), in production mode, this is set by default
    new MiniCssExtractPlugin({
      filename: '[name].[contenthash].css'
    }),
    new CleanWebpackPlugin({
      cleanOnceBeforeBuildPatterns:[
        '**/*',
        path.join(process.cwd(), 'build/**/*')
      ]
    }),
    new HtmlWebpackPlugin({
      chunks:['landing', 'vendors_acorn-image_landing'],
      filename: 'index.html',
      template: 'src/page-template.hbs',
      title: 'Hello World',
      description:'some desc 1',
      meta:{
        description:'some desc 2'
      }
    }),
    new HtmlWebpackPlugin({
      chunks:['acorn-image', 'vendors_acorn-image_landing'],
      filename: 'acorn-image.html',
      template: 'src/page-template.hbs',
      title: 'Image',
      description:'some desc 1',
      meta:{
        description:'some desc 2'
      }
    })   
  ]
}