const {messaging} = require("./events/messaging")
const {joinRoom} = require("./events/joinRoom")
const {leaveRoom} = require("./events/leaveRoom")



module.exports = (io, socket)=>{
    console.log(`a user with id: ${socket.id} has connected`);
    socket.on("joinRoom", (data)=> joinRoom(io, socket, data));
    socket.on("messaging", (data) => messaging(io, socket, data,"messaging"));
    socket.on("leaveRoom", (data) => leaveRoom(io, socket, data));
    //socket.on("disconnect", (data) => messaging(io, socket, data,"messaging"));

}