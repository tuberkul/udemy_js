//"use strict";

// function showThis() {
//     console.log(this);
// }

// showThis();

// 1) обычная функция: this = window, но если use strict, то this = undefind


// function showThis(a, b) {
//     console.log(this);
//     function sum() {
//         console.log(this);
//         return a + b;
//     }
//     console.log(sum());
// }

// showThis(4, 5);

// const obj = {
//     a: 20,
//     b: 15,
//     sum: function(){
//         console.log(this);
//     }
// };

// obj.sum();

// 2) Контекст у методов объекта - сам объект

// function User(name, id) {
//     this.name = name;
//     this.id = id;
//     this.human = true;
//     this.hello = function(){
//         console.log("Hello! " + this.name);
//     };
// }

// let Ivan = new User('Ivan', 23);

// 3) this в конструкторах и классах - это новый экземпляр объекта

// function sayName(surname) {
//     console.log(this);
//     console.log(this.name + surname);
// }

// const user = {
//     name: 'john'
// };

// sayName.call(user, 'Smith');
// sayName.apply(user, ['Smith']);

// function count(num) {
//     return this*num;
// }

// const double = count.bind(2);
// console.log(double(3));

// 4) Ручная привязка this: call, apply, bind

//теперь немного практики

// const btn = document.querySelector('button');

// btn.addEventListener('click', function(){
//     this.style.backgroundColor = 'red';
// });

// const obj = {
//     num: 5,
//     sayNumber: function(){
//         const say = () => {
//             console.log(this);
//         };
//         say();
//     }
// };

// obj.sayNumber();

// const double = a => a * 2; //синтаксис стрелочнои функции

//классы

"use strict";

class Rectangle {
    constructor(height, width) {
        this.height = height;
        this.width = width;
    }

    calcArea() {
        return this.height * this.width;
    }
}

class ColoredRectangleWithText extends Rectangle{
    constructor(height, width, text, bgColor){
        super(height, width);
        this.text = text;
        this.bgColor = bgColor;
    }

    showMyProps(){
        console.log(`Текст: ${this.text}, цвет: ${this.bgColor}`);
    }
}

const div = new ColoredRectangleWithText(25, 10, 'Hello world', 'red');

div.showMyProps();
console.log(div.calcArea());
// const square = new Rectangle(10, 10);
// const long = new Rectangle(20, 100);

// console.log(long.calcArea());
// console.log(square.calcArea());

