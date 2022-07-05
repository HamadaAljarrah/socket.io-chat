const {getVisitors, deleteVisitor} = require("./visitors")
const { staticRooms } = require("./chatRooms")

module.exports = (io, socket) =>{

    console.log('a user connected');
    // show live visitors
    socket.on("newVisitor", user=>{
        io.emit("newVisitor", getVisitors(user, socket.id))
    })

    //handle rooms
    socket.on("joinRoom", room =>{
        socket.join(room);
        console.log(`user with id ${socket.id} has joined room ${room}`);
        //getRoomsToSend(io.sockets.adapter.rooms);
        staticRooms.forEach(r => {
            if(r.name === room){
                if (r.members.includes(socket.id)) return;
                r.members.push(socket.id)
            }
        })
        staticRooms.forEach(r => console.log(r.members))
        
    });

    socket.on("message", ({room , message}) =>{
        socket.to(room).emit("message", message);
        staticRooms.forEach(r => {
            if(r.name === room){
                r.messages.push({user: socket.id, message: message})
            }
        })
        console.log(`user with id ${socket.id} has sended message ${message} to room ${room}`);
        staticRooms.forEach(r => console.log(r.messages))
    });

    socket.on("typing",({room})=>{
        socket.to(room).emit("message", "Someone is Typing!");

    });

    socket.on("stopTyping", ({room})=>{
        socket.to(room).emit("message", "");
    });




    socket.on("disconnect", ()=>{
        io.emit("deleteVisitor", deleteVisitor(socket.id))
        console.log('user disconnected');
    })

}