const express = require("express");
const http = require("http");
const { Server } = require("socket.io");
const cors = require("cors");

const app = express();
const httpServer = http.createServer(app);
const io = new Server(httpServer, {
    cors: {
      origin: "http://localhost:5173",
    },});

app.use(cors());

io.on("connection", (socket) => {
  console.log("A user is connected");

  socket.on("message", (message) => {
    console.log("message fron the frontend" + message);
  });

  socket.emit("message", "server sends e6");
  socket.on("disconnect", () => {
    console.log("A user disconnected");
  });
});

httpServer.listen(3000, () => {
  console.log("server is listning on 3000 port");
});
