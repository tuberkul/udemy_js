// function myModule() {
//     this.hello = function() {
//         console.log('hello');
//     };

//     this.goodbye = function() {
//         console.log('bye!');
//     };
// }

// module.exports = myModule;

//export ES6

export let one = 1;

let two = 2;

export {two};

// export function sayHi() {
//     console.log('Hello!');
// }

export default function sayHi() {
    console.log('Hello!');
}