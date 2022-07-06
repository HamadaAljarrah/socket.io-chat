exports.messaging = (io, socket, data, eventName) =>{
    socket.to(data.room).emit(eventName, data);
    console.log(`user with id ${socket.id} has sended message ${data.message} to room ${data.room}`);
}
