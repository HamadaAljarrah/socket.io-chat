exports.leaveRoom = (io, socket, data)=>{
    socket.leave(data.room);
    socket.to(data.room).emit('leaveRoom', {message:`${data.name} has left`});
    console.log(`user with id ${socket.id} has left room ${data.room}`);
}