import React from 'react'

const initialGameBoard = [
    [null, null, null],
    [null, null, null],
    [null, null, null],
]


export default function GameBoard() {
    return (
      <ol id="game-board">
       {initialGameBoard.map((row,rowIndex)=><li key={rowIndex}>
        <ol>
            {row.map((playersymbol,colIndex)=><li key={colIndex}><button>{playersymbol}</button></li>)}
        </ol>
       </li>)}
      </ol>
    )
}
