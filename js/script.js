"use strict";

let numberOfFilms = +prompt("Сколько фильмов вы уже посмотрели?", "");

const personalMovDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};


for(let i = 0; i < 2;){
  
    let a = prompt('Один из последних просмотренных фильмов?', '');
    let b = prompt('На сколько оцените его?', '');
    if(a != null && b != null && a != '' && b != '' && a.length <= 50){
        personalMovDB.movies[a] = b;
        i++;
    }
}

if (personalMovDB.count < 10){
    alert('Просмотрено довольно мало фильмов');
} else if(personalMovDB.count <= 30){
    alert('Вы классическии зритель');
} else if(personalMovDB.count){
    alert('Вы киноман!');
}   else{
    alert('Произошла ошибка');
}

console.log(personalMovDB);


