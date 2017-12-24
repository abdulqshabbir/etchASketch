const grid = document.getElementById('gridContainer');
const newGridButton = document.getElementById('controlGridSizeButton');

newGridButton.addEventListener('click', (e) => {
  for (let i = 0; i < 1500; i++) {
    const square = document.createElement('div');
    square.classList.add('square')
    grid.appendChild(square);
  }
});
