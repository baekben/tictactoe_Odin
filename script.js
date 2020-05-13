const turn = document.getElementById('turn');
const player = (name, icon) => {
  return { name, icon };
};
const gameBoard = (() => {
  const board = []; //3x3
  const winCombo = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [2, 4, 6],
    [0, 4, 8],
  ];
  //const getBoard = () => board;
  //const resetBoards = (currentboard) =>(//additems for current board here)
  return { board, winCombo };
})();

const displayController = (() => {
  //displays gameboard on screen

  var current = 1;
  const screenBoard = document.getElementById('board');
  const playerMark = (event) => {
    var value = event.target;
    const box = value.getAttribute('data-square');
    if (value.innerHTML == '') {
      if (current == 1) {
        value.innerHTML = 'X';
        current = 2;
      } else {
        value.innerHTML = 'O';
        current = 1;
      }
      //player 1 and player 2 will be O
    } else {
      alert('Error');
    }
    gameBoard.board[box] = value.innerHTML;
    return { current };
  };
  const gameUpdate = (e) => {
    //squares = e.target.querySelectorAll('.square');
    box = e.target.getAttribute('data-square');
  };

  return { screenBoard, playerMark, gameUpdate };
})();

const gameController = (() => {
  //tracks game
  const win = gameBoard.winCombo;
  const start = document.querySelector('#start');
  const reset = document.querySelector('#reset');

  start.addEventListener('click', () => {
    console.log('start');
    let one = prompt("Player One's Name:");
    let two = prompt("Player Two's Name:");
    playerOne = player(one, 'X');
    playerTwo = player(two, 'O');
    console.log(
      `Player One: ${playerOne.name} :: Player Two: ${playerTwo.name}`
    );
    turn.innerHTML = `${playerOne.name}'s turn`;
    turn.style.display = 'block';
    document.getElementById('board').style.display = 'grid';
    document.getElementById('start').style.display = 'none';
  });

  reset.addEventListener('click', () => {
    console.log('reset');
    gameBoard.board = [];
    var currentBoard = document.getElementsByClassName('square');
    for (i = 0; i < currentBoard.length; i++) {
      currentBoard[i].innerHTML = '';
    }
    console.log('board: ' + gameBoard.board);
    console.log('resetboard: ' + gameBoard.resetBoard);
  });

  displayController.screenBoard.addEventListener('click', (e) => {
    let mark = displayController.playerMark(e);
    if (mark.current == 1) {
      turn.innerHTML = `${playerOne.name}'s turn`;
    } else if (mark.current == 2) {
      turn.innerHTML = `${playerTwo.name}'s turn`;
    }
    displayController.gameUpdate(e);
    checkWin();
    console.log('Ran checkWin');
    console.log('Game board:' + gameBoard.board);
  });

  function checkWin() {
    //checks if there are three in a row
    win.map((combination) => {
      let [a, b, c] = combination;
      if (
        gameBoard.board[a] == 'X' &&
        gameBoard.board[b] == 'X' &&
        gameBoard.board[c] == 'X'
      ) {
        console.log("'Three in a row of X's");
        alert(`${playerOne.name} wins`);
      } else if (
        gameBoard.board[a] == 'O' &&
        gameBoard.board[b] == 'O' &&
        gameBoard.board[c] == 'O'
      ) {
        console.log("Three in a row of O's");
        alert(`${playerTwo.name} wins`);
      }
      //After message pops up foute to a play again/quit
      //display element to congradulate winner
    });
  }
  //has start/restart button
})();
