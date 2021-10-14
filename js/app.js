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
function handleClick(evt) {
  if (board[(evt.target.id.replace("sq", ""))] === 1 ||
    board[(evt.target.id.replace("sq", ""))] === -1) {
    return 
  } else if (isWinner !== null) {
    return
  }
  board[(evt.target.id.replace("sq", ""))] = currentPlayer
  currentPlayer = currentPlayer * -1
}
function getWinner(){
  winCondition.forEach(function (array){
    let idxOne = array[0]
    let idxTwo = array[1]
    let idxThree = array[2]
    let sum = Math.abs(board[idxOne] + board[idxTwo] + board[idxThree])
    if (sum === 3){
      return
    }
  })
}
// //5.6) Set the winner variable if there's a winner by calling a new function: getWinner.
// 	 // The getWinner function will...

// 	  //5.6.1) There are a couple methods you can use to find out if there is a winner.
// 	 //  This is the first, more elegant way that takes advantage of the winningCombos array you wrote above in step 4.
// 	 //  The 5.6.2 step is a little simpler to comprehend, but you'll need to write a lot more code.
// 	 //  The 5.6.2 step also won't take advantage of the winningCombos array, but using it as a reference will help you build a solution.
// 	  // Choose only one path.
		  // 5.6.1.1) Loop through the each of the winning combination arrays defined.
		  // 5.6.1.2) Total up the three board positions using the three indexes in the current combo.
		  // 5.6.1.3) Convert the total to an absolute value (convert any negative total to positive).
		  // 5.6.1.4) If the total equals 3, we have a winner! Set the winner variable to the board's value at the index specified by the first index of that winning combination's array by returning that value.
