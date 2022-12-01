import React from "react";
import { Link } from "react-router-dom";
import { getInitials } from "../../lib/getInitials";
import { getUserName } from "../../lib/getUser";
import styles from "./header.module.scss";

export default function Header() {
  return (
    <div className={styles.header}>
      <div className={styles.logo}>
        <img src="icon.jpg" className="App-icon" alt="logo" />
        <p className={styles.title}>Coin</p>
      </div>
      <menu className={styles.menu}>
        <Link to="/" className={styles.menuItem}>
          Main
        </Link>
        <Link to="/TradingList" className={styles.menuItem}>
          Trading List
        </Link>
        <Link to="/Admin" className={styles.menuItem}>
          Admin Page
        </Link>
      </menu>
      <div className={styles.navButton}>
        {getUserName() ? (
          <div className={styles.userLogo}>{getInitials(getUserName())}</div>
        ) : (
          <>
            <Link to="/login" className={`${styles.button} ${styles.basic}`}>
              login
            </Link>
            <Link
              to="/contect"
              className={`${styles.button} ${styles.colorful}`}
            >
              Contect
            </Link>
          </>
        )}
      </div>
    </div>
  );
}
