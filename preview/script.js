'use strict';

// <<<<<<< parametrs_of_document
// const box = document.querySelector('.box'),
//       btn = document.querySelector('button');

// // const width = box.clientWidth;
// // const height = box.clientHeight;

// // const width = box.offsetWidth;
// // const height = box.offsetHeight;

// const width = box.scrollWidth;
// const height = box.scrollHeight;

// console.log(width, height);

// btn.addEventListener('click', () => {
//     // box.style.height = box.scrollHeight + 'px';
//     console.log(box.scrollTop);
// });

// console.log(box.getBoundingClientRect().top);

// const style = window.getComputedStyle(box);

// console.log(style.display);

// console.log(document.documentElement.scrollTop);
// =======

// localStorage.setItem('number', 5);

// // localStorage.removeItem('number');
// localStorage.clear();

// localStorage.getItem('number');


const checkbox = document.querySelector('#checkbox'),
      form = document.querySelector('form'),
      change = document.querySelector('#color');

if (localStorage.getItem('isChecked')) {
    checkbox.checked = true;
} 

if (localStorage.getItem('bg') === 'changed'){
    form.style.backgroundColor = 'red';
}

checkbox.addEventListener('change', () => {
    localStorage.setItem('isChecked', true);
});

change.addEventListener('click', () => {
    if (localStorage.getItem('bg') === 'changed'){
        localStorage.removeItem('bg');
        form.style.backgroundColor = '#fff';
    } else {
        localStorage.setItem('bg', 'changed');
        form.style.backgroundColor = 'red';
    }
});

const persone = {
    name: 'Alex',
    age: 25
};

const serializedPersone = JSON.stringify(persone);
localStorage.setItem('alex', serializedPersone);
console.log(JSON.parse(localStorage.getItem('alex')));


