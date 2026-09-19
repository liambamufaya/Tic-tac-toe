//Gameboard that represents the stae of the game

function Gameboard(){

    let board = [];
    const rows =3;
    const columns =3;

    for(let i = 0; i< rows; i++){
        board[i] = [];
        for (let z = 0; z< columns; z++)
            board[i].push(Cell())
        
    }
    // console.log(board)

    const PlaceMarker=(row,column,letter)=>{
        board[row][column].addMarker(letter);
    }

    const showMarker = ()=>board.map((row)=>   
    row.map((cell)=>cell.getMarker()))

    
return {PlaceMarker,showMarker}

}

board = Gameboard();
board.PlaceMarker(2,2,"X");
console.log(board.showMarker());
// A cell representing each letter
function Cell(){
 let marker = null;
    const addMarker = (letter)=> (marker = letter);
    const getMarker = ()=>(marker);

    return {addMarker,getMarker}
}





