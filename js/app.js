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
let boardElement = document.querySelector('.board')

/*----------------------------- Event Listeners -----------------------------*/
boardElement.addEventListener('click', handleClick)


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
function handleClick(evt, idx) {
  if (board[(evt.target.id.replace("sq", ""))] === 1 ||
    board[(evt.target.id.replace("sq", ""))] === -1) {
    return 
  } else if (isWinner !== null) {
    return
  }
}
// 5.1) Obtain the index of the square that was clicked by:
	  // 5.1.1) "Extracting" the index from an id assigned to the element in the HTML 
		// Hint: Each id seems to correspond with an index in our board array. How could these be used if we cleaned them up a bit?

    // 5.2) If the board has a value at the index, immediately return because that square is already taken.

  // 5.3) If winner is not null, immediately return because the game is over.

	// 5.4) Update the board array at the index with the value of turn.

	// 5.5) Change the turn by multiplying turn by -1 (this flips a 1 to -1, and vice-versa