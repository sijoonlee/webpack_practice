import hello from './hello.js';
import HelloButton from './components/helloButton';
import Heading from './components/heading';
import addImage from './add-image';

const heading = new Heading();
heading.render();
const helloButton = new HelloButton();
helloButton.render();
hello();
addImage();

if(process.env.NODE_ENV == 'production')
  console.log("Production");
else if (process.env.NODE_ENV == 'development')
  console.log("Dev");