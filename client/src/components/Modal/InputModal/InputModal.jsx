import React from "react";
import styles from "./InputModal.module.css";

export default function InputModal({ title, setInput, input }) {
  const changeInputHandler = ({ target: { value } }) => {
    setInput(value);
  };

  return (
    <>
      <label className={styles.margincolor} htmlFor="inputModal">
        {title}
      </label>
      <br />
      <input
        value={input}
        id="inputModal"
        onChange={changeInputHandler}
        className={styles.inputText}
        type="text"
      />
    </>
  );
}
