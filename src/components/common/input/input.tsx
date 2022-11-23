import React from "react";
import styles from "./input.module.scss";

export default function Input() {
  return (
    <div className={styles.input} data-lable="test-lable">
      <input type="text" />
    </div>
  );
}
