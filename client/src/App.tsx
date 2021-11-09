import React from "react";
import { io } from "socket.io-client";
import { useSelector } from "react-redux";
import { Layout } from "./components/layout/Layout";
import { Chat } from "./components/Chat";
import { Form } from "./components/Form";
import { JoinRoom } from "./components/JoinRoom";
import { RootState } from "./store";

//  ※ for DEV
//const socket = io("http://localhost:3000");

const socket = io("/");
socket.on("connect", () => {
  //success時
  //console.log(socket.id); // x8WIv7-mJelg7on_ALbx
});

socket.on("disconnect", () => {
  // 切断時
  console.log(socket.id); // undefined
});

export const App: React.FC = () => {
  const user = useSelector((state: RootState) => state.UserReducer.data);
  return (
    <div className="App">
      {user.room ? (
        <Layout>
          <Chat socket={socket} />
          <Form socket={socket} />
        </Layout>
      ) : (
        <JoinRoom socket={socket} />
      )}
    </div>
  );
};
