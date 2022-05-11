// touchstart касание элемента
// touchmove смещение элемента
// touchend закончилось касание
// touchenter как только палец зашел на пределы элемента
// touchleave
// touchcansel не регистрируется точка соприкосновения

"use strict";

window.addEventListener('DOMContentLoaded', () => {
    const box = document.querySelector('.box');

    box.addEventListener('touchstart', (e) => {
        e.preventDefault();
        console.log('start');
        console.log(e.touches);
    });

    box.addEventListener('touchmove',(e) => {
        e.preventDefault();
        console.log(e.targetTouches[0].pageX);
    });
    box.addEventListener('touchend',(e) => {
        e.preventDefault();
        console.log('end');
    });
});

// touches количество пальцев на экране
// targetTouches количество пальцев на объекте
// changedTouches список пальцев участвующих в текущем событии