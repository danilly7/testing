const movies = require("./data");

//------------------------------------------------------------------- Exercise 1 --------------------------------------------------------------------------

const getAllDirectors = array => array.map(a => a.director);
console.log("EXERCICE 1: Directores ->", getAllDirectors(movies));

//------------------------------------------------------------------- Exercise 2 --------------------------------------------------------------------------

const getMoviesFromDirector = (array, director) => array.filter(a => a.director === director);
console.log("EXERCISE 2: movies del director Steven Spielberg →", getMoviesFromDirector(movies, "Steven Spielberg"));

//------------------------------------------------------------------- Exercise 3 --------------------------------------------------------------------------

function moviesAverageOfDirector(array, director) {
  let moviesList = array.filter(a => a.director === director);
  const sumaScores = moviesList.reduce((acc, movie) => {
    return acc += movie.score;
  }, 0);
  let result = parseFloat((sumaScores / moviesList.length).toFixed(2));
  return result;
}

console.log("EXERCISE 3: la nota media del director Steven Spielberg →", moviesAverageOfDirector(movies, "Steven Spielberg"));

//------------------------------------------------------------------- Exercise 4 --------------------------------------------------------------------------

const orderAlphabetically = array =>
  array.map(a => a.title)
    .sort((a, b) => a < b ? -1 : 1)
    .slice(0, 20)

console.log("EXERCISE 4: movies ordenadas alfabeticamente y luego las 20 primeras que aparecen →", orderAlphabetically(movies));

//------------------------------------------------------------------- Exercise 5 --------------------------------------------------------------------------

const orderByYear = array => {
  let result = array.slice().sort((a, b) => {
    if (a.year < b.year) return -1;
    if (a.year > b.year) return 1;
    return a.title < b.title ? -1 : 1;
  })
  return result;
}

console.log("EXERCISE 5: movies ordenadas por año →", orderByYear(movies));

//------------------------------------------------------------------- Exercise 6 --------------------------------------------------------------------------

const moviesAverageByCategory = (array, genre) => {
  let genreMovies = array.filter(movie => movie.genre.includes(genre));
  let sumaScoresGenre = genreMovies.reduce((acc, movie) => {
    return acc += movie.score;
  }, 0);
  let result = parseFloat((sumaScoresGenre / genreMovies.length).toFixed(2));
  return result;
}

console.log("EXERCISE 6: la nota media del género Comedy →", moviesAverageByCategory(movies, "Comedy"));

//------------------------------------------------------------------- Exercise 7 --------------------------------------------------------------------------

const convertToMinutes = (duration) => {
  if (typeof duration !== 'string') return 0;

  const regexHoursOnly = /^(\d+)h$/;
  const regexHoursAndMinutes = /(?:(\d+)h)?\s*(\d+)?m?/;

  if (regexHoursOnly.test(duration)) {
    const match = duration.match(regexHoursOnly);
    const hours = parseInt(match[1]);
    return hours * 60;
  }

  if (regexHoursAndMinutes.test(duration)) {
    const match = duration.match(regexHoursAndMinutes);
    const hours = parseInt(match[1]);
    const minutes = parseInt(match[2]);
    return hours * 60 + minutes;
  }

  return 0;
};

const hoursToMinutes = array => {
  return array.map(a => {
    const newDuration = convertToMinutes(a.duration);
    return { ...a, duration: newDuration }
  });
}

console.log("EXERCISE 7: la clase duration puesta en minutos", hoursToMinutes(movies));

//------------------------------------------------------------------- Exercise 8 --------------------------------------------------------------------------

// function bestFilmOfYear() {

// }

const bestFilmOfYear = (array, yearSelected) => {
  let moviesSameYear = array.filter(a => a.year === yearSelected);
  if (moviesSameYear.length === 0) return [];

  let bestMovie = moviesSameYear.slice().sort((a, b) => b.score - a.score);
  return [bestMovie[0]];
}

console.log("EXERCISE 8: year 2001 mejor peli según el score →", bestFilmOfYear(movies, 2001));


//==========================================================================================================================================================
//The following is required to make unit tests work. Environment setup. Do not modify the below code.

if (typeof module !== 'undefined') {
  module.exports = {
    getAllDirectors,
    getMoviesFromDirector,
    moviesAverageOfDirector,
    orderAlphabetically,
    orderByYear,
    moviesAverageByCategory,
    hoursToMinutes,
    bestFilmOfYear,
  };
}
