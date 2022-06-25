import React from 'react'
import Room from './Room'
import classes from "./Rooms.module.css"
import { useRooms } from '../../Context/room-context'

export default function Rooms() {
    const {rooms} = useRooms();

  return (
      <div className={classes.container}> 
        {rooms.map((r,i)=> <Room key={i} path={r.name} name={r.name}/>)}
      </div>
     
  )
}
