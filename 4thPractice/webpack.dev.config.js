const path = require('path'); // (old syntax) webpack.config.js supports old version ECMA
// const TerserPlugin = require('terser-webpack-plugin');
// const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');


module.exports={
  entry:'./src/index.js',
  output:{
    // filename:'bundle.[contenthash].js', // we don't need content hasing in dev
    filename:'bundle.js',
    path: path.resolve(__dirname, './dist'), 
    publicPath: ''
  },
  mode: 'development',
  devServer:{
    contentBase:path.resolve(__dirname, './dist'),
    index:'index.html',
    port:9000
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
          'style-loader','css-loader'
        ]
      },
      {
        test:/\.scss$/,
        use:[
          'style-loader','css-loader', 'sass-loader'
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
    // new TerserPlugin(),
    // new MiniCssExtractPlugin({  // for development, this doesn't help
    //   filename: 'style.[contenthash].css'
    // }),
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