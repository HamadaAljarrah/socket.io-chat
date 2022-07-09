// import React, {useState, useRef, useEffect} from 'react'
// import {UseRegister} from "../RegisterFrom/register-context"
// import { useNavigate } from "react-router-dom";
// import {socket} from "../../socket"

// export const SimpleChat = () => {
//     const {room, nickname, setDisconnect, logout} = UseRegister();
//     const [users, setUsers] = useState([])
//     const [messages, setMessages] = useState([]);
//     const messageRef = useRef(null);
//     const navigate = useNavigate()

//     setDisconnect(true);
//     const sendHandler = (e)=>{
//         e.preventDefault()
//         const data = {
//             auther: nickname,
//             message: messageRef.current.value,
//             room: room,
//             time: new Date().getHours().toString().padStart(2, '0') + ":" + new Date().getMinutes().toString().padStart(2 ,'0'),
//             date: new Date(Date.now())
//         }
//         messageRef.current.value = "";
//         socket.emit("messaging", data );
//         setMessages(prev => [...prev, data]);
//     }


//     useEffect(()=>{
//         socket.on("messaging", (msg)=> setMessages(prev => [...prev, msg]))
//         socket.on("joinRoom", (info)=> setMessages(prev => [...prev, info]))
//         socket.on("leaveRoom", (info)=> setMessages(prev => [...prev, info]))
//         socket.on("onlineUsers", (users)=> setUsers(users))
        
//     // eslint-disable-next-line
//     },[socket]);
//     const leaveHander = ()=>{
//         socket.emit("leaveRoom", {room: room, name: nickname})
//         logout();
//         navigate("/");
//     }

//   return (
//     <form onSubmit={sendHandler}>
//         <input autoFocus type="text" placeholder='write a message...' ref={messageRef}/>
//         <button type='submit' >Send</button>
//         <button onClick={leaveHander}>Leave</button>
//         {messages.map((msg,i)=><li key={i} >{msg.message}</li>)}
//         {users.map((user,i)=><h4 key={i} >{user.name}</h4>)}
//     </form>
//   )
// }
