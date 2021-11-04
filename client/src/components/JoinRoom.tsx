import React, { useRef } from "react";
import { Socket } from "socket.io-client";
import { useDispatch } from "react-redux";
import { Footer } from "./Footer";
import styles from "../styles/JoinRoom.module.scss";

interface JoinRoomProp {
  socket: Socket;
}

export const JoinRoom: React.FC<JoinRoomProp> = ({ socket }) => {
  const inputUserRef = useRef<HTMLInputElement>(null);
  const inputroomRef = useRef<HTMLInputElement>(null);

  const dispath = useDispatch();

  const joinRoomHandler = (event: React.FormEvent) => {
    event.preventDefault();
    const user = inputUserRef.current!.value;
    const room = inputroomRef.current!.value;

    if (user !== "" && room !== "") {
      socket.emit("joinRoom", room);

      dispath({
        type: "JOIN_ROOM",
        payload: {
          data: {
            id: socket.id,
            user: user,
            room: room,
          },
        },
      });
      inputUserRef.current!.value = "";
      inputroomRef.current!.value = "";
    }
  };
  return (
    <>
      <main className={styles.joinRoom}>
        <section className={`${styles.joinRoomSection}`}>
          <h1 className={styles.title}>Please Enter a room</h1>
          <form className={styles.joinRoomForm} onSubmit={joinRoomHandler}>
            <div className={styles.inputWrapper}>
              <input
                id="user"
                className={`${styles.input} ${styles.inputUser}`}
                ref={inputUserRef}
                type="text"
                placeholder="Please enter user name"
              />
              <label htmlFor="user" className={styles.label}>
                UserName
              </label>
            </div>
            <div className={styles.inputWrapper}>
              <input
                id="room"
                className={`${styles.input} ${styles.inputRoom}`}
                ref={inputroomRef}
                type="text"
                placeholder="Please enter room"
              />
              <label htmlFor="room" className={styles.label}>
                Room
              </label>
            </div>
            <button onClick={joinRoomHandler} className={styles.submitBtn}>
              Enter
            </button>
          </form>
        </section>
      </main>
      <Footer />
    </>
  );
};
