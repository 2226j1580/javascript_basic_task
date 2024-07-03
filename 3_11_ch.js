
var player1, player2;

player1 = {
    name: "Max",
    score: 0
};


console.log(player1.name + " has scored " + player1.score);

player1.score = player1.score + 50;

console.log(player1.name + " has scored " + player1.score);

player1.score = player1.score * 1.1;

console.log(player1.name + "'s score after 10% increase: " + player1.score);

player2 = {
    name: "rohith",
    score: 75
};

console.log(player2.name + " has scored " + player2.score);

var totalScore = player1.score + player2.score;
console.log("Total score of " + player1.name + " and " + player2.name + " is " + totalScore);

 
