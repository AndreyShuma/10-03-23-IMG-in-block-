'use strict';
const root = document.querySelector('.root');

let topMy = 200;
let width = 400;

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
let b = Math.round(820 * Math.random(width));
// console.log(a, b);
if(event.target.dataset.img != 'cat' ){return};
topMy = a;
width = b;
render();
})