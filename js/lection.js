"use strict";
/*
let number = 4.6; //это числовой тип данных

console.log(-4/0);
console.log('string' * 9);//NaN (Not a Number)

//console.log(something); тип данных null

//let und;
//console.log(und); тип данных undefined

const obj = {
    name: "John",
    age: 25,
    isMarried: false
};

console.log(obj.name);
//console.log(obj['name']);
let arr = ['plum.png', 'orange.jpg', 'apple.bmp', 6, {}, []];
console.log(arr[1]);
*/

//раздел 7

/*alert('Hello');
const result = confirm("Are you here?");
console.log(result);

const answer = prompt("Вам есть 18?", "");
console.log(typeof(answer));

const answers = [];
answers[0] = prompt('Как ваше имя?', '');
answers[1] = prompt('Как ваша фамилия?', '');
answers[2] = prompt('Сколько вам лет?', '');

console.log(typeof(answers));
*/

//Раздел 8


// let incr = 10,
//     decr = 10,
//     incr1 = 10,
//     decr1 = 10;

// console.log(++incr1);
// console.log(--decr1);
// console.log(incr++);
// console.log(decr--);

// const num = 50;
// switch (num) {
//     case 49:
//         console.log('Неверно');
//         break;
//     case 100:
//         console.log('Неверно');
//         break;
//     case 50:
//         console.log('В точку!');
//         break;
//     default:
//         console.log('Не в этот раз');
//         break;
// }


//let num = 50;

//while(num < 50) {
//    console.log(num);
//    num++;
//}

//for (let i = 1; i < 0; i++) {
//    console.log(i);
//    if (i === 6) {
//        break;
  //      continue; оператор позволяет пропустить шаг и двигаться
  //      по циклу дальше
//    }
//}

//function showFrirstMessage(text){
//    console.log(text);
//}

//showFrirstMessage('Hello world');

//немного о методах для работы со строками
// const logg = 'Hello world';
// console.log(logg.slice(1, 6));
// console.log(logg.substring(6, 11));
// console.log(logg.substr(6, 5));

// const num = 12.2;
// console.log(Math.round(num));

// const test = '12.2px';
// console.log(Math.parseInt(test));
// console.log(Math.parseFloat(test));

//callback - функции

// function first() {
//   //Do something
//   setTimeout(function() {
//     console.log(1);
//   }, 500);
// }

// function second() {
//   console.log(2);
// }

// first();
// second();

// function LearnJS(lang, callback){
//   console.log(`Я учу: ${lang}`);
//   callback();
// }

// function done(){
//   console.log('Я прошел этот урок!');
// }

// LearnJS('JavaScript', done);

//урок про объекты

// const options = {
//   name: 'test',
//   width: 1024,
//   height: 1024,
//   colors: {
//     border: 'black',
//     bg: 'red'
//   },
//   makeTest: function(){
//     console.log("Test");
//   }
// };

// delete options.name;

// console.log(options);

// for (let key in options) {
//   if (typeof(options[key]) === 'object'){
//     for (let i in options[key]){
//       console.log(`Своиство ${i} имеет значение ${options[key][i]}`);
//     }
//   } else {
//   console.log(`Своиство ${key} имеет значение ${options[key]}`);
//   }
// }

//console.log(Object.keys(options).length); //длинна объекта

//options.makeTest();//создание и вызов метода

//const {border, bg} = options.colors; //деструктуризация объектов

//console.log(border);

//массивы

//const arr = [1, 12, 63, 6, 8];
//arr.sort(compairNum);
//console.log(arr);

//function compairNum(a, b){
//  return a - b;
//}
//arr.pop();//метод удаления последнего элемента массива
//arr.push(10);//метод добавления в конец массива элемента

//for (let i = 0; i < arr.length; i++){
//  console.log(arr[i]);
//} //цикл перебора массива

//for(let value of arr) {
//  console.log(value);
//} //так же цикл перебора массива, но с помощью цикла for of
    //но есть один плюс: возможность использовать break и continue
//arr[99] = 0;
//console.log(arr.length);

//arr.forEach(function(item, i, arr){
//    console.log(`${i}: ${item} внутри массива ${arr}`);
//}); // обычно используется программистами

//const str = prompt('', '');
//const products = str.split(', ');
//products.sort();
//console.log(products.join('; '));

