//Define dictionary array
var wordArray = ["Shinigami", "Misa Amane", "Light Yagami", "Apples", 
"Death Note", "Matsuda", "Near", "Mello", "Rem", "Gellus", "Ryuk", "Kira", "Watari"];
//Define empty guessed letters array;
var guessedLetters = [];
//Define selectedWord variable
var selectedWord = "";
//Define number of guesses variable and set it to 15
var allotedNumberOfGuesses = 15;
//Define boolean variable that determines if game has started
var gameStarted = false; 
function chooseWord() {
	selectedWord = wordArray[Math.floor(Math.random() * wordArray.length)];
	console.log("Selected Word: " + selectedWord);
}
function generateWordSpaces() {
	
}
function startGame() {
	//Clear out guessed letters array
	guessedLetters = [];
	//Clear variable that keeps track of how many guesses user has made
	allotedNumberOfGuesses = 15;
	//Grab Another word from array
	chooseWord();
}
function checkLetter(letterGuessed) {
	//Define empty array that will populate indexes where letter typed is found in word
	chooseWord()
	var foundIndexArray = [];
	//Strip out any non-alpha numeric characters (like spaces or special characters)
	var sanitizedSelectedWord = selectedWord.toLowerCase().replace(/[^a-zA-Z ]/g, "");
	for(var index = 0; index < sanitizedSelectedWord.length; index++) {
		if(letterGuessed.toLowerCase() === sanitizedSelectedWord[index]) {
			foundIndexArray.pushed(index);
		}
	}
	guessedLetters.push(letterGuessed);
	console.log(guessedLetters)
	return foundIndexArray;
}
//If user presses any key THEN

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
