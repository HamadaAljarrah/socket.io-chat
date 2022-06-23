import React from 'react'
import Room from './Room'
import classes from "./Rooms.module.css"


const ROOMS = [
    {
        name: "React",
        path: "/rooms/react-1"
    },
    {
        name: "Java",
        path: "/rooms/java-1"
    },
    {
        name: "C++",
        path: "/rooms/c++-1"
    }
]

export default function Rooms() {
  return (
      <div className={classes.container}> 
        {ROOMS.map(r=> <Room name={r.name} path={r.path}/>)}
      </div>
     
  )
}
