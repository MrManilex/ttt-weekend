/*-------------------------------- Constants --------------------------------*/



/*---------------------------- Variables (state) ----------------------------*/
let board = [
  null,null,null,
  null,null,null,
  null,null,null
]
let currentPlayer, isWinner

/*------------------------ Cached Element References ------------------------*/
const boxAll = document.querySelectorAll('.board')

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
  isWinner = null //1 for 'X' , -1 'O' , 'T' for Tie
  render()
}
function render(){
  boxAll.forEach(function(square, idx){
    square = boxAll[idx]
    if (currentPlayer === 1){
      square.style.backgroundColor = 'cadetblue'
    }else if (currentPlayer === -1){
      square.style.backgroundColor = 'red'
    }else if (currentPlayer === null){
      square.style.backgroundColor = 'pink'
    }else { }
    }
  )
}