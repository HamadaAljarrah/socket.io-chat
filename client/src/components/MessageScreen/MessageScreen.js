import React from 'react'
import { Message } from './Message'
import classes from "./MessageScreen.module.css"



export const MessageScreen = ({className, messages}) => {

  

  const theClass = className + " " + classes.container
  return (
    <div className={theClass}>
      <div className={classes.messagesWrapper}>
        {messages.map((m,i)=><Message key={i} auther={m.auther} time={m.time} message={m.message}/>)}
      </div>
    </div>
  )
}


