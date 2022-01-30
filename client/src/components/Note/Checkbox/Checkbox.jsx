import React from "react";
import styles from "./Checkbox.module.css";

export default function Checkbox({ status, id, changeStatus }) {
  return (
    <div>
      <label
        className={status ? styles.customCheckboxes : styles.customCheckbox}
      >
        <input type="checkbox" onClick={() => changeStatus(id)} />
        <div className={styles.checkbox}>
          <svg
            className={styles.checkmark}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
          >
            <path
              fill="#ffffff"
              d="M20.285 2l-11.285 11.567-5.286-5.011-3.714 3.716 9 8.728 15-15.285z"
            />
          </svg>
        </div>
        Видимость на сайте
      </label>
    </div>
  );
}
