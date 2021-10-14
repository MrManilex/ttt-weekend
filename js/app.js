/*-------------------------------- Constants --------------------------------*/

winCondition = [
  [0,1,2], 
  [3,4,5], 
  [6,7,8], 
  [0,3,6], 
  [1,4,7],
  [2,5,8],
  [0,4,8],
  [2,4,6]]

/*---------------------------- Variables (state) ----------------------------*/
let board = [
  null,null,null,
  null,null,null,
  null,null,null
]
let currentPlayer, isWinner

/*------------------------ Cached Element References ------------------------*/
let boxAll = document.querySelectorAll('.div')
let gameStatus = document.getElementById('message')

/*----------------------------- Event Listeners -----------------------------*/



/*-------------------------------- Functions --------------------------------*/

init()

function init(){
  board = [
    null,null,null,
    null,null,null,
    null,null,null
  ]
  currentPlayer = 1
  isWinner = null
  render()
}
function render(){
  boxAll.forEach(function(square, idx){
    square = boxAll[idx]
    if (board[idx] === 1){
      square.style.backgroundColor = 'cyan'
      square.innerText = 'X'
    }else if (board[idx] === -1){
      square.style.backgroundColor = 'pink'
      square.innerText = 'O'
    }else if (board[idx] === null){
      square.style.backgroundColor = ''
      square.innerText = ''
    }
    }
  )
  if (isWinner === null){
    gameStatus.innerText = `It's ${currentPlayer === 1 ? 'X' : 'O'}'s turn...`
  }else if (isWinner === 'T'){
    gameStatus.innerText = "You both suck!!"
  }else if (isWinner === 1){
    gameStatus.innerText = `X is the winner!!!`
  }else if (isWinner === -1){
    gameStatus.innerText = `O is the winner!!!`
  }
}

// 4.1) Define the 8 possible winning combinations as an array of arrays.
	  // Each array will contain three indexes of the board that make a winner if they hold the same player value. 
		// If you are having trouble with this step, feel free to check out the winningCombos array in the solution code. +