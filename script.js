let isGridCreated = false;

const grid = document.getElementById('gridContainer');
const newGridButton = document.getElementById('controlGridSizeButton');
const clearScreenButton = document.getElementById('clearScreenButton');
const rainbowButton = document.getElementById('rainbowButton');

newGridButton.addEventListener('click', createSquares);
clearScreenButton.addEventListener('click', removeAllSquares);
rainbowButton.addEventListener('click', createRainbowSquares);

function createRainbowSquares() {
  const squares = Array.from(document.querySelectorAll('.square'));
  squares.forEach(function(square) {
    square.addEventListener('mouseenter', colorSquareRandomColor);
  });
}

function colorSquareRandomColor() {
  this.style.background = getRandomColor();
  this.classList.add('colored');
}

function getRandomColor() {
  let letters = '0123456789ABCDEF';
  let color = '#';
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}


function removeAllSquares() {
  if(isGridCreated === true) {
    const squares = Array.from(document.querySelectorAll('.changeToBlack'));
    squares.forEach((square) =>{
      square.style.background = 'white'; 
    });
  }
}

//assumption: we have a 300px by 500px main container which will create
// 1500 10 by 10 squares
function createSquares() {
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
  colorSquareBlack(squares);
}

function colorSquareBlack(squares) {
  squares.forEach(function(square) {
    square.addEventListener('mouseenter', changeToBlack);
  });
}

function changeToBlack() {
  this.classList.add('changeToBlack');
}
