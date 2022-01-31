import React, { useState } from "react";
import Checkbox from '../Note/Checkbox/Checkbox';
import InputModal from './InputModal/InputModal';
import styles from "./Modal.module.css";

export default function Modal({ active, setActive, addNote }) {
  const [inputTitle, setInputTitle] = useState('');
  const [input, setInput] = useState('');
  const [status, setStatus] = useState(false);

  const changeStatus = () => {
    setStatus(prev => !prev);
  };

  const addNoteHandler = () => {
    const regexp = /^((ftp|http|https):\/\/)?(www\.)?([A-Za-zА-Яа-я0-9]{1}[A-Za-zА-Яа-я0-9-]*\.?)*\.{1}[A-Za-zА-Яа-я0-9-]{2,8}(\/([\w#!:.?+=&%@!\-/])*)?/;
    if (regexp.test(input)) {
      const newNote = {
        title: inputTitle,
        link: input,
        status,
      };

      addNote(newNote);
      setInputTitle("");
      setInput("");
      setStatus(false);
      setActive(false);
    }
  }

  return (
    <div
      className={active ? styles.modal_active : styles.modal}
      onClick={() => setActive(false)}
    >
      <div
        className={styles.modal_content}
        onClick={(e) => e.stopPropagation()}
      >
        <div className={styles.maindiv}>
          <InputModal
            title={"Название соцсети"}
            setInput={setInputTitle}
            input={inputTitle}
          />
          <InputModal
            title={"Вставить ссылку"}
            setInput={setInput}
            input={input}
          />
          <br />
          <Checkbox status={status} changeStatus={changeStatus} />
          <button className={styles.button} onClick={() => addNoteHandler()}>
            СОХРАНИТЬ
          </button>
        </div>
      </div>
    </div>
  );
}
