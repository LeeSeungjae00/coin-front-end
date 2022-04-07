import React from 'react'
import styles from './tradingCard.module.scss'
import Giraffe from '../../svgs/giraffe'

interface TradingCardType{
    title : String
    buyTime : String
    sellTime : String
    profit : number
}

export default function TradingCard({title, buyTime, sellTime, profit} : TradingCardType) {
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
                <div className={styles.price}>
                    +300 ₩
                </div>
            </div>
        </div>
    )
}
