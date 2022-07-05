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

//middlewares
app.use(cors())
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())



//room routes
const roomRoutes  = require("./routes/roomRoutes");
app.use("/", roomRoutes);


//socket
const socketHandler = require("./socket/socket")
io.on("connection", (socket)=> socketHandler(io, socket) )


//server listner
const PORT = process.env.PORT || 8080;
server.listen(PORT, ()=>console.log(`Listning on port *:${PORT}`));


