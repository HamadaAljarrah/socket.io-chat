import React, { useRef } from 'react'
import {socket} from '../../socket'
import { useChat } from '../Chat/chat-context'
import { UseRegister } from '../RegisterFrom/register-context'
import classes from "./MessageForm.module.css"

export const MessageForm = ({className}) => {
  const theClass = className + " " + classes.container
  const {sendMessage} = useChat();
  const {room, nickname} = UseRegister()
  const inputRef = useRef();

  const sendHandler = (e)=>{
    e.preventDefault();
    const data = {
      nickname: nickname,
      room: room,
      messageText: inputRef.current.value,
      id: socket.id
    }
    sendMessage(data)
    inputRef.current.value = "";
  }

  return (
      <form onSubmit={sendHandler} className={theClass}>
          <input ref={inputRef} autoFocus type="text" placeholder='write a message...'/>
          <button  type='submit' >Send</button>
      </form>
  )
}
