let {joinRoom, messaging, leaveRoom, onlineUsers, disconnect} = require("./events")



module.exports = (io, socket)=>{
    console.log(`a user with id: ${socket.id} has connected`);
    socket.on("joinRoom", (data)=> joinRoom(io, socket, data));
    socket.on("messaging", (data) => messaging(io, socket, data,"messaging"));
    socket.on("leaveRoom", (data) => leaveRoom(io, socket, data));
    socket.on("disconnect", () => disconnect(io, socket));
}


