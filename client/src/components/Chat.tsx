import { useSelector } from "react-redux";
import { RootState } from "../store";
import { Socket } from "socket.io-client";
import classNames from "classnames/bind";

import styles from "../styles/Chat.module.scss";

interface ChatProp {
  socket: Socket;
}

export const Chat: React.FC<ChatProp> = ({ socket }) => {
  const chatLists = useSelector((state: RootState) => state.ChatReducer.lists);
  const user = useSelector((state: RootState) => state.UserReducer.data);

  // 本人のメッセージか判定
  const cx = classNames.bind(styles);
  const chatClass = (author: string) => {
    return cx({
      chat: true,
      isAuthor: author === user.user,
    });
  };

  return (
    <div className="inner">
      <ul className={styles.chatList}>
        {chatLists.map((list) => (
          <li key={list.id} className={chatClass(list.user)}>
            <div className={styles.contentWrapper}>
              <p className={styles.user}>{list.user}</p>
              <div className={styles.content}>
                <p className={styles.message}>{list.message}</p>
                <p className={styles.time}>{list.time}</p>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};
