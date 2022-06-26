const express = require("express");
const http = require("http");
const socketIO = require("socket.io");
const cors = require("cors");
const bodyParser = require("body-parser")

const app = express();
const server = http.createServer(app);
const io = socketIO(server, {
    cors: {
        origin: "*"
    }
})

app.use(cors())
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())



const {getVisitors, deleteVisitor} = require("./visitors")
const { staticRooms } = require("./chatRooms")

app.get("/", (req, res)=>{
    res.sendFile(__dirname + '/index.html');
})


//rooms CRUD
app.get("/rooms", (req, res)=>{
    res.json(staticRooms)
})
app.post("/rooms", (req, res)=>{
    const room = req.body;
    staticRooms.push(room);
    res.json(staticRooms)
    //add error handling logic later
})
app.put("/rooms/:name", (req, res)=>{
    const room  = req.params.name;
    const values = req.body;
    console.log(values);
    const theRoom = staticRooms.filter(r=> r.name === room);
    res.json(theRoom);
    //add error handling logic later
})
app.delete("/rooms/:name", (req, res)=>{
    const room  = req.params.name;
    let index;
    index = staticRooms.forEach((r,i) => r.name === room ? index = i : null);
    staticRooms.splice(index,1);
    res.json(staticRooms);
    //add error handling logic later

})


// socket
io.on("connection", (socket)=>{
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
        console.log(`user with id ${socket.id} has sended message ${message} to room ${room}`);
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