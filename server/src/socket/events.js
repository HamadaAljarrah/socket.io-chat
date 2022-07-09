let users = [];

const joinRoom = (io, socket, data)=>{
    socket.join(data.room);
    users.push({name: data.name, id: socket.id})
    io.emit("onlineUsers", users)
    socket.to(data.room).emit('joinRoom', {
        message:`${data.name} has joined`,
        users: users,
        joinMessage: true,
        time: new Date().getHours().toString().padStart(2, '0') + ":" + new Date().getMinutes().toString().padStart(2 ,'0')
        });
    console.log(`user with id ${socket.id} has joined room ${data.room}`);
}


const messaging = (io, socket, data) =>{
    socket.to(data.room).emit("messaging", data);
    console.log(`user with id ${socket.id} has sended message ${data.message} to room ${data.room}`);
}


const leaveRoom = (io, socket, data)=>{
    socket.leave(data.room);
    users = users.filter(user=> user.id !== socket.id)
    socket.to(data.room).emit('leaveRoom', {
        message:`${data.name} has left`,
        joinMessage: true,
        time: new Date().getHours().toString().padStart(2, '0') + ":" + new Date().getMinutes().toString().padStart(2 ,'0')
    });
    io.emit("onlineUsers", users)
    console.log(`user with id ${socket.id} has left room ${data.room}`);
}


const disconnect = (io, socket)=>{
    let user = users.find(user=> user.id === socket.id)
    users = users.filter(user=> user.id !== socket.id)
    io.emit("onlineUsers", users)
    if(user) io.emit("leaveRoom", {message: `${user.name} has left`})
    console.log("user has left");
}




module.exports = {disconnect, joinRoom, messaging, leaveRoom, users}

