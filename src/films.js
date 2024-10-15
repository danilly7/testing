const movies = require("./data");

// Exercise 1: ------------------------------------------------------------------------------------------------------------ Get the array of all directors

const getAllDirectors = array => array.map(a => a.director);
console.log("EXERCICE 1 ->", getAllDirectors(movies));

// Exercise 2: -------------------------------------------------------------------------------------------------------- Get the films of a certain director

const getMoviesFromDirector = (array, director) => array.filter(a => a.director === director);
console.log("EXERCISE 2 director: Steven Spielberg →", getMoviesFromDirector(movies, "Steven Spielberg"));

// Exercise 3: ------------------------------------------------------------------------------------- Calculate the average of the films of a given director

function moviesAverageOfDirector(array, director) {
  let moviesList = array.filter(a => a.director === director);
  let moviesNumber = moviesList.length;

  const sumaScores = moviesList.reduce((acc, movie) => {
    return acc += movie.score;
  }, 0);

  let result = parseFloat((sumaScores / moviesNumber).toFixed(2));
  return result;
}

console.log("EXERCISE 3 media director: Steven Spielberg →", moviesAverageOfDirector(movies, "Steven Spielberg"));

// Exercise 4: ----------------------------------------------------------------------------------------------------------------- Alphabetic order by title 
function orderAlphabetically(array) {

}

// Exercise 5: Order by year, ascending
function orderByYear() {

}

// Exercise 6: Calculate the average of the movies in a category
function moviesAverageByCategory() {

}

// Exercise 7: Modify the duration of movies to minutes
function hoursToMinutes() {

}

// Exercise 8: Get the best film of a year
function bestFilmOfYear() {

}



// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
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
