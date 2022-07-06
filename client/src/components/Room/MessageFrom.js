import React, { useState, useEffect, useRef } from 'react'
import { useNavigate } from 'react-router-dom';
import { socket } from '../../socket';
import { UseRegister } from '../RegisterFrom/register-context';

export const MessageFrom = () => {
    const {room, nickname} = UseRegister();
    const messageRef = useRef(null);
    const [messages, setMessages] = useState([]);
    const navigate = useNavigate()


    const sendHandler = ()=>{
        const data = {
            auther: "Hamada",
            message: messageRef.current.value,
            room: "Java",
            time: new Date().getHours().toString().padStart(2, '0') + ":" + new Date().getMinutes().toString().padStart(2 ,'0'),
            date: new Date(Date.now())
        }
        messageRef.current.value = "";
        socket.emit("messaging", data );
        setMessages(prev => [...prev, data]);
    }
    useEffect(()=>{
        socket.on("messaging", (msg)=> setMessages(prev => [...prev, msg]))
        socket.on("joinRoom", (info)=> setMessages(prev => [...prev, info]))
        socket.on("leaveRoom", (info)=> setMessages(prev => [...prev, info]))
    },[socket])

    const leaveHander = ()=>{
        socket.emit("leaveRoom", {room: room, name: nickname})
        navigate("/");
    }

    return (
        <div>
            <input type="text" placeholder='write a message...' ref={messageRef}/>
            <button onClick={sendHandler}>Send</button>
            <button onClick={leaveHander}>Leave</button>

            {messages.map(msg=><li>{msg.message}</li>)}
        </div>
    )
}
