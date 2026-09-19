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
    //Iterate thorough every cell of the grid to call
    // the marker function
    const showMarker = ()=>board.map((row)=>   
    row.map((cell)=>cell.getMarker()))

    
return {PlaceMarker,showMarker}

}
//example of a marker being placee
board = Gameboard();
board.PlaceMarker(2,2,"X");
console.log(board.showMarker());

// Each cell has a marker either X or O represented
// as strings
function Cell(){
 let marker = null;
    const addMarker = (letter)=> (marker = letter);
    const getMarker = ()=>(marker);

    return {addMarker,getMarker}
}





