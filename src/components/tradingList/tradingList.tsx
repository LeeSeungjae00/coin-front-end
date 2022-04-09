import axios from 'axios'
import React from 'react'
import useInfinityScroll from '../../hooks/useInfinityScroll'
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

    const makeTradingList = (data : any, RefDiv : any) => {
        const tradingList = data.pages.map(
            (val : any) => val.history.map(
                (his : any) => {
                    return <TradingCard
                        title={his.market}
                        buyTime={his.butPrice}
                        sellTime={his.sellBalance}
                        profit={his.sellBalance === null ? 
                            "지금 보유중 입니다": 
                            his.sellBalance - his.buyBalance}
                    ></TradingCard>
        }))

        tradingList.push(RefDiv);

        return tradingList
    }

    return (
        <div className={styles.tradingList}>
            <div className={
                styles.tradingListBox
            }>
                {/* <TradingCar title={data.}></TradingCard> */}
                {
                    makeTradingList(data,RefDiv)
                }
            </div>
             <div className={
                styles.chartBox
            }>
                
            </div>
        </div>
    )
}
