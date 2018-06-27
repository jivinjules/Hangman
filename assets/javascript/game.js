//Variables
//Letters to be guessed
var letter = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

//words for computer to randomly display
var beachWords = [
        {
                word: "ocean",
                image: "assets/images/ocean.jpg"
        },
        {
                word: "sand",
                image: "assets/images/sand.jpg"

        },
        {
                word: "palmtree",
                image: "assets/images/palm-tree.jpg"

        },
        {
                word: "coconut",
                image: "assets/images/coconut.jpg"

        },
        {
                word: "towel",
                image: "assets/images/towel.jpg"
        },
        {
                word: "surfboard",
                image: "assets/images/surfboard.jpg"

        },
        {
                word: "hawaii",
                image: "assets/images/hawaii.jpg"
        },
        {
                word: "seashell",
                image: "assets/images/seashell.jpg"

        },
        {
                word: "sandcastle",
                image: "assets/images/sandcastle.jpg"

        },
        {
                word: "sailboat",
                image: "assets/images/sailboat.jpg"

        }
];
for (var i = 0; i < beachWords.length; i++) {
        console.log(beachWords[i].word);
      }
      console.log("---------");

var startGame = (true); //starts game
var endGame = (false); //turn to true to end game
var winCount= (0); //keeps track of number of wins
var guessesLeft = (0); //# of guesses left (max 12)
var maxGuesses = (12);
var lettersGuessed = []; //holds the letters guessed
var underscore = "_ ";
var win = true; // alert win or lose message
var winMessage = ("Winner! Winner! Chicken Dinner!");
var loseMessage = ("You lose! Better luck next time!")


// document.getElementById("words").innerHTML = beachWords;
// document.getElementById("wins").innerHTML = winCount;
// document.getElementById("guessesleft").innerHTML = guessesLeft;
// document.getElementById("lettersguessed").innerHTML = letter[];

//User presses a key to start the game
document.onkeyup = function (event) {
       var startGame = event.key;
       console.log(event.key);
                           
        }
        

//Computer randomly generates a word from wordbank
var randomWord = beachWords[Math.floor(Math.random() * beachWords.length)].word;
console.log("This is my random word " + randomWord);
document.getElementById("#words").innerHTML = beachWords.word;

//Computer turns chosen word into underscores with spaces in between
function wordToUnderscore(beachWords) 
{
        var underscore = "";
      //  for (i = 0; i < beachWords[word].length; i++); 
                
}

//user guesses a letter
var letter = letter.toLowerCase();

//if letter is correct, it shows on screen 

//else letter is incorrect, counter guess goes up by one and letter displays on screen in guessedLetters


//message displays on screen. Win counter goes up by one if win and changes to image of correct word.
if (win) {
        alert(winMessage);

}

else {
        alert(loseMessage);
}

//computer randomly chooses a new word

