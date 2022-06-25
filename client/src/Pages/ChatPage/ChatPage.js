import React from 'react'
import ChatForm from '../../Components/Chat/ChatForm'
import ChatScreen from '../../Components/Chat/ChatScreen'
import Container from "../../Components/Container/Container"
import classes from "./ChatPage.module.css"
export const ChatPage = ({roomName}) => {
  return (
    <>
      <Container><h1>{roomName}</h1></Container>
      <Container className={classes.container}>
          <ChatScreen></ChatScreen>
          <ChatForm></ChatForm>
      </Container>
    </>

  )
}
