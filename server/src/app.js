const app = require("express")()
const server = require("http").createServer(app);
const cors = require("cors");
const bodyParser = require("body-parser")
const io = require("socket.io")(server, {
    cors: {
        origin: "*"
    }
})


//middlewares
app.use(cors())
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())


//socket
const socketHandler = require("./socket/index")
io.on("connection", (socket)=> socketHandler(io, socket) )


//server listner
const PORT = process.env.PORT || 8080;
server.listen(PORT, ()=>console.log(`Listning on port *:${PORT}`));


