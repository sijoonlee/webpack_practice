import './helloText.scss';

class HelloButton
{
  btnCls = 'helloBtn';
  render(){
    const body = document.querySelector('body');
    const button = document.createElement('button');
    button.innerHTML = 'Hello';
    button.onclick = () => {
      const p = document.createElement('p');
      p.classList.add('helloText');
      p.innerHTML = 'Hello!!!';
      body.appendChild(p);
    }
    button.classList.add(this.btnCls); 
    // this will make an error without babel
    // most browser doesn't support passing class attr as parameter 
    
    body.appendChild(button);
  }
}

export default HelloButton;