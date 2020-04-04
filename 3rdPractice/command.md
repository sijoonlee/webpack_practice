Plugins

- Tersa Plugin for decreasing the bundle size
yarn add --dev terser-webpack-plugin

- minicssextractplugin - Extract CSS into a seperate file
yarn add --dev mini-css-extract-plugin

- 'bundle.[contenthash].js' in webpack.config.js
update the browser cache where there is a change in the file
contenthash is dependent on the content of the file

- clean-webpack-plugin to clean up dist foler before new bundle
yarn add --dev clean-webpack-plugin

from webpack.config.js
    new CleanWebpackPlugin({
      cleanOnceBeforeBuildPatterns:[
        '**/*',                                 // means remove all the files together with sub directories
        path.join(process.cwd(), 'build/**/*')  // when you want to delete files other than dist folder, you have to specify abs dir
      ]
    })  

- html-webpack-plugin to automatically generate html at dist folder
https://github.com/jantimon/html-webpack-plugin
https://github.com/jantimon/html-webpack-plugin/blob/master/docs/template-option.md

yarn add --dev html-webpack-plugin

    publicPath: 'dist/' -> will be prefix in html file <script src="dist/bundle.1e9b32d45a5748767878.js">
    
    so use 
    publicPath: '' -> <script src="bundle.1e9b32d45a5748767878.js">

- html template
https://handlebarsjs.com/

yarn add --dev handlebars-loader handlebars


- plugin list
https://webpack.js.org/plugins/