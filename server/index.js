const express = require("express");
const app = express();
const path = require('path');
const http = require("http");
const cors = require("cors");
const { Server } = require("socket.io");
app.use(cors());

const server = http.createServer(app);
const io = new Server(server, {
  cors: {
    origin: "*",
    methods: ["GET", "POST"],
  },
});

const port = process.env.PORT || 3001;
app.use(express.static(path.join(__dirname, "../client/build")));

io.on("connection", (socket) => {
  console.log(`user ${socket.id} connected`);

  socket.on("joinRoom", (data) => {
    socket.join(data);
    console.log(`user with ID${socket.id} joined room ${data}`);
  });

  socket.on("sendMessage", (message) => {
    socket.to(message.room).emit("receveMessage", message);
  });

  socket.on("disconnect", () => {
    console.log("user disconnected.", socket.id);
  });
});

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "../client/build/index.html"));
});

server.listen(port, () => {
  console.log(`Running server on port ${port}`);
});
