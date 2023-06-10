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

var wordToGuessEL = document.getElementById('word-to-guess')
var previousWordEl =  document.getElementById ('previous-word')
var incorrectLettersEl = document.getElementById ('incorrect-letters')
var remainingGuessesEl =  document.getElementById ('remaining-guesses')
var scoreEL =  document.getElementById ('score')
var winsEL = document.getElementById ('wins')
var lossesEL = document.getElementById ('losses')
var wordDisplayArray = []
var lettersGuessed = []
var incorrectLetters = []
var newLetter = true
var allowedKey = /^[A-Za-z]+$/

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
remainingGuessesEl.textContent = 10

//display underscores representing word to guess 
wordToGuessEL.textContent = (wordDisplay)





document.onkeyup = function(e) {
  console.log(word)
  var key = String.fromCharCode(e.which)
  key = e.key.toLowerCase()
  console.log(key)
  
  //check if key is alphanumeric
  if(key.charAt() < 97 || key.charAt() >122){
    return
  }

//check if letter has been guessed before
  if(lettersGuessed.indexOf(key)== -1){
    for(let i=0; i<lettersGuessed.length; i++){
      if (key === lettersGuessed[i]){
        return //duplicate letter
      }
    }
    lettersGuessed.push(key) //new letter, added to guessed list
  }
  else{
    return//not valid key
  }



//replace underscores with valid letters
  for(let i=0; i<wordArray.length; i++){
    if(key == wordArray[i]){
      wordDisplayArray[i] = String(key)
    }
  }










  wordToGuessEL.textContent = wordDisplayArray.join('')
  console.log(incorrectLetters)
}


