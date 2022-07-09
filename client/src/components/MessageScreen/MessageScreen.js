import React from 'react'
import { Message } from './Message'
import classes from "./MessageScreen.module.css"
import { socket } from '../../socket'


export const MessageScreen = ({className, messages}) => {

  console.log(messages);
  const theClass = className + " " + classes.container
  let messageClass;
  return (
    <div className={theClass}>
      <div className={classes.messagesWrapper}>
        {messages.map((m,i)=>{
          if (m.id === socket.id && !m.join){
            messageClass = classes.messageClassSelf
          } else if(m.id !== socket.id && m.joinMessage){
            messageClass = classes.messageJoin
          } else {
            messageClass = classes.messageClassOthers
          } 

          return <Message messageClass={messageClass} key={i} auther={m.auther} time={m.time} message={m.message}/>
        })}
      </div>
    </div>
  )
}


