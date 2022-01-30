import React from "react";
import styles from "./Header.module.css";

export default function Header({saveNotes}) {
  return (
    <div className={styles.header}>
      <h2>Настройка ссылок на соцсети</h2>
      <button className={styles.button} onClick={() => saveNotes()}>
        СОХРАНИТЬ
      </button>
    </div>
  );
}
