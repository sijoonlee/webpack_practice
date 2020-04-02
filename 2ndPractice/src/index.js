import hello from './hello.js';
import HelloButton from './components/helloButton';
import addImage from './add-image';

const helloButton = new HelloButton();
helloButton.render();
hello();
addImage();