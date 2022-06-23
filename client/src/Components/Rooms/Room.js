import React from 'react'
import { Link  } from 'react-router-dom'
import classes from "./Rooms.module.css"

export default function Room({name, path}) {
  return (
    <div className={classes.wrapper}>
      <h3>{name}</h3>
      <Link to = {path} >
        <button>Join</button>
      </Link>
    </div>
    
  )
}
