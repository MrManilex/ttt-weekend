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
let reset = document.querySelector(".reset-btn")

/*----------------------------- Event Listeners -----------------------------*/
boardElement.addEventListener('click', handleClick)
reset.addEventListener("click", init)

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
      square.innerText.justifyContent = 'space-around';
    }else if (board[idx] === -1){
      square.style.backgroundColor = 'pink'
      square.innerText = 'O'
      square.innerText.justifyContent = 'center';
    }else if (board[idx] === null){
      square.style.backgroundColor = ''
      square.innerText = ''
      square.innerText.justifyContent = 'center'
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
  getWinner()
  function getWinner(){
    winCondition.forEach(function (array){
      let idxOne = array[0]
      let idxTwo = array[1]
      let idxThree = array[2]
      let theWinner = board[idxOne]
      let sum = Math.abs(board[idxOne] + board[idxTwo] + board[idxThree])
      if (sum === 3){
        isWinner = theWinner
        return theWinner
      } else if (board.includes(null)){
        return null
      } else{
        isWinner = 'T'
        return isWinner
      }
    })
    render()
  }
}
