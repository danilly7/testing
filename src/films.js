const movies = require("./data");

//------------------------------------------------------------------- Exercise 1 --------------------------------------------------------------------------

const getAllDirectors = array => array.map(a => a.director);
console.log("EXERCICE 1 ->", getAllDirectors(movies));

//------------------------------------------------------------------- Exercise 2 --------------------------------------------------------------------------

const getMoviesFromDirector = (array, director) => array.filter(a => a.director === director);
console.log("EXERCISE 2 director: Steven Spielberg →", getMoviesFromDirector(movies, "Steven Spielberg"));

//------------------------------------------------------------------- Exercise 3 --------------------------------------------------------------------------

function moviesAverageOfDirector(array, director) {
  let moviesList = array.filter(a => a.director === director);

  const sumaScores = moviesList.reduce((acc, movie) => {
    return acc += movie.score;
  }, 0);

  let result = parseFloat((sumaScores / moviesList.length).toFixed(2));
  return result;
}

console.log("EXERCISE 3 media director: Steven Spielberg →", moviesAverageOfDirector(movies, "Steven Spielberg"));

//------------------------------------------------------------------- Exercise 4 --------------------------------------------------------------------------

const orderAlphabetically = array =>
  array.map(a => a.title)
    .sort((a, b) => a < b ? -1 : 1)
    .slice(0, 20)

console.log("EXERCISE 4:", orderAlphabetically(movies));

//------------------------------------------------------------------- Exercise 5 --------------------------------------------------------------------------

const orderByYear = array => {
  let result = array.slice().sort((a, b) => {
    if (a.year < b.year) return -1;
    if (a.year > b.year) return 1;
    return a.title < b.title ? -1 : 1;
  })
  return result;
}

//console.log("EXERCISE 5:", orderByYear(movies));

//------------------------------------------------------------------- Exercise 6 --------------------------------------------------------------------------
function moviesAverageByCategory() {

}

//------------------------------------------------------------------- Exercise 7 --------------------------------------------------------------------------
function hoursToMinutes() {

}

//------------------------------------------------------------------- Exercise 8 --------------------------------------------------------------------------
function bestFilmOfYear() {

}



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
