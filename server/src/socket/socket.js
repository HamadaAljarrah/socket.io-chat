const {getVisitors, deleteVisitor} = require("./visitors")
const { staticRooms } = require("./chatRooms")
const {users, addUser, removeUser} = require("./users");

module.exports = (io, socket) =>{

    console.log('a user connected');
    // show live visitors
    socket.on("newVisitor", user=>{
        io.emit("newVisitor", getVisitors(user, socket.id))
    })

    socket.on("register", nickName=>{
        addUser(nickName, socket.id);
        console.log(users);

        
    })

    //handle rooms
    socket.on("joinRoom", room =>{
        socket.join(room);
        console.log(`user with id ${socket.id} has joined room ${room}`);
        //getRoomsToSend(io.sockets.adapter.rooms);
        staticRooms.forEach(r => {
            if(r.name === room){ 
                const [user] = users.filter(u => u.id === socket.id)
                if (!r.members.includes(user))r.members.push(user)
                
                
            }
        })
        staticRooms.forEach(r => console.log(r.members))
        
    });

    socket.on("message", ({room , message}) =>{
        socket.to(room).emit("message", message);
        staticRooms.forEach(r => {
            if(r.name === room){
                const [user] = users.filter(u=> u.id === socket.id)
                console.log("user name is : " + user.name);
                r.messages.push({user: user.name, message: message})
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
        removeUser(socket.id)
        console.log('user disconnected');
        console.log(users);
    })

}