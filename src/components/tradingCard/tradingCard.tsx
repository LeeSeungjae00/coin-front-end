import React from 'react'
import styles from './tradingCard.module.scss'
import Giraffe from '../../svgs/giraffe.svg';
import GiraffeSad from '../../svgs/giraffe_sad.svg'
import { Link, Element, Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll'

interface TradingCardType{
    title : String
    buyTime : String
    sellTime : String
    profit : String | Number
    key : number
}

export default function TradingCard({title, buyTime, sellTime, profit, key} : TradingCardType) {
    const checkProfit = (profit: String | Number) => {
        if (typeof profit === "string") {
            return [,<img width="51" height="47" src={Giraffe}></img>];
        }
        if (profit > 0) {
            return [styles.plus,<img width="51" height="47" src={Giraffe}></img>];
        } else {
            return [styles.minus,<img width="51" height="47" src={GiraffeSad}></img>];
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
                    {
                        checkProfit(profit)[1]
                    }
                </div>
                <div className={`${styles.price} ${checkProfit(profit)[0]}`}>
                    {profit}
                </div>
            </div>
            <Element name={key.toString()} className={key.toString()}></Element>
        </div>
    )
}
