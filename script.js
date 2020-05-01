const gameBoard = (() => {
  const board = ['', '', '', '', '', '', '', '', '']; //3x3
  const getBoard = () => board;
  //const resetBoards = (currentboard) =>(//additems for current board here)
  return getBoard;
})();
const player = (name, icon) => {
  const getName = () => name; //player name
  const getIcon = () => icon; //Icon will be either X or O
  //a variable for move once clicked on a square;
  return { getName, getIcon };
};

const displayController = (() => {
  //displays gameboard on screen
  const playerMark = () => {};
  document.addEventListener('click', function (event) {
    var value = event.target;
    this.console.log(value.dataset.square);
    if (value.innerHTML == '') {
      value.innerHTML = 'X'; //player 1 and player 2 will be O
    } else {
      this.alert('Error');
    }
  });
})();

const gameController = (() => {
  //tracks game
  //has start/restart button
  //display element to congradulate winner
})();
