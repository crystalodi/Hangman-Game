//Define dictionary array
var wordArray = ["Shinigami", "Misa Amane", "Light Yagami", "Apples", 
"Death Note", "Matsuda", "Near", "Mello", "Rem", "Gellus", "Ryuk", "Kira", "Watari"];
var gameStarted = false; 
//Define varibles for counting number of wins and number of losses
var winCount = 0;
var lossCount = 0;
var guessedLetters, selectedWord, allottedNumberOfGuesses;
function chooseWord() {
	selectedWord = wordArray[Math.floor(Math.random() * wordArray.length)];
	console.log("Selected Word: " + selectedWord);
}
function generateWordSpaces() {
	
}
function populateLetter(letter) {

}
function startGame() {
	//Reinitialized guessed letters array if it has something in it.
	guessedLetters = [];
	//Empty selectedWord variable
	selectedWord = "";
	//reset variable that keeps track of how many guesses user has made to 15
	allottedNumberOfGuesses = 15;
	//Grab Another word from array
	chooseWord();
	//Generate Spaces for word
	generateWordSpaces()
}
function checkLetter(letterGuessed) {
	//Define empty array that will populate indexes where letter typed is found in word
	var foundIndexArray = [];
	//Strip out any non-alpha numeric characters
	var sanitizedSelectedWord = selectedWord.toLowerCase().replace(/[^a-zA-Z]/g, "");
	for(var index = 0; index < sanitizedSelectedWord.length; index++) {
		if(letterGuessed.toLowerCase() === sanitizedSelectedWord[index]) {
			foundIndexArray.push(index);
		}
	}
	if(guessedLetters.indexOf(letterGuessed) === -1) {
		guessedLetters.push(letterGuessed);
	}
	console.log(guessedLetters);
	console.log(foundIndexArray);
	return foundIndexArray;
}
function isLetter(letter) {
	var code = letter.charCodeAt(0)
	return (code >= 65 && code <= 90) || (code >= 97 && code <= 122)	
}
document.onkeyup = function(event) {
	//If user presses any key then start game
	if(!gameStarted) {
		gameStarted = true;
		startGame();
	}
	if(isLetter(event.key) && guessedLetters.indexOf(event.key) === -1) {
		var letterArray = checkLetter(event.key);
		if(letterArray.length > 0) {
			
		}
		else {
			allottedNumberOfGuesses--;
			if(allottedNumberOfGuesses === 0) {
				//start a new game
				startGame();
				//increment loss counter
				lossCount++;
			}
		}
	}
}


    //Game Starts

        //Random word chosen from dictionary array (will be a function)

        //Generate html for the number of blank spaces that words will fill (will be a function)

            //IF User presses a letter key that hasn't been guessed

                //If key pressed is one of the letters in the selected word (will be a function)
                    //Add letter to guessed letters array and display in section for guessed letters
                    //Populate letter in correct spot(s) on game space where word is supposed to be (will be a function)
                    //IF all letters have been correctly guessed
                        //increment win counter
                        //start new game (will be a function)
                        

                //If key pressed is letter that is not in random word THEN
                    //Decrement number of guesses variable by 1
                    //Add letter to guessed letters array
                    //If user has run out of guesses
                        //increment loss counter
                        //start new game (will be a function)
                    
            //ELSE 
                //do nothing (probably won't go in code)
