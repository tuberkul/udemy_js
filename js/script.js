"use strict";

let numberOfFilms;


function start() {
    numberOfFilms = +prompt("Сколько фильмов вы уже посмотрели?", "");
    
    while (numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)) {
        alert('Введите корректные данные');
        return start();
    }
}

start();

const personalMovDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

function rememberMyFilms(){
    for(let i = 0; i < 2;){
  
        let a = prompt('Один из последних просмотренных фильмов?', '');
        let b = prompt('На сколько оцените его?', '');
        if(a != null && b != null && a != '' && b != '' && a.length <= 50){
            personalMovDB.movies[a] = b;
            i++;
        }
    }
}

rememberMyFilms();

function detectPersonalLevel(){
    if (personalMovDB.count < 10){
        alert('Просмотрено довольно мало фильмов');
    } else if(personalMovDB.count <= 30){
        alert('Вы классическии зритель');
    } else if(personalMovDB.count){
        alert('Вы киноман!');
    }   else{
        alert('Произошла ошибка');
    }    
}

detectPersonalLevel();

function showMyDB(hidden){
    if (!hidden){
        console.log(personalMovDB);
    }
}

showMyDB(personalMovDB.privat);

function writeYourGenres(){
    for(let i = 1; i < 4; i++){
        personalMovDB.genres[i - 1] = prompt('Ваш любимыи жанр под номером ' + i);
        if (personalMovDB.genres[i - 1] == '' || personalMovDB.genres[i - 1] == null){
            alert('Введите корректные данные');
            return writeYourGenres();
            }
    }
    
}

writeYourGenres();