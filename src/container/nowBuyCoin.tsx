import React from 'react'
import MainPanel from '../components/mainPanel/mainPanel'
import { useQuery } from 'react-query';
import axios from 'axios'

export default function NowBuyCoin() {
    const { data, isLoading } = useQuery("nowBuyCoin", () =>
        axios.get("/buyCoin").then(res => res.data[0]),{
            refetchInterval : 10000
        }
    );
    return (
        <MainPanel
            market = {data.market}
            nowPrice = {data.nowPrice}
            pre = {data.pre}></MainPanel>
    )
}
