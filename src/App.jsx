
import GameBoard from "./components/GameBoard"
import Player from "./components/player"
import Log from "./components/Log"
import { useState } from "react"

function deriveActivePlayer(gameTurns){
  let curActivePlayer ='X';
  if(gameTurns.length> 0 && gameTurns[0].player === 'X'){
    curActivePlayer ='O';
  }
  return curActivePlayer
}

function App() {
  const[gameTurns,setGameTurns]=useState([])
  //const[activePlayer,setActivePlayer]=useState('X')
 const activePlayer =deriveActivePlayer(gameTurns)
  
 
  function handleSelectSquare(rowIndex,colIndex){
   // setActivePlayer((curActivePlayer)=>curActivePlayer === "X" ? "O": "X")
    setGameTurns(prevTurns=>{
      const curActivePlayer =deriveActivePlayer(prevTurns)
      const updatedTurns =[{square:{row:rowIndex,col:colIndex},player:activePlayer},...prevTurns]
      return updatedTurns ;
    })
  }

  return (
    <main>
      <div id="game-container">
      <ol id="players" className="highlight-player">
        
      <Player name="Player 1" symbol="X" isActive={activePlayer === 'X'}/>
      <Player name="Player 2" symbol="O"isActive={activePlayer === 'O'} />
      

      </ol>
     <GameBoard onSelectSquare={handleSelectSquare} 
     turns={gameTurns}
     />
      </div>
     <Log turns={gameTurns}/>
    </main>
  )
}

export default App
