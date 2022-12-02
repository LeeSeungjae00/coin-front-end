import React from "react";
import styles from "./adminPage.module.scss";

export default function AdminPage() {
  return (
    <>
      <div className={styles.strategyList}>
        <div className={styles.strategy}>
          <div className={styles.cardHead}>
            <p>1️⃣ BASIC</p>
            <p>⭐️</p>
          </div>
          <hr></hr>
        </div>
        <div className={styles.strategy}></div>
        <div className={styles.strategy}></div>
        <div className={styles.strategy}></div>
      </div>
    </>
  );
}
