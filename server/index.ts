import * as express from "express";
import * as http from "http";
import * as socketio from "socket.io";
import { Server } from "socket.io";
import * as path from "path";
import * as cors from "cors";

const app: express.Express = express();
app.use(cors());

const server: http.Server = http.createServer(app);

const io: socketio.Server = new Server(server, {
  cors: {
    // for DEV
    //origin: "http://localhost:3000",
    origin: "https://y1995-chatapp.herokuapp.com",
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
