//Define dictionary array
var words = ["Misa", "Light", "Apples", 
 "Rem", "Ryuk", "Kira", "Watari", "Ryuzaki"];
var gameStarted = false; 
//Define varibles for counting number of wins and number of losses
var winCount = 0;
var lossCount = 0;
var guessedLetters, selectedWord, allottedNumberOfGuesses;
var wordObjArr = []
function populateDictionaryObj() {
	for(var i = 0; i < words.length;i++) {
		var node = {}
		node["word"] = words[i];
		node["src"] = "./assets/img/" + i + ".jpg";
		wordObjArr.push(node);
	}
}
function chooseWord() {
	selectedWord = dictionary[Math.floor(Math.random() * dictionary.length)];
	console.log("Selected Word: " + selectedWord["word"]);
}
function removeWordSpaces() {
	var wordDiv = document.getElementById("word");
	while (wordDiv.hasChildNodes()) {
		wordDiv.removeChild(wordDiv.firstChild);
	}
}
function generateWordSpaces() {
	var wordDiv = document.getElementById("word");
	var randomWord = selectedWord["word"];
	for(var i = 0; randomWord.length; i++) {
		var newChildDiv = document.createElement("div");
		var id = "letter" + i;
		newChildDiv.setAttribute("id", id);
		newChildDiv.setAttribute("class", "letter-space");
		newChildDiv.setAttribute("letter", randomWord[i]);
		wordDiv.appendChild(newChildDiv);
	}
}
function populateLetter(letter, index) {

}
function startGame() {
	//Reinitialized guessed letters array if it has something in it.
	guessedLetters = [];
	//Empty selectedWord object
	selectedWord = {};
	//reset variable that keeps track of how many guesses user has made to 15
	allottedNumberOfGuesses = 15;
	//Grab Another word from array
	chooseWord();
	//Clear out word spaces
	removeWordSpaces()
	//Generate Spaces for word
	generateWordSpaces()
}
function checkLetter(letterGuessed) {
	var isCorrectGuess = false;
	for(var index = 0; index < selectedWord["word"].length; index++) {

	}
	if(guessedLetters.indexOf(letterGuessed) === -1) {
		guessedLetters.push(letterGuessed);
	}
	return isCorrectGuess;
}
function isLetter(letter) {
	var code = letter.charCodeAt(0)
	return (code >= 65 && code <= 90) || (code >= 97 && code <= 122)	
}
document.onkeyup = function(event) {
	//If user presses any key then start game
	if(!gameStarted) {
		gameStarted = true;
		populateDictionaryObj();
		startGame();
	}
	
	if(isLetter(event.key)) {
		if(guessedLetters.indexOf(event.key) === -1) {
			if(checkLetter(event.key)) {
				
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
