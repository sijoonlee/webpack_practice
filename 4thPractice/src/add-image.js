import Acorn from './acorn.jpeg';

const addImage = () => {
  const img = document.createElement('img');
  img.alt = 'acorn';
  img.width = 300;
  img.src = Acorn;
  const body = document.querySelector('body');
  body.appendChild(img);
}

export default addImage;