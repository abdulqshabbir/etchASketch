let isGridCreated = false;

const grid = document.getElementById('gridContainer');
const newGridButton = document.getElementById('controlGridSizeButton');
const clearScreenButton = document.getElementById('clearScreenButton');

newGridButton.addEventListener('click', createSquares);
clearScreenButton.addEventListener('click', removeAllSquares);

function removeAllSquares() {
  if(isGridCreated === true) {
    const squares = Array.from(document.querySelectorAll('.changeToBlack'));
    squares.forEach((square) =>{
      square.classList.remove('changeToBlack'); 
    });
  }
}

//assumption: we have a 300px by 500px main container which will create
// 1500 10 by 10 squares
function createSquares(e) {
  if(isGridCreated === false) {
    for (let i = 1; i <= 1500; i++) {
      const square = document.createElement('div');
      square.setAttribute('id', `squareNum${i}`);
      square.setAttribute('class', `square`);
      grid.appendChild(square);
      isGridCreated = true;
    }
  }
  const squares = Array.from(document.querySelectorAll('.square'));
  highlightOnHover(squares);
}

function highlightOnHover(squares) {
  squares.forEach(function(square) {
    square.addEventListener('mouseenter', changeToBlack);
  });
}

function changeToBlack() {
  this.classList.add('changeToBlack');
}
