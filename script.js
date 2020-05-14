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
  const resetButton = document.querySelector('#reset');

  start.addEventListener('click', () => {
    console.log('start');
    let one = prompt("Player One's Name:");
    let two = prompt("Player Two's Name:");
    if ((one || two) == (null || '')) {
      one = prompt("Please enter a name\nPlayer One's Name: ");
      two = prompt("Player Two's Name: ");
    }
    playerOne = player(one, 'X');
    playerTwo = player(two, 'O');
    console.log(
      `Player One: ${playerOne.name} :: Player Two: ${playerTwo.name}`
    );
    turn.innerHTML = `${playerOne.name}'s turn`;
    turn.style.display = 'block';
    document.getElementById('board').style.display = 'grid';
    document.getElementById('start').style.display = 'none';
    document.getElementById('reset').style.display = 'inline-block';
  });

  resetButton.addEventListener('click', () => {
    console.log('reset');
    reset();
    console.log('board: ' + gameBoard.board);
  });

  function reset() {
    gameBoard.board = [];
    var currentBoard = document.getElementsByClassName('square');
    for (i = 0; i < currentBoard.length; i++) {
      currentBoard[i].innerHTML = '';
    }
  }

  function playAgain() {
    document.getElementById('reset').style.display = 'none';
    document.getElementById('board').disabled = true;
    if (confirm('Play Again?')) {
      console.log('play again');
      reset();
    } else {
      console.log("don't play again");
      reset();
      document.getElementById('board').disabled = true;
      document.getElementById('start').style.display = 'block';
    }

    // document.getElementById('status').innerHTML = 'Play Again?';
  }

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
    var boardMax = 9;
    if (gameBoard.board.length == boardMax) {
      document.getElementById('winner').innerHTML = "It's a tie.";
      console.log('Play again message would appear after');
      playAgain();
    }
    win.map((combination) => {
      let [a, b, c] = combination;
      if (
        gameBoard.board[a] == 'X' &&
        gameBoard.board[b] == 'X' &&
        gameBoard.board[c] == 'X'
      ) {
        console.log("'Three in a row of X's");
        document.getElementById(
          'winner'
        ).innerHTML = `${playerOne.name} wins!!`;
        playAgain();
      } else if (
        gameBoard.board[a] == 'O' &&
        gameBoard.board[b] == 'O' &&
        gameBoard.board[c] == 'O'
      ) {
        console.log("Three in a row of O's");
        document.getElementById(
          'winner'
        ).innerHTML = `${playerTwo.name} wins!!`;
        playAgain();
      }
    });

    //After message pops up foute to a play again/quit
    //display element to congradulate winner
  }
  //has start/restart button
})();
