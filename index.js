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
var wordDisplay = " "
var lettersGuessedArray = []
var incorrectLettersArray = []
var remainingGuesses = 10
var wins = 0
var losses = 0
var keysAllowed = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z']
var totalLettersToSolve = 0
remainingGuessDisplay.textContent = 10


//Selects random word from provided word array bank, loads word into a character array for later comparison
var word = words[Math.floor(Math.random()*words.length)]
console.log(word)

var wordArray = Array.from(word)
totalLettersToSolve = wordArray.length

//loads an array = length of word, with underscores and converts to string to display to user
for(let i=0; i<word.length; i++){
  wordDisplayArray[i] = ('_')
} 
wordDisplay = wordDisplayArray.join('')


//display underscores representing word to guess 
wordToGuess.textContent = (wordDisplay)


document.onkeyup = function(e) {
  var key = String.fromCharCode(e.which)
  key = e.key.toLowerCase()
  var correct = false
  var keyApproved = false

  
  console.log(key)
  console.log(keysAllowed)
  console.log(key === keysAllowed)

  //check if key is alphanumeric
  for(let i=0; i<keysAllowed.length; i++){
    if(key === keysAllowed[i]){
      keyApproved = true
    }
  }
  
  if(keyApproved){

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


    //if letter guessed is incorrect, add to inncorrect list
    if(correct === false){
      incorrectLettersArray.push(key)
      remainingGuesses--
    } 


    //Update display values
    wordToGuess.textContent = wordDisplayArray.join('')
    incorrectLettersDisplay.textContent = incorrectLettersArray.join('')
    remainingGuessDisplay.textContent = remainingGuesses



    //Winning - Loosing criteria + GAME RESET CALL
    if(totalLettersToSolve == 0 && remainingGuesses >= 0){
      wins ++
      reset(word, wins, losses) 
      return
    }
    else if(totalLettersToSolve > 0 && remainingGuesses == 0){
      losses ++
      reset(word, wins, losses)
      return
    }

  }
  else{
    return
  }

  

}


//RESET FUNCTION
function reset(lastWord, win, loss){

  //resets variables to default (pulls in previous word, current win/loss total)
  wordDisplayArray = []
  lettersGuessedArray = []
  incorrectLettersArray = []
  remainingGuesses = 10
  wins = win
  losses = loss
  totalLettersToSolve = 0
  previousWord.textContent = lastWord

  //chooses a new word
  word = words[Math.floor(Math.random()*words.length)]

  //builds new reference word array and stores length for total letters to solve
  //loads an array = length of word, with underscores and converts to string to display to user
  wordArray = Array.from(word)
  totalLettersToSolve = wordArray.length

  for(let i=0; i<word.length; i++){
    wordDisplayArray[i] = ('_')
  } 

  wordDisplay = wordDisplayArray.join('')

  //Resets display info 
  remainingGuessDisplay.textContent = 10
  wordToGuess.textContent = (wordDisplay)
  incorrectLettersDisplay.textContent = " "
  winDisplay.textContent = wins
  lossDisplay.textContent = losses

}
