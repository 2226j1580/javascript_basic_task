
var player1;
var player2;
var player;
var showPlayerInfo;
var showPlayerPlace;
var showPlayerHealth;

player1 = {
    name: "Kandra",
    place: "The Dungeon of Doom",
    health: 50
};

player2 = {
    name: "Dax",
    place: "The Old Library",
    health: 40
};

showPlayerInfo = function () {
    console.log(player.name);
    console.log("------------------------------");
    console.log(player.name + " is in " + player.place);
    console.log(player.name + " has health " + player.health);
    console.log("------------------------------");
    console.log("");
};

showPlayerPlace = function () {
    console.log(player.name + " is in " + player.place);
};

showPlayerHealth = function () {
    console.log(player.name + " has health " + player.health);
};

player = player1;
showPlayerInfo();

player = player2;
showPlayerInfo();

function displayPlayerPlace() {
    console.log(player.name + " is in " + player.place);
}

showPlayerInfo = function () {
    console.log(player.name);
    console.log("------------------------------");
    displayPlayerPlace();
    displayPlayerHealth();
    console.log("------------------------------");
    console.log("");
};


player = player1;
showPlayerInfo();

player = player2;
showPlayerInfo();
