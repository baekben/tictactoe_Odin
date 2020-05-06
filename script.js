const gameBoard = (() => {
  const board = ['', '', '', '', '', '', '', '', '']; //3x3
  //const getBoard = () => board;
  //const resetBoards = (currentboard) =>(//additems for current board here)
  return board;
})();
const player = (name, icon) => {
  const getName = () => name; //player name
  const getIcon = () => icon; //Icon will be either X or O
  //a variable for move once clicked on a square;
  return { getName, getIcon };
};

const displayController = (() => {
  //displays gameboard on screen
  var player = 1;
  const screenBoard = document.getElementById('board');
  const turn = document.getElementById('turn');
  const playerMark = (event) => {
    var value = event.target;
    const box = value.getAttribute('data-square');
    if (value.innerHTML == '') {
      if (player == 1) {
        value.innerHTML = 'X';
        player = 2;
      } else {
        value.innerHTML = 'O';
        player = 1;
      }
      //player 1 and player 2 will be O
    } else {
      alert('Error');
    }
    gameBoard[box] = value.innerHTML;
    turn.innerHTML = `Player ${player}'s turn`;
    console.log(`Player ${player}'s turn`);
  };
  const gameUpdate = (e) => {
    //squares = e.target.querySelectorAll('.square');
    box = e.target.getAttribute('data-square');
    console.log(gameBoard);
  };
  screenBoard.addEventListener('click', (e) => {
    playerMark(e);
    gameUpdate(e);
  });

  return { screenBoard };
})();

const gameController = (() => {
  //tracks game
  //has start/restart button
  //display element to congradulate winner
})();
