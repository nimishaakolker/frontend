import { useState } from "react"

export default function Ludo (){
    let [moves, setMoves] = useState({blue : 0, red : 0, yellow : 0, green : 0})

    let updateBlue = () => {
        setMoves((prevMove) => {
            return{...prevMove, blue: prevMove.blue + 1};
        })
    }
    let updateRed = () => {
        setMoves((prevMove) => {
            return{...prevMove, red: prevMove.red + 1};
        })
    }
    let updateYellow = () => {
        setMoves((prevMove) => {
            return{...prevMove, yellow: prevMove.yellow + 1};
        })
    }
    let updateGreen = () => {
        setMoves((prevMove) => {
            return{...prevMove, green: prevMove.green + 1};
        })
    }
    return (
        <div>
            <h3>Game Begins!</h3>
            <div className="board">
                <p>Blue Moves = {moves.blue} </p>
                <button onClick={updateBlue} style={{backgroundColor : "blue"}}> +1 </button>
                <p>Red Moves = {moves.red}</p>
                <button onClick={updateRed} style={{backgroundColor : "red"}}> +1 </button>
                <p>Yellow Moves = {moves.yellow}</p>
                <button onClick={updateYellow} style={{backgroundColor : "yellow"}}> +1 </button>
                <p>Green Moves = {moves.green}</p>
                <button onClick={updateGreen} style={{backgroundColor : "green"}}> +1 </button>
            </div>
        </div>
    )
}