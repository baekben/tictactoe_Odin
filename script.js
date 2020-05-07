const gameBoard = (() => {
  const board = ['', '', '', '', '', '', '', '', '']; //3x3
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
    gameBoard.board[box] = value.innerHTML;
    turn.innerHTML = `Player ${player}'s turn`;
    console.log(`Player ${player}'s turn`);
    return player;
  };
  const gameUpdate = (e) => {
    //squares = e.target.querySelectorAll('.square');
    box = e.target.getAttribute('data-square');
    console.log(gameBoard);
  };

  return { screenBoard, playerMark, gameUpdate, player };
})();

const gameController = (() => {
  //tracks game

  const dc = displayController;
  const gb = gameBoard;
  const win = gb.winCombo;
  const board = gb.board;
  dc.screenBoard.addEventListener('click', (e) => {
    dc.playerMark(e);
    dc.gameUpdate(e);
    checkWin();
    console.log('Ran checkwin');
  });
  function checkWin() {
    win.map((combination) => {
      let [a, b, c] = combination;
      if (board[a] == 'X' && board[b] == 'X' && board[c] == 'X') {
        console.log("'Three in a row of X's");
      } else if (board[a] == 'O' && board[b] == 'O' && board[c] == 'O') {
        console.log("Three in a row of O's");
      }
    });
    // console.log(board);
    // for (i = 0; i < win.length; i++) {
    //   for (j = 0; j < win[i].length; j++) {
    //     if (board[win[i][j]].includes('X')) {
    //       console.log(board[win[i]]);
    //       x++;
    //     } else if (board[win[i][j]].includes('O')) {
    //       o++;
    //     }
    //   }
    // console.log(`X: ${x}; O: ${o}`);
    // if (board[win[i].includes('X', 'X', 'X')]) {
    //   console.log('Three in a row ');
    //   break;
    // }
    //}
  }

  //has start/restart button
  //display element to congradulate winner
})();
