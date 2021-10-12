/*-------------------------------- Constants --------------------------------*/



/*---------------------------- Variables (state) ----------------------------*/
let board = [
  null,null,null,
  null,null,null,
  null,null,null
]
let currentPlayer, isWinner

/*------------------------ Cached Element References ------------------------*/
const boxOne = document.getElementById('sq0')
const boxTwo = document.getElementById('sq1')
const boxThree = document.getElementById('sq2')
const boxFour = document.getElementById('sq3')
const boxFive = document.getElementById('sq4')
const boxSix = document.getElementById('sq5')
const boxSeven = document.getElementById('sq6')
const boxEight = document.getElementById('sq7')
const boxNine = document.getElementById('sq8')
const gameStatus = document.getElementById('message')
/*----------------------------- Event Listeners -----------------------------*/



/*-------------------------------- Functions --------------------------------*/

init()

function init(){
  board = [
    boxOne, boxTwo, boxThree,
    boxFour, boxFive, boxSix,
    boxSeven, boxEight, boxNine
  ]
  currentPlayer = 1
  isWinner = null //1 for 'X' , -1 'O' , 'T' for Tie
  render()
}
function render(){
  board.forEach()
}
// 3.3) The render function should:
	  // 3.3.1) Loop over the board array (which represents the squares on the page), and for each iteration:
		  // 3.3.1.1) Use the index of the iteration to access the square in the squares array that corresponds with the current cell being iterated over in the board array
		  // 3.3.1.2) Style that square however you wish dependant on the value contained in the current cell being iterated over (-1, 1, or null)
	  // 3.3.2) Render a message reflecting the currrent game state:
	    // 3.3.2.1) If winner has a value other than null (game still in progress), render whose turn it is.
	      // Hint: Maybe use a ternary inside of a template literal here?
	    // 3.3.2.2) If winner is equal to 'T' (tie), render a tie message.
	    // 3.3.2.3) Otherwise, render a congratulatory message to which player has won.
	      // Hint (again): Maybe use a ternary inside a template literal here