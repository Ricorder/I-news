import React from "react";
import styles from "./Input.module.css";

export default function Input({ title, id, saveLink, setInput, input }) {
  const changeInputHandler = ({ target: { value } }) => {
    setInput(value);
    saveLink(id, value);
  };

  return (
    <>
      <label className={styles.margincolor} htmlFor={id}>
        {title}
      </label>
      <br />
      <input
        value={input}
        id={id}
        onChange={changeInputHandler}
        className={styles.inputText}
        type="text"
      />
    </>
  );
}
