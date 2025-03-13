"use strict";

const numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');

let personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

const lastMovie1 = prompt('Один из последних просмотренных фильмов?', ''),
    lastMovieGrade1 = prompt('На сколько оцените его?', ''),
    lastMovie2 = prompt('Один из последних просмотренных фильмов?', ''),
    lastMovieGrade2 = prompt('На сколько оцените его?', '');

personalMovieDB.movies[lastMovie1] = lastMovieGrade1;
personalMovieDB.movies[lastMovie2] = lastMovieGrade2;

console.log(personalMovieDB);