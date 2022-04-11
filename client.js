const { io } = require("socket.io-client");

const socket = io("ws://192.168.1.100:8080");

socket.on("hello", (arg) => {
    console.log(arg);
});

socket.emit("howdy", "stranger");
