'use strict';
const root = document.querySelector('.root');

// outerWidth
// innerWidth
let coorX =  innerWidth/1.5;
root.style.maxWidth = coorX + 'px';
console.log(coorX);

let topMy = 200;
let width = coorX/2;


const render = () => {
    let cat = `<img src="./img/cat2.jpg" data-img="cat" alt="Cat smile" style="position: relative;
    top: ${topMy}px; left: ${width}px"> `;
    return root.innerHTML = cat;
}

render();

root.addEventListener('click', (event) => {
// console.log(event);
// console.log(event.target);
let a = Math.round(420 * Math.random(topMy));
let b = Math.round((coorX-80) * Math.random(width));
console.log(a,'b', b, 'coorX', coorX);
if(event.target.dataset.img != 'cat' ){return};
topMy = a;
width = b;
render();
});