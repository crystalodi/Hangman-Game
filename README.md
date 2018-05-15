# Death Note Hangman Game

## About
This hangman game will allow users to guess the names, items, and concepts associated with the popular anime series Death Note. 

## How to use
To Start the game, press the any key. Blank spaces for the characters in the selected word will appear in the center of the screen. Users will have 15 tries to guess the word correctly using a keyboard. Non letter characters do not count against the number of guesses allotted.

Each letter guessed will be displayed under the "Letters Already Guessed" panel.

If the user guesses a letter that's in the chosen word, the letter will appear in the space(s) in the "Game Area" panel. 

If the user guesses a letter incorrectly, then the number of guesses will be decremented by one and displayed to the user in the "Number of Guesses" panel.

If the user selects an answer or leaves the question blank after the timer reaches zero, the user is taken to a page that shows whether or not the question was answered correctly, a youtube video clip related to the question, the correct answer, and a button to take go to the next question.
![Wrong Answer](./assets/img/quizQuestion_AnswerWrong.png "Quiz Question - Wrong Answer")
![Right Answer](./assets/img/quizQuestion_AnswerRight.png "Quiz Question - Right Answer")

After all 12 questions are shown to the user, a results screen displays how many questions were answered correctly, incorrectly, or left blank and a button to retake the quiz.
![Results Page](./assets/img/resultspage_sc.png "Results Page")

## Code
Each word is stored in an array of objects containing the word and image associated with the word. Each time the user presses a key to start a new round, a random integer between 0 and the length of the array - 1 and is used to select the word from the array.
<!-- Add screenshot or code snippet--->

For each key press that is a letter that hasn't been guessed already, a for loop iterates through the selected word to check if the letter is in the word. Case does not matter.
<!-- Add screenshot of code snippet--->

Every letter guessed is added to an array and iterated over to display in the "Guessed Letters" section.
<!-- Add screenshot of code snippet--->


## Technologies Used
* Javascript
* HTML5
* CSS




