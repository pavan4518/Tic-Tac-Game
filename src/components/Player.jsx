import React from 'react'
import { useState } from "react"



  


export default function Player({name,symbol}) {
const[isEditing,setIsEditing]=useState(false)
const[edit,setIsEdit]=useState(name)
  
const handleEditClick=()=>{
    setIsEditing((editing)=>!editing)
  }
  let Playername=<span className="player-name">{edit}</span>
  if(isEditing){
    Playername = <input type='name' required value={edit} onChange={(event)=>{setIsEdit(event.target.value)}}/>
  }
  return (
    <li>
    <span className="player-info">
      {Playername}
     <span className="player-symbol">{symbol}</span>
     </span>
     <button onClick={handleEditClick}>{isEditing ? 'Save':'Edit'}</button>
  </li>
  )
}
