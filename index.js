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


//Selects random word from provided word array bank
var word = words[Math.floor(Math.random()*words.length)]

//loads word into a character array for later comparison
var wordArray = Array.from(word)

//loads an array = length of word, with underscores and converts to string to display to user
for(let i=0; i<word.length; i++){
  wordDisplayArray[i] = ("_ ")
} 
var wordDisplay = wordDisplayArray.join('')

//sets starting guesses
remainingGuessesEl.textContent = 10

//display underscores representing word to guess 
wordToGuessEL.textContent = (wordDisplay)


