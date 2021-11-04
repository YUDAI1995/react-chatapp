import React, { useEffect } from "react";
import { useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../store";
import { Socket } from "socket.io-client";
import { io } from "socket.io-client";
import { getRandomID, getCurrentTime } from "../models/function";

import styles from "../styles/Form.module.scss";

interface FormProp {
  socket: Socket;
}

export const Form: React.FC<FormProp> = ({ socket }) => {
  const textInputRef = useRef<HTMLInputElement>(null);

  const dispath = useDispatch();
  const user = useSelector((state: RootState) => state.UserReducer.data);

  const newTextSubmitHandler = async (event: React.FormEvent) => {
    event.preventDefault();

    const port = 3001;
    const socket = io(`http://localhost:${port}`);
    socket.on("connect", () => console.log("connect"));
    const room = user.room ? user.room : "Gest Room";

    if (textInputRef.current!.value !== "") {
      const sendMessage = {
        room: room,
        user: user.user,
        message: textInputRef.current!.value,
        time: getCurrentTime(),
      };

      await socket.emit("sendMessage", sendMessage);
    }
    textInputRef.current!.value = "";
  };

  useEffect(() => {
    socket.on("receveMessage", (data: ChatList) => {
      console.log(data);

      dispath({
        type: "ADD_CHAT",
        payload: {
          list: {
            id: getRandomID(),
            user: data.user,
            message: data.message,
            time: data.time,
          },
        },
      });
    });
  }, [socket]);
  return (
    <form onSubmit={newTextSubmitHandler} className={`${styles.form} inner`}>
      <input
        type="text"
        id="chat"
        ref={textInputRef}
        placeholder="message"
        className={styles.input}
      />
      <button type="submit" className={styles.submitBtn} id="submitBtn">
        add
      </button>
    </form>
  );
};
