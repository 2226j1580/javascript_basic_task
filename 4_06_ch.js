
var sayHello;

sayHello = function () {
    console.log("Hello World!");
};

sayHello(); 
sayHello(); 
sayHello(); 


sayHello = function () {
    console.log("Greetings Earthlings!");
};

sayHello(); 

sayHello = function () {
    console.log("Hello\nWorld!");
};

sayHello(); 

var printLetters = function () {
    var message = "Hello World!";
    for (var i = 0; i < message.length; i++) {
        console.log(message[i]);
    }
};

printLetters(); 
