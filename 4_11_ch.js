var movie1;
var movie2;
var movie3;
var movie;
var showMovieInfo;

movie1 = {
    title: "Inside Out",
    actors: "Amy Poehler, Bill Hader",
    directors: "Pete Doctor, Ronaldo Del Carmen"
};

movie2 = {
    title: "Spectre",
    actors: "Daniel Craig, Christoph Waltz",
    directors: "Sam Mendes"
};

movie3 = {
    title: "Star Wars: Episode VII - The Force Awakens",
    actors: "Harrison Ford, Mark Hamill, Carrie Fisher",
    directors: "J.J.Abrams"
};

showMovieInfo = function () {
    console.log("Movie information for " + movie.title);
    console.log("------------------------------");
    console.log("Actors: " + movie.actors);
    console.log("Directors: " + movie.directors);
    console.log("------------------------------");
};

movie = movie1;
showMovieInfo();

movie = movie2;
showMovieInfo();

movie = movie3;
showMovieInfo();

var quizQuestion1 = {
    question: "What is the capital of France?",
    options: ["London", "Paris", "Berlin", "Rome"],
    answer: "Paris"
};

var quizQuestion2 = {
    question: "Who wrote 'Hamlet'?",
    options: ["William Shakespeare", "Charles Dickens", "Jane Austen", "F. Scott Fitzgerald"],
    answer: "William Shakespeare"
};

var quizQuestion3 = {
    question: "Which planet is known as the Red Planet?",
    options: ["Earth", "Mars", "Venus", "Jupiter"],
    answer: "Mars"
};

var showQuizQuestion = function (questionObj) {
    console.log(questionObj.question);
    console.log("------------------------------");
    for (var i = 0; i < questionObj.options.length; i++) {
        console.log("(" + (i + 1) + ") " + questionObj.options[i]);
    }
    console.log("------------------------------");
    console.log("Answer: " + questionObj.answer);
    console.log("\n");
};

showQuizQuestion(quizQuestion1);
showQuizQuestion(quizQuestion2);
showQuizQuestion(quizQuestion3);
