import hello from './hello.js';
import HelloButton from './components/helloButton';
import Heading from './components/heading';
import _ from 'lodash';
import React from 'react';

const heading = new Heading();
heading.render(_.upperFirst("landing Page"));
const helloButton = new HelloButton();
helloButton.render();
hello();

if(process.env.NODE_ENV == 'production')
  console.log("Production");
else if (process.env.NODE_ENV == 'development')
  console.log("Dev");