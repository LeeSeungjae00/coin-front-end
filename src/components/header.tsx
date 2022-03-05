import React from 'react'
import styles from './header.module.scss'
import logo from 'icon.jpg'

export default function Header() {
    return (
        <div className={styles.header}>
            <div className={styles.logo}>
                <img src="icon.jpg" className="App-icon" alt="logo" />
                <p className={styles.title}>SJ Coin</p>
            </div>
            <menu className={styles.menu}>
                <p className={styles.menuItem}>Main</p>
                <p className={styles.menuItem}>trading List</p>
                <p className={styles.menuItem}>Today's Coin</p>
                <p className={styles.menuItem}>Admin Page</p>
            </menu>
            <div className={styles.navButton}>
                <button className={`${styles.button} ${styles.basic}`}>Login</button>
                <button className={`${styles.button} ${styles.colorful}`}>Contect</button>
            </div>
        </div>
    )
}
