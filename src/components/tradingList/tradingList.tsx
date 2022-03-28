import React from 'react'
import styles from './tradingList.module.scss'

export default function TradingList() {
    return (
        <div className={styles.tradingList}>
            <div className={
                styles.tradingListBox
            }></div>
             <div className={
                styles.chartBox
            }></div>
        </div>
    )
}
