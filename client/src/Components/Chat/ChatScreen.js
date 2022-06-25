import React from 'react'
import { useParams } from 'react-router-dom'
import { useRooms } from '../../Context/room-context';
import classes from "./Chat.module.css"

export default function ChatScreen() {
  let { room } = useParams();
  const {rooms} = useRooms();

  const [theRoom] = rooms.filter(r => r.name === room);
  console.log(theRoom);
  return (
    <>
      <div className={classes.chatScreen}>
        <ul>
          {theRoom.messages.map(msg=><li key={msg}>{msg}</li>)}
        </ul>
      </div>
    </>

  )
}
