let users = [];

const joinRoom = (io, socket, data)=>{
    socket.join(data.room);
    users.push({name: data.name, id: socket.id})
    io.emit("onlineUsers", users)
    socket.to(data.room).emit('joinRoom', {message:`${data.name} has joined`, users: users});
    console.log(`user with id ${socket.id} has joined room ${data.room}`);
}


const messaging = (io, socket, data, eventName) =>{
    socket.to(data.room).emit(eventName, data);
    console.log(`user with id ${socket.id} has sended message ${data.message} to room ${data.room}`);
}


const leaveRoom = (io, socket, data)=>{
    socket.leave(data.room);
    users = users.filter(user=> user.id !== socket.id)
    socket.to(data.room).emit('leaveRoom', {message:`${data.name} has left`});
    console.log(`user with id ${socket.id} has left room ${data.room}`);
}


const disconnect = (io, socket)=>{
    let user = users.find(user=> user.id === socket.id)
    users = users.filter(user=> user.id !== socket.id)
    //console.log(user.name + " has left");
}




module.exports = {disconnect, joinRoom, messaging, leaveRoom, users}

