//Used to prevent
let isGridCreated = false;

//Fixes: When rainbow is clicked it does not revert back to black;

//retrieve DOM elements
const grid = document.getElementById('gridContainer');
const gridSizeButton = document.getElementById('controlGridSizeButton');
const clearScreenButton = document.getElementById('clearScreenButton');
const rainbowButton = document.getElementById('rainbowButton');
const gridSizeInputField = document.getElementById('gridSizeInput');

gridSizeButton.addEventListener('click', getGridSize);
clearScreenButton.addEventListener('click', removeAllSquares);
rainbowButton.addEventListener('click', createRainbowSquares);

function getGridSize() {
  const gridSize = gridSizeInputField.value;
  createSquares(gridSize);
  console.log('created squares');
}

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
    const squares = Array.from(document.querySelectorAll('.square'));
    console.log(squares);
    squares.forEach(function(square){
      square.remove();
    });
    isGridCreated = false;
  }
}

//assumption: we have a 300px by 500px main container which will create
// 1500 10 by 10 squares
function createSquares(gridSize) {
  let squareWidth = 300/gridSize + 'px';
  let squareHeight = 300/gridSize + 'px';
  console.log(squareWidth);
  if(isGridCreated === false) {
    for (let i = 1; i <= gridSize*gridSize; i++) {
      const square = document.createElement('div');
      square.setAttribute('id', `squareNum${i}`);
      square.setAttribute('class', `square`);

      square.style.width = squareWidth;
      square.style.height = squareHeight;
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
