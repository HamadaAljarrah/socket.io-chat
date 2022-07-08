

// const leaveHander = (socket, logout, navigate, room, nickname)=>{
//     socket.emit("leaveRoom", {room: room, name: nickname})
//     logout();
//     navigate("/");
// }

// const eventsListner = (socket, setUsers, setMessages)=>{
//     socket.on("messaging", (msg)=> setMessages(prev => [...prev, msg]))
//     socket.on("joinRoom", (info)=> setMessages(prev => [...prev, info]))
//     socket.on("leaveRoom", (info)=> setMessages(prev => [...prev, info]))
//     socket.on("onlineUsers", (users)=> setUsers(users))
// }

// const sendHandler = (e, socket , messageRef, setMessages, nickname, room)=>{
//         e.preventDefault();
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
// }

// export {leaveHander, eventsListner, sendHandler}