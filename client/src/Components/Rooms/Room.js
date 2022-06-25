import React, { useEffect, useState } from 'react'
import { Link  } from 'react-router-dom'
import Alert from '../Alert/Alert';
import classes from "./Rooms.module.css"
import { socket } from '../../scoket';


export default function Room({name, path}) {
  const [joined, setJoined] = useState(false);
  const [alert, setAlert] = useState(false);
  const joinHandler =()=>{
    setJoined(true);
    setAlert(true);
    socket.emit("joinRoom", name);
  }
  useEffect(() => {
    const timeout = setTimeout(() => setAlert(false), 4000);
    return () => clearTimeout(timeout);
   },[alert]);

  return (
      <div className={classes.wrapper}>
        {alert && <Alert message={"You have joined the room " + name}/>}
        <h3 className={classes.roomName}>{name}</h3>
        {joined?
        <Link className={classes.openLink} to={`${name}`}>Open</Link>
        : 
        <button 
          className={classes.joinButton}
          onClick={joinHandler}
        >Join</button>

        }
      </div>
  )
}
