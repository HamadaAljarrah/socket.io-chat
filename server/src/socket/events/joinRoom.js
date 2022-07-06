exports.joinRoom = (io, socket, data)=>{
    socket.join(data.room);
    socket.to(data.room).emit('joinRoom', {message:`${data.name} has joined`});
    console.log(`user with id ${socket.id} has joined room ${data.room}`);
}

