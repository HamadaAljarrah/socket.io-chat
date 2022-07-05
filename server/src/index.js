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






const roomRoutes  = require("./routes/roomRoutes");
app.use("/", roomRoutes);



// sockets
const socketHandler = require("./socket/socket")
io.on("connection", (socket)=> socketHandler(io, socket) )


const PORT = process.env.PORT || 8080;
server.listen(PORT, ()=>console.log(`Listning on port *:${PORT}`));


