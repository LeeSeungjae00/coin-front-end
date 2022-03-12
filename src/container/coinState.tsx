import axios from 'axios';
import React from 'react'
import { useQuery } from 'react-query';
import InfoPanel from '../components/infoPanel'

interface CoinStateType {
    market: string
}

export default function CoinState({ market }: CoinStateType) {
    const { data, isLoading } = useQuery(["coinState", market], () =>
        axios.get(`/coinState`, {
            params: {
                market
            }
        }).then(res => res.data), {
        refetchInterval: 10000
    }
    );
    return (
        <InfoPanel {...data}></InfoPanel>
    )
}
