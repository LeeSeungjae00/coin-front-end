import React from 'react'
import { useQuery } from 'react-query';
import styles from './main.module.scss'
import axios from 'axios'
import NowBuyCoin from '../../components/nowBuyCoin/nowBuyCoin';

export default function Main() {
    const { data } = useQuery("nowBuyCoin", () =>
        axios.get("/buyCoin").then(res => res.data[0]),{
            refetchInterval : 10000
        }
    );

    return (
        <div className={styles.main}>
            <NowBuyCoin 
                market = {data.market}
                nowPrice = {data.nowPrice}
                pre = {data.pre}></NowBuyCoin>
        </div>
    )
}
