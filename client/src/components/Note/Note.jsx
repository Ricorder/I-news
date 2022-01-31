import React, { useEffect } from "react";
import Checkbox from "./Checkbox/Checkbox";
import Input from "./Input/Input";
import styles from "./Note.module.css";
import { ReactComponent as BasketIcon } from "./basket.svg";
import { useState } from 'react';

export default function Note({ title, link, status, id, deleteNote, changeStatus, saveLink }) {
  const [input, setInput] = useState(link);

  useEffect(() => {
    setInput(link);
  }, [link]);
  
  return (
    <div className={styles.maindiv}>
      <div className={styles.seconddiv}>
        <h3 className={styles.margin}>{title}</h3>
        <BasketIcon onClick={() => deleteNote(id)} />
      </div>
      <Input
        title={"Вставить ссылку"}
        input={input}
        setInput={setInput}
        link={link}
        id={id}
        saveLink={saveLink}
      />
      <br />
      <Checkbox status={status} changeStatus={changeStatus} id={id} />
    </div>
  );
}
