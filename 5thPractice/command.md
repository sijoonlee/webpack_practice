Multiple Page Applications

  entry: {
    'landing':'./src/index.js',
    'acorn-image':'./src/acorn-image.js'
  },
  output:{
    filename:'[name].[contenthash].js',
    path: path.resolve(__dirname, './dist'),
    publicPath: ''
  },

  .......

    new MiniCssExtractPlugin({
      filename: '[name].[contenthash].css'
    }),

    new HtmlWebpackPlugin({
      chunks:['landing'],
      filename: 'index.html',
      template: 'src/page-template.hbs',
      title: 'Hello World',
      description:'some desc 1',
      meta:{
        description:'some desc 2'
      }
    }),
    new HtmlWebpackPlugin({
      chunks:['acorn-image'],
      filename: 'acorn-image.html',
      template: 'src/page-template.hbs',
      title: 'Image',
      description:'some desc 1',
      meta:{
        description:'some desc 2'
      }
    })   


Code Splitting 
to efficiently use large Lodash library, we can use optimization option to have common dependencies file: vendor~[]~[].js file

ex) 
import _ from Lodash
_.upperFirst('some string');

  optimization:{
    splitChunks:{
      chunks:"all"
    }
  },
    new HtmlWebpackPlugin({
      chunks:['landing', 'vendors~acorn-image~landing'],
      filename: 'index.html',
      template: 'src/page-template.hbs',
      title: 'Hello World',
      description:'some desc 1',
      meta:{
        description:'some desc 2'
      }
    }),
    new HtmlWebpackPlugin({
      chunks:['acorn-image', 'vendors~acorn-image~landing'],
      filename: 'acorn-image.html',
      template: 'src/page-template.hbs',
      title: 'Image',
      description:'some desc 1',
      meta:{
        description:'some desc 2'
      }
    })


Code splitting to extract React only

* React is less than 30k, so use minSize 10k

  optimization:{
    splitChunks:{
      chunks:"all",
      minSize: 10000,
      automaticNameDelimiter:'_'
    }
  },   