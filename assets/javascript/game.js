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
var guesses = 12; //# of guesses  (max 12)
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
        guesses--;
        document.getElementById("guessesleft").innerHTML = guesses;
        document.getElementById("lettersguessed").innerHTML = lettersGuessed;
        console.log("This is my random word " + randomWord);

        for (var i = 0; i < randomWord.length; i++) {
                underscore[i] = "_  ";
                // console.log(randomWord);
        }

        //user guesses a letter
        // Rudolph.indexOf(t) == -1 This help for me

        if (randomWord.indexOf(userGuess) == -1) {
                //decrement guesses

                //  guesses--;
                document.getElementById("guessesleft").innerHTML = guesses;


        } else {
                for (let i = 0; i < randomWord.length; i++) {
                        console.log(randomWord[i]);
                        if (userGuess === randomWord[i]) {
                                //    console.log("Troubleshooting my if statement")

                                underscore[i] = userGuess;
                                console.log(underscore[i]);
                                console.log(underscore);

                                document.getElementById("words").innerHTML = underscore.join("");
                                // console.log(randomWord.charAt() + userGuess);

                        } //for loop ends
                        //        console.log(randomWord + userGuess + guesses);

                }

        }
}
//If user wins, win count goes up by one, and the win Message comes on screen
if (randomWord === underscore) {
        winCount++;
        alert(winMessage);
}

//If guesses gets to zero, the lose message appears on screen
if (guesses === 0) {
        alert(loseMessage);
}

