import axios from 'axios';
import React from 'react'
import { useQuery } from 'react-query';
import Table from '../components/table'
import { todayCoinType } from '../types/axiosType';

export default function TodayCoinTable() {
    const { data, isLoading } = useQuery<todayCoinType[], Error>("todayCoin", () =>
        axios.get("/todayCoinList").then(res => res.data)
    );

    if(isLoading) return <>loading</>

    return (
        <Table
            thead = {["Market", "Target Price"]}
            tbody = {(data as todayCoinType[]).map((val : todayCoinType) => [val.coinMarket, val.targetPrice + " ₩"])}
        />
    )
}
