import React from 'react'
import styles from './tradingCard.module.scss'
import Giraffe from '../../svgs/giraffe'

export default function TradingCard() {
    return (
        <div className = {styles.tradingCard}>
            <div className={styles.titleAndTime}>
                <div className={styles.title}>
                    KRW-BTC
                </div>
                <div className={styles.time}>
                    2022-03-26 01:55:16 매수
                </div>
                <div className={styles.time}>
                    2022-03-26 01:55:16 매도
                </div>
            </div>
            <div className={styles.giraffAndPrice}>
                <div className={styles.giraffRapper}>
                <Giraffe width="51" height="47"></Giraffe>
                </div>
                </div>
        </div>
    )
}
