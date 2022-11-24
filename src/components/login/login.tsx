import React from "react";
import Input from "../common/input";
import styles from "./login.module.scss";

export default function Login() {
  return (
    <div className={styles.login}>
      <form className={styles.loginForm}>
        <Input></Input>
        <hr />
      </form>
    </div>
  );
}
