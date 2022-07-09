import React, {useEffect, useState} from 'react'
import { MessageScreen } from '../MessageScreen/MessageScreen';
import { MessageForm } from '../MessageForm/MessageForm';
import { SideBar } from '../SideBar/SideBar';
import classes from "./Chat.module.css"
import { UseRegister } from '../RegisterFrom/register-context';
import { useChat } from './chat-context';
import { socket } from '../../socket';

export const Chat = () => {
    const {messages, users ,addMessage, addUser, leaveRoom} = useChat();
    const {room, nickname, setDisconnect} = UseRegister();

    useEffect(()=>{
        socket.on("messaging", (msg)=> addMessage(msg))
        socket.on("joinRoom", (info)=> addMessage(info))
        socket.on("leaveRoom", (info)=> {addMessage(info); console.log(users);})
        socket.on("onlineUsers", (user)=> addUser(user))
    }, [socket])
    useEffect(()=>{
        setDisconnect(true);
    },[])

    
    const leaveHandler = ()=>{
        const user = {room:room , name:nickname}
        leaveRoom(user)
    }


    return (
        <div className={classes.container}>
            <SideBar users={users} className={classes.sidebar}/>
            <div className={classes.chatscreen}>
                <div className={classes.chatscreenHeader}>
                    <h1>Welcome in {room}, {nickname}!</h1>
                    <button onClick={leaveHandler}>Leave</button>
                </div>
                <MessageScreen messages={messages} className={classes.messages} />
                <MessageForm />
            </div>
        </div>
    )
}


