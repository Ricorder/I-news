import React, { useState } from "react";
import Modal from "../Modal/Modal";
import styles from "./Empty.module.css";
import { ReactComponent as PlusIcon } from "./plus.svg";

export default function Empty({ addNote }) {
  const [modalActive, setModalActive] = useState(false);
  return (
    <div className={styles.maindiv}>
      <PlusIcon onClick={() => setModalActive(true)} />
      <Modal
        active={modalActive}
        setActive={setModalActive}
        addNote={addNote}
      />
    </div>
  );
}
