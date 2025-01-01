

let lastItems = document.querySelector('.item:nth-child(2)');

lastItems.style.color = 'red';
// const grandParent = document.querySelector('.todo-list')
// const parent= grandParent.children;
// const children = grandParent.querySelectorAll('.item');
// console.log(children);

const children = document.querySelector('.item');
const parent = children.parentElement;
console.log(parent);

