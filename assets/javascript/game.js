//Variables
//Letters to be guessed

//words for computer to randomly display
var beachWords = ["ocean", "sand", "palmtree", "coconut", "towel", "surfboard", "hawaii", "seashell", "sandcastle", "sailboat"];

for (var i = 0; i < beachWords.length; i++) {
        console.log(beachWords[i]);
}
console.log("---------");

var startGame = false; //starts game
var endGame = false; //turn to true to end game
var guesses; //# of guesses  (max 12)
var lettersGuessed = []; //holds the letters guessed
var winCount = 0; //keeps track of number of wins
var randomWord = beachWords[Math.floor(Math.random() * beachWords.length)];
var underscore = [];
var winMessage = ("Winner! Winner! Chicken Dinner!");
var loseMessage = ("You lose! Better luck next time!")

document.onkeyup = function (event) {
        var userGuess = event.key;
        console.log(event.key);
        lettersGuessed.push(userGuess); //Used to determine what user has selected
        startGame = true;
        guesses = 12;
        document.getElementById("guessesleft").innerHTML = guesses;
        document.getElementById("lettersguessed").innerHTML = lettersGuessed;
        console.log("This is my random word " + randomWord);

        for (var i = 0; i < randomWord.length; i++) {
                underscore[i] = "_  ";
               // console.log(randomWord);

                document.getElementById("words").innerHTML = underscore.join("");

        }

        //user guesses a letter
        // Rudolph.indexOf(t) == -1 This help for me
        
        if (randomWord.indexOf(userGuess) == -1) {
                //decrement guesses
                guesses--; 
                document.getElementById("guessesleft").innerHTML = guesses;

        } else {
                for (let i = 0; i < randomWord.length; i++) {
                        if (randomWord.charAt === userGuess.toLowerCase) {
                                underscore[i] = userGuess; 
                        }

                } //for loop ends
                console.log(randomWord + userGuess + guesses);

        }
}


//else letter is incorrect, counter guess goes up by one and letter displays on screen in guessedLetters


//message displays on screen. Win counter goes up by one if win and changes to image of correct word.
// if (win) {
//         alert(winMessage);

// }

// else {
//         alert(loseMessage);
// }

        //computer randomly chooses a new word

