var showMovieInfo;

showMovieInfo = function () {
  console.log("Movie information for " + movie.title);
  console.log("------------------------------");
  console.log("Actors: " + movie.actors);
  console.log("Directors: " + movie.directors);
  console.log("------------------------------");
};
var movie;
movie = {};
movie.title = "Inception";
movie.actors = ["Leonardo DiCaprio","Ellen Page"];
movie.directors = ["Christopher Nolan"];

console.log(movie);
showMovieInfo();
