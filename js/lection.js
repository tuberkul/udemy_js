//"use strict";
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

//передача по ссылке или по значению; Spread оператор

// let a = 5,
//     b = a;

// b = b + 5;

// const obj = {
//   a: 5,
//   b: 1
// };

// const copy = obj; // передает ссылка на объект и при редактировании копии, 
//                   //редактируется оригинальныи объект

// copy.a = 10;

// console.log(copy);
// console.log(obj);

// function copy(mainObj) {
//   let objCopy = {};

//   let key;
//   for (key in mainObj){
//     objCopy[key] = mainObj[key];
//   }

//   return objCopy;
// }

// const numbers = {
//   a: 2,
//   b: 5,
//   c: {
//     x: 7,
//     y: 4
//   }
// };

// const newNumbers = copy(numbers);

// newNumbers.a = 10;
// newNumbers.c.x = 10;

// //console.log(number);
// //console.log(newNumbers); //это поверностная копия объектов, то есть на первом уровне

// const add = {
//   d: 17,
//   e: 20
// };

// const clone = Object.assign({}, add); 

// clone.d = 20;

// // console.log(add);
// // console.log(clone);

// const oldArray = ['a', 'b', 'c'];
// const newArray = oldArray.slice();

// newArray[1] = 'furbv';

// console.log(newArray);
// console.log(oldArray);

// //Spread

// const video = ['youtube', 'vimeo', 'rutube'],
//       blogs = ['wordpress', 'livejournal', 'blogger'],
//       internet = [...video, ...blogs, 'vk', 'instagram', 'facebook'];

// console.log(internet);

// function log(a, b, c){
//   console.log(a);
//   console.log(b);
//   console.log(c);
// }

// const num = [2, 5, 7];

// log(...num);

// const array = ['a', 'b'];

// const newAarray = [...array];

// const a = {
//   one: 1,
//   two :2
// };

// const newA = {...a};//создание копии для объектов и массивов с помощью
//                     //spread оператора: ...

// js ООП язык

//console.dir([1,2,3]);//экземпляр массива


// "use strict";

// const soldier = {

// <<<<<<< setInterval_setTimeout
// "use strict";

// // const soldier = {
// =======
//"use strict";

//const soldier = {

//   health: 400,
//   armor: 100,
//   sayHello: function(){
//     console.log("Hello");
//   }
// };
// <<<<<<< setInterval_setTimeout

// const jonh = {
//   health:100
// };

// console.log(jonh.armor); 

// const now = new Date();
// console.log(now.getFullYear());
// console.log(now.getMonth());
// console.log(now.getDate());
// console.log(now.getDay());


// console.log(now.getTimezoneOffset());

// console.log(now.getTime());
// const jonh = {
//   health:100
// };

// console.log(jonh.armor); 


           // методы взаимодействия с DOM
 
 
 
            // усторевшие но устоявшиеся //
 
            // обращаемся к документу.
 
 
            // 1) по айди.
// 1) по айди. пишется в ковычках. шарп указывать не надо т.к. и так ясно из названия что мы ищем по id.
//const box = document.getElementById('айди');
 
 
// 2) по классу.
// 2) по классу. пишется в ковычках. точку селектора указывать не надо
// т.к. и так ясно что из названия что мы ищем по классовому селектору.
//const box = document.getElementsByClassName('селектор');


// 3) по обычному тэгу.
// 3) по обычному тэгу. пишется в ковычках. просто указать имя тэга, НО, их возьмет ВСЕ тэги с таким имемен на странице
// и вернет в переменную псевдомассив состоящий из коллекции одинаковых тегов.
//const box = document.getElementsByTagName('тэг');
// что бы забрать таким способом только один элемент по тэгу(два способа):
//1 способ) надо создать всевдомассив(как выше) со всеми тегами, вывести его в консоль, посчитать под каким индексом 
//нужный элемент(например, в коллекции он 4, значит индекс 5), и переписать вот так: 
//const box = document.getElementsByTagName('тэг')[5];
// возьмет только 4 элемень из коллекции всевдомассива под этим тэгом.
//2 способ) получить коллекцию всевдомассива, НО, при использовании в коде везде подставлять индекс нужного элемента к 
//которому хотим обратиться. пример получения и использования:
//const box = document.getElementsByTagName('тэг');
//console.log(box[5]);
//получили весь псевдомассив, но в работу даем только элемент с 5 индексом из этого массива.




// более актуальные методы //

// обращаемся к документу.

// 4) всех и любого
// универсальная вещь. может забрать сразу все элементы по селектору, или тэгу, или айди.
// можно даже по потомку и т.д. типа div>p, ul>li.list
// как можно ещё это сделать, вот ссылка 
// https://learn.javascript.ru/css-selectors
// но из-за того что в названии querySelectorAll не сказано какой элемент мы хотим взять, 
//то тут уже надо указывать # для айди и . для селектора, что бы код понял, что именно мы берем. 
// const box = document.querySelectorAll('#box');
// const box = document.querySelectorAll('li.list');
//const box = document.querySelectorAll('');
// так же возвращает в переменную псевдомассив, но уже не коллекцию, а Nodelist. 
//что дает нам возможность использовать метод forEach() к этому всевдомассиву.




 // 5) только первый
