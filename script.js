let isGridCreated = false;

const grid = document.getElementById('gridContainer');
const newGridButton = document.getElementById('controlGridSizeButton');

newGridButton.addEventListener('click', createSquares);



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
