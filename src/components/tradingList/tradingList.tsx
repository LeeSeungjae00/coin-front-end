import axios from 'axios'
import React from 'react'
import { useInView } from 'react-intersection-observer'
import { useInfiniteQuery } from 'react-query'
import useInfinityScroll from '../../hooks/infinityScrollHooks'
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

    return (
        <div className={styles.tradingList}>
            <div className={
                styles.tradingListBox
            }></div>
             <div className={
                styles.chartBox
            }>
                {
                    data && 

                    data.pages.map(
                        (val) => val.history.map(
                            (his : any) => {
                                return <p
                                style={{height : "5rem"}}
                                 key = {his.buyDate}>{his.market}</p>;
                    }))
                }
                
            </div>
        </div>
    )
}
