import React from "react";
import styles from "./input.module.scss";

export default function Input(
  props: React.DetailedHTMLProps<
    React.InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement
  >
) {
  return (
    <div className={styles.input} data-lable={props["aria-label"]}>
      <input type="text" {...props} />
    </div>
  );
}
