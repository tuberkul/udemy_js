const btns = document.querySelectorAll('button'),
    overlay = document.querySelector('.overlay');

// btn.onclick = function() {
//     alert('Click');
// }; //не использовать такои синтаксис(такое нужно исправлять)

let i = 0;

const deleteElement = (e) => {
    console.log(e.currentTarget);
    console.log(e.type);
    // i++;
    // if (i == 1) {
    //     btn.removeEventListener('click', deleteElement); 
    // }
    // //e.target.remove();
};

//btn.addEventListener('click', deleteElement);
//overlay.addEventListener('click', deleteElement);

btns.forEach(btn => {
    btn.addEventListener('click', deleteElement, {once: true});
});

const link = document.querySelector('a');

link.addEventListener('click', (event) => {
    event.preventDefault();

    console.log(event.target);
}); // метод отмены обычного поведения браузера
//в данныи момент мы отменили переход по ссылке и 
//сказали браузеру, что объект должен выводиться в консоль


