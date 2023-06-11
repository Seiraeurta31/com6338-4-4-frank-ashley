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
var totalLettersToSolve = 0



//Selects random word from provided word array bank
var word = words[Math.floor(Math.random()*words.length)]
//var word = "bananas"


//loads word into a character array for later comparison
var wordArray = Array.from(word)
totalLettersToSolve = wordArray.length

console.log(word)

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
      totalLettersToSolve --
      correct = true
    }
  }
console.log(totalLettersToSolve)

//if letter guessed is incorrect, add to inncorrect list
  if(correct === false){
    incorrectLettersArray.push(key)
    remainingGuesses--
  } 
  else{
    remainingGuesses--
  }

  console.log(incorrectLettersArray)
  console.log (incorrectLettersDisplay.textContent)
  

  wordToGuess.textContent = wordDisplayArray.join('')
  incorrectLettersDisplay.textContent = incorrectLettersArray.join('')
  remainingGuessDisplay.textContent = remainingGuesses

 

  //winning - loosing
  if(totalLettersToSolve == 0 && remainingGuesses > 0){
    console.log("win")
    wins ++
    console.log(wins)
    reset(word, wins, losses)
    return
  }
  else if(totalLettersToSolve > 0 && remainingGuesses == 0){
    console.log("lost")
    losses ++
    console.log(losses)
    reset(word, wins, losses)
    return
  }

}

function reset(lastWord, win, loss){
  wordToGuess = document.getElementById('word-to-guess')
  previousWord = document.getElementById('previous-word')
  incorrectLettersDisplay = document.getElementById('incorrect-letters')
  remainingGuessDisplay = document.getElementById('remaining-guesses')
  score =  document.getElementById ('score')
  winDisplay = document.getElementById('wins')
  lossDisplay = document.getElementById('losses')
  wordDisplayArray = []
  lettersGuessedArray = []
  incorrectLettersArray = []
  remainingGuesses = 10
  wins = win
  losses = loss
  totalLettersToSolve = 0
  previousWord.textContent = lastWord
  console.log("reset triggered")


  word = words[Math.floor(Math.random()*words.length)]
  //var word = "bananas"

  wordArray = Array.from(word)
  totalLettersToSolve = wordArray.length

  console.log(word)

  //loads an array = length of word, with underscores and converts to string to display to user
  for(let i=0; i<word.length; i++){
    wordDisplayArray[i] = ('_')
  } 

  wordDisplay = wordDisplayArray.join('')

  //sets starting guesses
  remainingGuessDisplay.textContent = 10

  //display underscores representing word to guess 
  wordToGuess.textContent = (wordDisplay)

  winDisplay.textContent = wins
  lossDisplay.textContent = losses

}
