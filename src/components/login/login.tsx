import React from "react";
import Input from "../common/input";
import styles from "./login.module.scss";

export default function Login() {
  return (
    <div className={styles.login}>
      <form className={styles.loginForm}>
        <Input aria-label="ID"></Input>
        <Input aria-label="P/W"></Input>
        <button className={`${styles.button} ${styles.colorful}`}>login</button>
        <hr />
        <button className={`${styles.button}`}>contect</button>
      </form>
    </div>
  );
}
