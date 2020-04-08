import HelloWorldButton from './components/hello-world-button/hello-world-button.js';
import Heading from './components/heading/heading.js';
import _ from 'lodash';
import 'bootstrap';
// we can use either ready-to-use css or pre-compiled scss(import to scss)
// import 'bootstrap/dist/css/bootstrap.min.css'; // ready-to-use css
import './index.scss';

import { library, dom  } from '@fortawesome/fontawesome-svg-core';
import { faSpinner } from '@fortawesome/free-solid-svg-icons';
library.add(faSpinner);
dom.watch(); // replace <i> tag with svg

const heading = new Heading();
heading.render('hello world');
const helloWorldButton = new HelloWorldButton();
helloWorldButton.render();

if (process.env.NODE_ENV === 'production') {
    console.log('Production mode');
} else if (process.env.NODE_ENV === 'development') {
    console.log('Development mode');
}

console.log(_.upperFirst('index module'));
