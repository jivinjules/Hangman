//Variables
//Letters to be guessed
var letters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

//words for computer to randomly display
var beachWords = ["ocean", "sand", "coconut", "sunscreen", "palm tree", "towel", "tropical", "surfboard", "Hawaii", "seashell", "sandcastle", "sailboat"];

//Messages
var winningMessage = "Winner, Winner, Chicken Dinner!";
var losingMessage = "You lose! Better luck next time!"

//User presses a key to start the game
document.onkeyup = function(startGame) {
        var startGame = event.key;
        console.log(startGame);
}

//Computer randomly generates a word from wordbank
var beachWords = beachWords[Math.floor(Math.random() * beachwords.length)];

//user guesses a letter

//if letter is correct, it shows on screen

//else letter is incorrect, counter guess goes down by one

//if word is correctly guessed, message on screen "YOU WIN!"

//else user runs out of guesses, message on screen winningMessage on Screen

//If word is correctly guessed, win counter goes up by one and image of word appears on screen

//computer randomly chooses a new word

