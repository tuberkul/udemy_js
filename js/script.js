"use strict";

const personalMovDB = {
    count: 0,
    movies: {},
    actors: {},
    genres: [],
    privat: true,
    start: function() {
        personalMovDB.count = +prompt("Сколько фильмов вы уже посмотрели?", "");
        
        while (personalMovDB.count == '' || personalMovDB.count == null || isNaN(personalMovDB.count)) {
            personalMovDB.count = +prompt("Сколько фильмов вы уже посмотрели?", "");
        }
    },
    rememberMyFilms: function(){
        for(let i = 0; i < 2;){
      
            let a = prompt('Один из последних просмотренных фильмов?', '');
            let b = prompt('На сколько оцените его?', '');
            if(a != null && b != null && a != '' && b != '' && a.length <= 50){
                personalMovDB.movies[a] = b;
                i++;
            }
        }
    },
    detectPersonalLevel: function(){
        if (personalMovDB.count < 10){
            alert('Просмотрено довольно мало фильмов');
        } else if(personalMovDB.count <= 30){
            alert('Вы классическии зритель');
        } else if(personalMovDB.count){
            alert('Вы киноман!');
        }   else{
            alert('Произошла ошибка');
        }    
    },
    showMyDB: function(hidden){
        if (!hidden){
            console.log(personalMovDB);
        }
    },
    writeYourGenres: function(){
        for(let i = 1; i < 2; i++){
            // personalMovDB.genres[i - 1] = prompt('Ваш любимыи жанр под номером ' + i);
            // if (personalMovDB.genres[i - 1] == '' || personalMovDB.genres[i - 1] == null){
            //     alert('Введите корректные данные');
            //     i--;
            //     }
            let genres = prompt(`Введите ваши любимые жанры через запятую`).toLowerCase();
            if (genres === '' || genres === null){
                alert('Введите корректные данные');
                i--;
                }else{
                    personalMovDB.genres = genres.split(', ');
                    personalMovDB.genres.sort();
                }
        }
        personalMovDB.genres.forEach((item, i) => {
            console.log(`Любимыи жанр ${i + 1} - это ${item} `);
        });

    },
    toggleVisibleMyDB: function(){
       if (personalMovDB.privat){
           personalMovDB.privat = false;
       } else {
           personalMovDB.privat = true;
       }
    }
    
};


//personalMovDB.start();
//personalMovDB.detectPersonalLevel();
//personalMovDB.rememberMyFilms();
personalMovDB.writeYourGenres();
//personalMovDB.toggleVisibleMyDB();
//personalMovDB.showMyDB(personalMovDB.privat);
