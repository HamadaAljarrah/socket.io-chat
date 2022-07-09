import React from 'react'
import { Chat } from '../../components/Chat/Chat'
import { SimpleChat } from '../../components/Chat/SimpleChat'
import classes from "./ChatPage.module.css"
export const ChatPage = () => {
  return (
    <div className={classes.container}>
      <Chat/>
      {/* <SimpleChat/> */}
    </div>
    
  )
}
