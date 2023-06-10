var words = [
  'bananas',
  'grapes',
  'carousel',
  'milkshake',
  'javascript',
  'limousine',
  'chocolate',
  'programming',
  'meatloaf',
  'ukulele',
  'mango'
]

var wordToGuess = document.getElementById('word-to-guess')
var previousWord = document.getElementById('previous-word')
var incorrectLettersDisplay = document.getElementById('incorrect-letters')
var remainingGuessDisplay = document.getElementById('remaining-guesses')
var score =  document.getElementById ('score')
var winDisplay = document.getElementById('wins')
var lossDisplay = document.getElementById('losses')
var wordDisplayArray = []
var lettersGuessedArray = []
var incorrectLettersArray = []
var remainingGuesses = 10
var wins = 0
var losses = 0

//Selects random word from provided word array bank
//var word = words[Math.floor(Math.random()*words.length)]
var word = "bananas"


//loads word into a character array for later comparison
var wordArray = Array.from(word)

//loads an array = length of word, with underscores and converts to string to display to user
for(let i=0; i<word.length; i++){
  wordDisplayArray[i] = ('_')
} 
var wordDisplay = wordDisplayArray.join('')

//sets starting guesses
remainingGuessDisplay.textContent = 10

//display underscores representing word to guess 
wordToGuess.textContent = (wordDisplay)





document.onkeyup = function(e) {
  var key = String.fromCharCode(e.which)
  key = e.key.toLowerCase()
  var correct = false
  var solved = false

  
  //check if key is alphanumeric
  if(key.charAt() < 97 || key.charAt() >122){
    return
  }

//check if letter has been guessed before
  if(lettersGuessedArray.indexOf(key)== -1){
    for(let i=0; i<lettersGuessedArray.length; i++){
      if (key === lettersGuessedArray[i]){
        return //duplicate letter
      }
    }
    lettersGuessedArray.push(key) //new letter, added to guessed list
  }
  else{
    return//not valid key
  }



//replace underscores with valid letters as user guesses
  for(let i=0; i<wordArray.length; i++){
    if(key == wordArray[i]){
      wordDisplayArray[i] = String(key)
      correct = true
    }
  }


//if letter guessed is incorrect, add to inncorrect list
  if(correct === false){
    incorrectLettersArray.push(key)
    remainingGuesses--
  } 
  else{
    remainingGuesses--
  }

  
  wordToGuess.textContent = wordDisplayArray.join('')
  incorrectLettersDisplay.textContent = incorrectLettersArray.join('')
  remainingGuessDisplay.textContent = remainingGuesses


  
  ///winning




}



