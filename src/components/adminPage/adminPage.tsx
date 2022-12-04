import React from "react";
import styles from "./adminPage.module.scss";
import Giraffe from "../../svgs/giraffe.svg";

export default function AdminPage() {
  return (
    <>
      <div className={styles.strategyList}>
        <div className={styles.strategy}>
          <div className={styles.cardHead}>
            <p>1️⃣ BASIC</p>
            <p>✔</p>
          </div>
          <hr></hr>
          <img src={Giraffe} alt="" />
          <div className={styles.desc}>
            <p>위험성: ⭐️</p>
            <p>안정성: ⭐️⭐️⭐️</p>
            <p>수익률: ⭐️</p>
          </div>
        </div>
        <div className={styles.strategy}>
          <div className={styles.cardHead}>
            <p>2️⃣ STANDARD</p>
            <p>✔</p>
          </div>
          <hr></hr>
          <img src={Giraffe} alt="" />
          <div className={styles.desc}>
            <p>위험성: ⭐️⭐️⭐️</p>
            <p>안정성: ⭐️⭐️⭐️</p>
            <p>수익률: ⭐️⭐️⭐️</p>
          </div>
        </div>
        <div className={styles.strategy}></div>
        <div className={styles.strategy}></div>
      </div>
    </>
  );
}
