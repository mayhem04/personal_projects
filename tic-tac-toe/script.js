function Player(name,marker) {
    this.name = name;
    this.marker = marker;
}
const player1 = new PLayer('player1', 'X');
const player2 = new PLayer('player2', 'O');

const gameBoard = (function() {
    gameboard = ["","","","","","","","",""];
    function setMarker(index,marker) {
        if (gmeBoard[index] == "");
        gameBoard[index] == marker; 
    }
    function getBoard() {
        return gameBoard;
    }
    return {setMarker,getBoard};
})();

const game_flow = (function (){
    
})


