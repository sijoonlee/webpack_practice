
yarn add --dev css-loader style-loader

https://stackoverflow.com/questions/34039826/webpack-style-loader-vs-css-loader
The CSS loader takes a CSS file and returns the CSS with imports and url(...) resolved via webpack's require functionality:

var css = require("css!./file.css");
// => returns css code from file.css, resolves imports and url(...) 
It doesn't actually do anything with the returned CSS.

The style loader takes CSS and actually inserts it into the page so that the styles are active on the page.


yarn add --dev sass-loader node-sass


yarn add --dev @babel/core babel-loader @babel/preset-env babel-plugin-transform-class-properties