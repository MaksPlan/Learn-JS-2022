const button = document.createElement('button');
button.style.height = button.style.width = '50px';

document.body.append(button);

const input = document.createElement('input');
input.style.marginRight = '20px';
input.style.height = '50px'
button.before(input);
const newUl = document.createElement('ul');
document.button.after(newUl);

button.addEventListener('click', () => {
    const currentInputValue = input.value;
   const newLi = document.createElement('li')
   newLi.innerText = `${currentInputValue}`
   newUl.append(newLi);
})

