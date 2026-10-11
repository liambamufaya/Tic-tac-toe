//Gameboard that represents the grid of the game
function Gameboard(){
  let board = [];
  const rows =3;
  const columns =3;

  for(let i = 0; i< rows; i++){
    board[i] = [];
       for (let z = 0; z< columns; z++)
         board[i].push(Cell())
  }

  //Placing the required letter on the cell
  const PlaceMarker=(row,column,letter)=>{
    board[row][column].addMarker(letter);
  }

  //Iterate thorough every cell of the grid to call the marker function
  const showMarker = ()=>board.map((row)=>   
  row.map((cell)=>cell.getMarker()));

  //Getting each individual cell
  const getMarkerEach = (row,column)=>{
  return board[row][column].getMarker()}
return {PlaceMarker,showMarker,getMarkerEach}
}

// Each cell has a marker either X or O represented as strings
function Cell(){
  let marker = null;
  const addMarker = (letter)=> (marker = letter);
  const getMarker = ()=>(marker);
  return {addMarker,getMarker}
}

function GameController(
  playerOneName = "Player One",
  playerTwoName = "Player Two",
) {
  const board = Gameboard();
  const players = [
    { 
      name: playerOneName,
      marker: "X",
    },
    {
      name: playerTwoName,
      marker: "O",
    },
  ];
  
  let activePlayer = players[0];
  
  const switchPlayerTurn = () => {
    activePlayer = activePlayer === players[0] ? players[1] : players[0];
  };
  const getActivePlayer = () => activePlayer;

  const printNewRound = () => {
    board.showMarker();
    console.log(`${getActivePlayer().name}'s turn.`);
  };
  
  const playRound = (row,column)=> {
    // Drop a marker for the current player
    console.log(`Dropping ${getActivePlayer().name}'s marker into grid ${column} ${row}`);
    board.PlaceMarker(row,column,getActivePlayer().marker);
    
    /*  The logic that controls which player wins the game*/
      const winningCombinations = [
      // Rows
      [[0,0], [0,1], [0,2]],
      [[1,0], [1,1], [1,2]],
      [[2,0], [2,1], [2,2]],
      // Columns
      [[0,0], [1,0], [2,0]],
      [[0,1], [1,1], [2,1]],
      [[0,2], [1,2], [2,2]],
      // Diagonals
      [[0,0], [1,1], [2,2]],
      [[0,2], [1,1], [2,0]]
      ];
      const checkWin = () => {
        return winningCombinations.some(combination => {
        // We look at one winning line at a time
        const [a, b, c] = combination;
          
        // Grab the markers from the board using those coordinates
        const markerA = board.getMarkerEach(a[0], a[1]);
        const markerB = board.getMarkerEach(b[0], b[1]);
        const markerC = board.getMarkerEach(c[0], c[1]);

        // Check if they match and aren't empty
          if((markerA !== null && markerA === markerB && markerB === markerC) == true){
            console.log("You win");
            return
           }
          });
        };
        
        checkWin();
  // Switch player turn
  switchPlayerTurn();
  printNewRound();
  };
            
  // Initial play game message
    printNewRound();
            
  // For the console version, we will only use playRound, but we will need
  // getActivePlayer for the UI version, so I'm revealing it now
  return {
    playRound,
    getActivePlayer,
  };
}

// Game controller
let controller = GameController();
// example of a marker being placed
controller.playRound(0,0);
controller.playRound(1,1);
controller.playRound(0,1);
controller.playRound(1,0);
controller.playRound(0,2);


