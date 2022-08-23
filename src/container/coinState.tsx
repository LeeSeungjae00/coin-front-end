import axios from 'axios';
import React, { useEffect } from 'react'
import { useQuery } from 'react-query';
import { getCoinState } from '../api/coinApi';
import InfoPanel from '../components/infoPanel'

interface CoinStateType {
    market: string
}

export default function CoinState({ market }: CoinStateType) {
    const { data, isLoading, refetch } = useQuery(
        ["coinState", market],
        getCoinState(market),
        { refetchInterval: 10000 });

    return (
        <InfoPanel {...data}></InfoPanel>
    )
}
