import React from "react";
import { useSelector } from "react-redux";
import { RootState } from "../store";
import styles from "../styles/Header.module.scss";

export const Header: React.FC = () => {
  const user = useSelector((state: RootState) => state.UserReducer.data);

  return (
    <header className={styles.header}>
      <h1 className={styles.headTitle}>
        {user.room ? user.room : "Gest Room"}
      </h1>
    </header>
  );
};
