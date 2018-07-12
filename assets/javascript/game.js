//Variables

var beachWords = ["ocean", "sand", "palmtree", "coconut", "towel", "surfboard", "hawaii", "seashell", "sandcastle", "sailboat"];
var chosenWord = "";
var lettersInChosenWord = [];
var numberOfBlanks = 0;
var blanksAndUnderscores = [];
var wrongGuesses = [];
var letterGuessed = "";
var winCount = 0;
var lossCount = 0;
var numberOfGuesses = 10;

// When game is started, the computer chooses a word from the beachwords list
//The word is split apart
//Each letter is replaced by a blank
//The word is looped through and replaced with an underscore
function startGame() {
        numberOfGuesses = 10;
        chosenWord = beachWords[Math.floor(Math.random() * beachWords.length)];
        lettersInChosenWord = chosenWord.split("");
        numberOfBlanks = lettersInChosenWord.length;
        blanksAndUnderscores = [];
        wrongGuesses = [];
        for (var i = 0; i < numberOfBlanks; i++) {
                blanksAndUnderscores.push("_ ");
        }
        //wrong guesses are added to the index
        document.getElementById("lettersguessed").innerHTML = wrongGuesses.join(" ");
        //number of guesses is added to the html
        document.getElementById("guessesleft").innerHTML = numberOfGuesses;
        //word as underscore is updated to html
        document.getElementById("words").innerHTML = blanksAndUnderscores.join(" ");
}

//function to check whether the letter guessed is in the word or not
//If letter is in word, it is pushed into the blanks and underscores
//If letter is not in word, it is pushed to wrong Guesses
//The number of guesses decrements by one
function checksLetters(letter) {
        var letterInWord = false;
        for (var i = 0; i < numberOfBlanks; i++) {
                if (chosenWord[i] === letter) {
                        letterInWord = true;
                }
        }
        if (letterInWord) {
                for (var j = 0; j < numberOfBlanks; j++) {
                        if (chosenWord[j] === letter) {
                                blanksAndUnderscores[j] = letter;
                        }
                }
        } else {
                wrongGuesses.push(letter);
                numberOfGuesses--;
        }
}
//All html is updated
function roundComplete() {
        document.getElementById("guessesleft").innerHTML = numberOfGuesses;
        document.getElementById("words").innerHTML = blanksAndUnderscores.join(" ");
        document.getElementById("lettersguessed").innerHTML = wrongGuesses.join(" ");

        if (lettersInChosenWord.toString() === blanksAndUnderscores.toString()) {
                winCount++;
                if (chosenWord === "palmtree") {
                        document.getElementById('beachpic').src = 'assets/images/palm-tree.jpg';
                };
               if (chosenWord === "hawaii") {
                        document.getElementById('beachpic').src = 'assets/images/Hawaii.jpg';
                };
               if (chosenWord === "coconut") {
                        document.getElementById('beachpic').src = 'assets/images/coconut.jpeg';
                };
                if (chosenWord === "sailboat") {
                        document.getElementById('beachpic').src = 'assets/images/sailboat.jpg';
                };
                if (chosenWord === "seashell") {
                        document.getElementById('beachpic').src = 'assets/images/seashell.jpg';
                }
                if (chosenWord === "surfboard") {
                        document.getElementById('beachpic').src = 'assets/images/surfboard.jpg';
                }
                if (chosenWord === "sandcastle") {
                        document.getElementById('beachpic').src = 'assets/images/sandcastle.jpg';
                }
                if (chosenWord === "sand") {
                        document.getElementById('beachpic').src = 'assets/images/sand.jpg';
                }
                if (chosenWord === "ocean") {
                        document.getElementById('beachpic').src = 'assets/images/beach.jpg';
                }
                if (chosenWord === "towel") {
                        document.getElementById('beachpic').src = 'assets/images/towel.jpg';
                }
                alert(chosenWord);
                alert("Winner! Winner! Chicken Dinner!");
                document.getElementById("wins").innerHTML = winCount;
                startGame();
                
        }
        else if (numberOfGuesses === 0) {
                lossCount++;
                alert(chosenWord);
                alert("You Lose! Better Luck Next Time!");
                document.getElementById("losses").innerHTML = lossCount;
                startGame();
        }

}

startGame();
document.onkeyup = function(event) {
        letterGuessed = String.fromCharCode(event.which).toLowerCase();
        checksLetters(letterGuessed);
        roundComplete();
};