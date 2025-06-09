function Player(name,marker) {
    this.name = name;
    this.marker = marker;
}
const player1 = new Player('player1', 'X');
const player2 = new Player('player2', 'O');

const gameBoard = (function() {
    let gameboard = ["","","","","","","","",""];
    function setMarker(index,marker) {
        if (gameboard[index] === "") {
            gameboard[index] = marker; 
        }
    }
    function getBoard() {
        return gameboard;
    }
    function reset_board() {
        for (i = 0; i < gameboard.length; i++) {
            gameboard[i] = "";
        }
    }
    return {setMarker,getBoard,reset_board};
})();
const winning_combo = [
    [0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]
];
function checkWin(board, marker) {
  for (let i = 0; i < winning_combo.length; i++) {
    let combo = winning_combo[i];
    let a = combo[0];
    let b = combo[1];
    let c = combo[2];

    if (board[a] === marker && board[b] === marker && board[c] === marker) {
      return true; // This player wins!
    }
  }
  return false; // No winning combo found
}




const game_flow = (function (){
    function playRound(index) {
        gameBoard.setMarker(index, currentPlayer.marker);
    }
    return {playRound};

    
    
})();
let currentPlayer = player1;
const tiles = document.querySelectorAll('.tile');
tiles.forEach((tile,index) => {
    tile.addEventListener('click',() => {
        if (tile.textContent !== "") return;
        game_flow.playRound(index);
        tile.textContent = currentPlayer.marker;
        if (checkWin(gameBoard.getBoard(),currentPlayer.marker)) {
            alert(currentPlayer.name + " wins!");
            gameBoard.reset_board();
            tiles.forEach(tile => {
                tile.textContent = "";
            });
            currentPlayer = player1;
        }
        currentPlayer = currentPlayer === player1 ? player2 : player1;
    });
});

const reset_button = document.getElementById('reset-button');
reset_button.addEventListener('click', () => {
    gameBoard.reset_board();
    tiles.forEach(tile => {
        tile.textContent = "";
    });
    currentPlayer = player1;


});