//заберет только первый элемент по указаному именованию. много span'ов на странице?
// const box = document.querySelector('span');
// запишет в переменную только один. самый первый спэн на странице.
//const box = document.querySelector('');




// небольшой типс:  
// название getelemenTbyid говорит о том, что по айдишнику мы забераем один элемент
// а название getelementSbytagname говорит о множественном числе.
//===
//динамическая типизация

//1)
//console.log(typeof(String(null)));
//console.log(typeof(String(4)));

//2)
//console.log(typeof(5 + ''));

//пример

//const num = 5;

//console.log("https://vk.com/catalog/" + num);
//2 пример
//const fontSize = 26 + 'px';

//to number
//1)
//console.log(typeof(Number('4')));

//2) унарныи плюс

//console.log(typeof(+'5'));

//3)

//console.log(typeof(parseInt("15px", 10)));

//пример

//let answ = +prompt("Вопрос", "");

//To boolean
//false всегда
//0, '', null, undefined, NaN;

//пример 1)

//let switcher = null;

//if (switcher) {
//  console.log('Working...');
//}

//switcher = 1;

//if (switcher) {
//  console.log('Working...');
//}

//2)
//console.log(typeof(Boolean('4')));

//3)
//console.log(typeof(!!"44444"));


//методы перебора массивов

//1) filter

'use strict';

// const names = ['Ivan', 'Ann', 'Ksenya', 'Voldemart'];

// const shortNames = names.filter(function(name) {
//     return name.length < 5;
// });

// console.log(shortNames);

//2) map трансформирующий метод

// const answers = ['IvAn', 'AnNa', 'Hello'];

// const result = answers.map(item => item.toLowerCase());

// console.log(result);

//3) every/some

// const some = [4, 'qwe', 'stbfd'];

// // console.log(some.some(item => typeof(item) === 'number'));

// console.log(some.every(item => typeof(item) === 'number'));

//reduce

// const arr = [4, 5, 1, 3, 2, 6];

// const res = arr.reduce((sum, current) => sum + current);

// console.log(res);

// const arr = ['apple', 'pear', 'plum'];

// const res = arr.reduce((sum, current) => `${sum}, ${current}`);
// console.log(res);



//ЗАМЫКАНИЕ

function createCounter() {
  let  counter = 0;
    const myFunction = function() {
      counter += 1;
      return counter;
    }

    return myFunction;
}

const increment = createCounter();

const c1 = increment();
const c2 = increment();
const c3 = increment();

console.log(c1, c2, c3);

//то что выше - стандартное замыкание - в данном случае это счетчик сколько раз была вызвана функция





// РЕКУРСИЯ

//возведение в степень

function pow(x, n) {
  let result = 1;
  for(let i = 0; i < n; i++) {
    result *= x;
  }

  return result;
} //функция без рекурсии

function pow(x, n) {
  if (n === 1) {
    return x;
  } else {
    return x * pow (x, n - 1);
  }
}  //функция с рекурсиеи

pow(2, 1); //2
pow(2, 2); //4
pow(2, 3); //8


//Инкапсуляция - один из принципов ООП - хранение объекта в приватном порядке (пользователь не сможет вмешаться и изменить код)

// function User(name, age) {
//   this.name = name;
//   let userAge = age;

//   this.say = function() {
//     console.log(`Имя пользователя: ${this.name}, возраст ${userAge}`);
//   };

//   this.getAge = function() {
//     return userAge;
//   };

//   this.setAge = function(age) {
//     if (typeof age === 'number' && age > 0 && age < 110) {
//       userAge = age;
//     } else {
//       console.log('Недопустимое значение!');
//     }
//   }
// }

// const ivan = new User('Ivan', 27);
// console.log(ivan.name);
// console.log(ivan.getAge());



// ivan.setAge(30);
// ivan.setAge(300);
// console.log(ivan.getAge());
// ivan.say();

//то что выше - инкапсуляция на примере конструктора, а ниже на примере класса

class User {
  constructor(name, age) {
    this.name = name;
    this._age = age;
  }

  say() {
    console.log(`Имя пользователя: ${this.name}, возраст ${this._age}`);
  }

  get age() {
    return this._age;
  }

  set age(age) {
    if (typeof age === 'number' && age > 0 && age < 110) {
      this._age = age;
    } else {
      console.log('Недопустимое значение!');
    }
  }
}

const vanya = new User('Ivan', 27);
console.log(vanya.age);
vanya.age = 150;
console.log(vanya.age);

vanya.say();



//функции генераторы

// function* generator() {
//   yield 'S';
//   yield 'c';
//   yield 'r';
//   yield 'i';
//   yield 'p';
//   yield 't';
// }

// const str = generator();

// console.log(str.next().value);

// function* count(n) {
//   for (let i = 0; i < n; i++) {
//     yield i;
//   }
// }

// // const counter = count(7);
// // console.log(counter.next().value);
// // console.log(counter.next().value);
// // console.log(counter.next().value);

// for (let k of count(7)) {
//   console.log(k);
// }