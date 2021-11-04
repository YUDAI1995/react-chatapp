import React from "react";
import styles from "../styles/Footer.module.scss";

export const Footer: React.FC = () => {
  return (
    <footer className={styles.footer}>
      <div className="inner">&copy; 2021 YUDAI1995</div>
    </footer>
  );
};
