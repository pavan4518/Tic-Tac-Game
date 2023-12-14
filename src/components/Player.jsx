import React from 'react'
import { useState } from "react"



  


export default function Player({name,symbol,isActive,onChangeName}) {
const[isEditing,setIsEditing]=useState(false)
const[edit,setIsEdit]=useState(name)
  
const handleEditClick=()=>{
    setIsEditing((editing)=>!editing)
    if(isEditing){

        onChangeName(symbol,edit)
    }
  }
  let Playername=<span className="player-name">{edit}</span>
  if(isEditing){
    Playername = <input type='name' required value={edit} onChange={(eventc)=>{setIsEdit(event.target.value)}}/>
  }
  return (
    <li className={isActive ? 'active':undefined}>
    <span className="player-info">
      {Playername}
     <span className="player-symbol">{symbol}</span>
     </span>
     <button onClick={handleEditClick}>{isEditing ? 'Save':'Edit'}</button>
  </li>
  )
}

