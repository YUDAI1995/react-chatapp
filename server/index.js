"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
var express_1 = __importDefault(require("express"));
var cors_1 = __importDefault(require("cors"));
var http = __importStar(require("http"));
var socket_io_1 = require("socket.io");
var path = __importStar(require("path"));
var app = express_1["default"]();
app.use(cors_1["default"]());
var server = http.createServer(app);
var io = new socket_io_1.Server(server, {
    cors: {
        // for DEV
        // origin: "http://localhost:3000",
        origin: "https://y1995-chatapp.herokuapp.com/",
        methods: ["GET", "POST"]
    }
});
var port = process.env.PORT || 3001;
app.use(express_1["default"].static(path.join(__dirname, "../client/build")));
io.on("connection", function (socket) {
    console.log("user " + socket.id + " connected");
    socket.on("joinRoom", function (data) {
        socket.join(data);
        console.log("user with ID" + socket.id + " joined room " + data);
    });
    socket.on("sendMessage", function (message) {
        socket.to(message.room).emit("receveMessage", message);
    });
    socket.on("disconnect", function () {
        console.log("user disconnected.", socket.id);
    });
});
app.get("*", function (req, res) {
    res.sendFile(path.join(__dirname, "../client/build/index.html"));
});
server.listen(port, function () {
    console.log("Running server on port " + port);
});
