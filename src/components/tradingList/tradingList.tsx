import axios from 'axios'
import React from 'react'
import { useInView } from 'react-intersection-observer'
import { useInfiniteQuery } from 'react-query'
import styles from './tradingList.module.scss'

export default function TradingList() {
    const {ref, inView} = useInView();
    const {
        data,
        error, 
        fetchNextPage, 
        hasNextPage, 
        isFetching,
        isFetchingNextPage,
        status
    } = useInfiniteQuery<any>(
        "getTradingList",
        async (_) => {
            const res = await axios.get('/tradingHistory',{
                params : {
                    index : _.pageParam
                }
            })
            return res.data;
        },
        {
            getNextPageParam : (lastPage, _pages) => {
                return lastPage.nextIndex;
            }
        }
    )

    React.useEffect(() => {
        console.log(inView)
        if(inView) fetchNextPage();
        return () => {}
    }, [inView])

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
                <div ref= {ref}></div>
            </div>
        </div>
    )
}
