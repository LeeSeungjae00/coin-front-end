import axios from 'axios'
import React from 'react'
import { useInView } from 'react-intersection-observer'
import { useInfiniteQuery } from 'react-query'
import useInfinityScroll from '../../hooks/useInfinityScroll'
import styles from './tradingList.module.scss'

export default function TradingList() {
    const {data, status, RefDiv} = useInfinityScroll((pageParam : String) => {
        return axios.get('/tradingHistory',{
            params : {
                index : pageParam
            }
        })
    })

    if(status === "loading") return <>loading</>

    const makeTradingList = (data : any, RefDiv : any) => {
        const tradingList = data.pages.map(
            (val : any) => val.history.map(
                (his : any) => {
                    return <p
                    style={{height : "6rem"}}
                     key = {his.buyDate}>{his.market}</p>;
        }))

        tradingList.push(RefDiv);

        return tradingList
    }

    return (
        <div className={styles.tradingList}>
            <div className={
                styles.tradingListBox
            }></div>
             <div className={
                styles.chartBox
            }>
                {
                    makeTradingList(data,RefDiv)
                }
            </div>
        </div>
    )
}
