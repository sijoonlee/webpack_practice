import Acorn from './acorn.jpeg';
import './acorn-image.scss';

class AcornImage {
  render = () => {
    const img = document.createElement('img');
    img.alt = 'acorn';
    img.width = 300;
    img.src = Acorn;
    img.classList.add('acorn-image');
    const body = document.querySelector('body');
    body.appendChild(img);
  }
}

export default AcornImage;