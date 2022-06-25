import React, { useRef, useState } from 'react'
import { useParams } from 'react-router-dom';
import {socket} from "../../scoket"
import classes from "./Chat.module.css"


export default function ChatForm() {
  let {room} = useParams();
  const [message, setMessage] = useState({});

  const inputRef = useRef(null);
  const sendHandler = (e)=>{
    e.preventDefault();
    setMessage({message:inputRef.current.value, name: room});
    console.log(message);
    inputRef.current.value = "";
    socket.emit("message", message)
  }


  return (
    <form className={classes.form}>
      <input ref={inputRef} placeholder='Write your message...' type="text" />
      <button type="submit" onClick={sendHandler} >Send</button>
    </form>
  )
}
