import React from 'react'
import styles from './tradingCard.module.scss'
import Giraffe from '../../svgs/giraffe'

interface TradingCardType{
    title : String
    buyTime : String
    sellTime : String
    profit : String | Number
}

export default function TradingCard({title, buyTime, sellTime, profit} : TradingCardType) {
    const checkProfit = (profit: String | Number) => {
        if (typeof profit === "string") {
            return ;
        }
        if (profit > 0) {
            return styles.plus;
        } else {
            return styles.minus;
        }
    }
    return (
        <div className = {styles.tradingCard}>
            <div className={styles.titleAndTime}>
                <div className={styles.title}>
                    {title}
                </div>
                <div className={styles.time}>
                    {buyTime}
                </div>
                <div className={styles.time}>
                    {sellTime}
                </div>
            </div>
            <div className={styles.giraffAndPrice}>
                <div className={styles.giraffRapper}>
                    <Giraffe width="51" height="47"></Giraffe>
                </div>
                <div className={`${styles.price} ${checkProfit(profit)}`}>
                    {profit}
                </div>
            </div>
        </div>
    )
}
