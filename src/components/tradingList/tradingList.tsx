import axios from 'axios'
import React from 'react'
import { InfiniteData } from 'react-query'
import useInfinityScroll from '../../hooks/useInfinityScroll'
import { historyType, tradingHistoryApiType } from '../../types/axiosType'
import TradingCard from '../tradingCard/tradingCard'
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

    const makeTradingList = (data : InfiniteData<tradingHistoryApiType>, RefDiv: JSX.Element) => {
        
        const tradingList = data.pages.map(
            (val : tradingHistoryApiType) => val.history.map(
                (his : historyType) => {
                    return <TradingCard
                        title={his.market}
                        buyTime={his.buyDate}
                        sellTime={his.sellDate}
                        profit={his.sellBalance === null ? 
                            "ing": 
                            his.sellBalance - his.buyBalance}
                    ></TradingCard>
        }))


        return [tradingList, RefDiv]
    }

    return (
        <div className={styles.tradingList}>
            <div className={
                styles.tradingListBox
            }>
                {
                    data && makeTradingList(data,RefDiv)
                }
            </div>
             <div className={
                styles.chartBox
            }>
                
            </div>
        </div>
    )
}
