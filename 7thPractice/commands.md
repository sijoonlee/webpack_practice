git clone https://github.com/vp-online-courses/webpack-tutorial.git
git checkout -b starting-point-for-use-cases remotes/origin/starting-point-for-use-cases

1. Integration with jQuery.
See Heading.js

2. Custom font

https://fonts.google.com/specimen/Indie+Flower
https://onlinefontconverter.com/

see index.scss
@font-face{
    ~~~~
}

see index.js
import './index.scss';

see webpack config
{
    test: /\.(woff2|woff|ttf)$/,
    use: [
        {
            loader:'file-loader',
            options:{
                name:'[name].[ext]',
                outputPath: 'font/' // under dist folder
            }
        }
    ]
}


3. Integration with Bootstrap.

yarn add bootstrap
dependency:
yarn add jquery popper.js

- if using scss from bootstrap
yarn add --dev postcss-loader autoprefixer precss

we need to add lines below to webpack config for scss
{
    loader:'postcss-loader',
    options:{
        plugin: function(){
            return [
                require('precss'),
                require('autoprefixer')
            ];
        }
    }
}, 

we need to add below line to index.css 
@import "~bootstrap/scss/bootstrap";
add line below to index.js
import 'bootstrap';

- if using css
add below lines to index.js
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css'; // ready-to-use css



3. Using FontAwesome with Webpack.
yarn add @fortawesome/fontawesome-svg-core @fortawesome/free-solid-svg-icons @fortawesome/free-regular-svg-icons @fortawesome/free-brands-svg-icons

import { library, dom  } from '@fortawesome/fontawesome-svg-core';
import { faSpinner } from '@fortawesome/free-solid-svg-icons';
library.add(faSpinner);
dom.watch(); // replace <i> tag with svg


4. Using ESLint.
yarn add eslint --dev
yarn add babel-eslint --dev // to use newest ecma
add this to script in package.json
    "lint":"eslint ."

make eslint config file at working directory
.eslintrc

setting rules
https://eslint.org/docs/rules/
