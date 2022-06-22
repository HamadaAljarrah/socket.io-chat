const express = require("express");
const http = require("http");
const { emit } = require("process");
const socketIO = require("socket.io");

const app = express();
const server = http.createServer(app);
const io = socketIO(server, {
    cors: {
        origin: "*"
    }
})

const {getVisitors, deleteVisitor} = require("./visitors")
// const { handleJoinRoom } = require("./chatRooms")

app.get("/", (req, res)=>{
    res.sendFile(__dirname + '/index.html');
})




io.on("connection", (socket)=>{
    console.log('a user connected');
    // show live visitors
    socket.on("newVisitor", user=>{
        io.emit("newVisitor", getVisitors(user, socket.id))
    })

    //handle rooms
    socket.on("joinRoom", room =>{
        socket.join(room);
        console.log(`user with id ${socket.id} has joined room ${room}`)
    });

    socket.on("message", ({room , message}) =>{
        socket.to(room).emit("message", message);
        console.log(`user with id ${socket.id} has sended message ${message} to room ${room}`)
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
})


const PORT = process.env.PORT || 8080;
server.listen(PORT, ()=>console.log(`Listning on port *:${PORT}`));