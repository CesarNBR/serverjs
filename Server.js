const { Server } = require("socket.io");

const io = new Server(8080);

io.on("connection", (socket) => {
    socket.emit("hello", "world");

    socket.on("howdy", (arg) => {
        console.log(arg);
    });
});

