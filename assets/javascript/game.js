//Define dictionary array
var words = ["misa", "light", "apples", 
 "rem", "ryuk", "kira", "watari", "ryuzaki", "chips", "weddy", "aiber", "near", "matsuda"];
var gameStarted = false; 
//Define varibles for counting number of wins and number of losses
var winCount = 0;
var lossCount = 0;
var guessedLetters;
var allottedNumberOfGuesses;
var selectedWord;
var wordObjArr = [];
var guessedCorrectlyCount;
function populateDictionaryObj() {
	if(wordObjArr.length > 0) {
		wordObjArr = [];
	}
	for(var i = 0; i < words.length;i++) {
		var node = {}
		node["word"] = words[i];
		node["src"] = "./assets/img/" + words[i] + ".jpg";
		wordObjArr.push(node);
	}
}
function chooseWord() {
	selectedWord = wordObjArr[Math.floor(Math.random() * wordObjArr.length)];
	console.log("Selected Word: " + selectedWord["word"]);
}
function removeWordSpaces() {
	var wordDiv = document.getElementById("word");
	while (wordDiv.hasChildNodes()) {
		wordDiv.removeChild(wordDiv.firstChild);
	}
}
function removePicture() {
	var pictureDiv = document.getElementById("picture");
	while (pictureDiv.hasChildNodes()) {
		pictureDiv.removeChild(pictureDiv.firstChild);
	}
}
function generateWordSpaces() {
	var wordDiv = document.getElementById("word");
	var randomWord = selectedWord["word"];
	for(var i = 0; i < randomWord.length; i++) {
		var newChildDiv = document.createElement("div");
		var id = "letter" + i;
		newChildDiv.setAttribute("id", id);
		newChildDiv.setAttribute("class", "letter-space");
		wordDiv.appendChild(newChildDiv);
	}
}
function populateLetter(letter, index) {
	document.getElementById("letter" + index).innerText = letter;
}
function startGame() {
	//Reinitialized guessed letters array if it has something in it.
	guessedLetters = [];
	//Empty selectedWord object
	selectedWord = {};
	//reset variable that keeps track of how many guesses user has made to 15
	allottedNumberOfGuesses = 15;
	populateRemainingGuesses();
	//Grab Another word from array
	chooseWord();
	//Clear out word spaces
	removeWordSpaces()
	//Remove picture
	removePicture();
	//Clear letters guessed
	document.getElementById("lettersGuessed").innerText = "";
	//Generate Spaces for word
	generateWordSpaces();
	//set guessed correctly count to 0
	guessedCorrectlyCount = 0;
}
function populateRemainingGuesses() {
	document.getElementById("remainingGuessCount").innerText = allottedNumberOfGuesses;
}
function updateWinLoseCount() {
	document.getElementById("numberOfWinsLoss").innerText = winCount;
}
function showPicture() {
	var pictureDiv = document.getElementById("picture");
	var image = document.createElement("img");
	image.setAttribute("src", selectedWord["src"]);
	image.setAttribute("class", "img-responsive");
	pictureDiv.appendChild(image);
}
function checkLetter(letterGuessed) {
	var isCorrectGuess = false;
	var wordLower = selectedWord["word"].toLowerCase();
	for(var index = 0; index < wordLower.length; index++) {
		if(letterGuessed === wordLower[index]) {
			populateLetter(letterGuessed, index);
			isCorrectGuess = true;
			guessedCorrectlyCount++;
		}

	}
	if(checkGuessedLettersArray(letterGuessed)) {
		guessedLetters.push(letterGuessed);
		updateLettersGuessed();
	}
	return isCorrectGuess;
}
function updateLettersGuessed() {
	var lettersGuessedDiv = document.getElementById("lettersGuessed");
	lettersGuessedDiv.innerText = ""
	for(var i = 0; i < guessedLetters.length; i++) {
		lettersGuessedDiv.innerHTML += "&nbsp;" + guessedLetters[i];
	}
}
function isLetter(code) {
	return (code >= 65 && code <= 90) || (code >= 97 && code <= 122);	
}
function checkGuessedLettersArray(letter) {
	return guessedLetters.indexOf(letter) === -1 && guessedLetters.indexOf(letter.toUpperCase()) === -1;
}
document.onkeyup = function(event) {
	//If user presses any key then start game
	if(!gameStarted) {
		gameStarted = true;
		populateDictionaryObj();
		startGame();
	}
	//Define variables to store letter and key code
	if(allottedNumberOfGuesses > 0 && gameStarted === true) {
		var letter = String.fromCharCode(event.which).toLowerCase();
		var keyCode = event.which;
		if(isLetter(keyCode) && checkGuessedLettersArray(letter)) {
			if(checkLetter(letter)) {
				if(guessedCorrectlyCount === selectedWord["word"].length) {
					winCount++;
					updateWinLoseCount();
					showPicture();
					//startGame();
					gameStarted = false;
				}
			}
			else {
				allottedNumberOfGuesses--;
				populateRemainingGuesses()
				if(allottedNumberOfGuesses === 0) {
					//increment loss counter
					lossCount++;
					updateWinLoseCount();
					//start a new game
					//startGame();
					gameStarted = false;
					
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
