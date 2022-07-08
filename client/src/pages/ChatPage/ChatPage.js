import React from 'react'
import { MessageFrom } from '../../components/Room/MessageFrom'
import classes from "./ChatPage.module.css"
export const ChatPage = () => {
  return (
    <div className={classes.container}>
      <MessageFrom/>
    </div>
    
  )
}
