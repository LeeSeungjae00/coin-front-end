import axios from 'axios';
import React, { useEffect } from 'react'
import { useQuery } from 'react-query';
import { getCoinState } from '../api/coinApi';
import InfoPanel from '../components/infoPanel'
import { useGetCoinState } from '../hooks/queryHooks';

interface CoinStateType {
    market: string
}

export default function CoinState({ market }: CoinStateType) {
    const { data, isLoading, refetch } = useGetCoinState(market);

    return (
        <InfoPanel {...data}></InfoPanel>
    )
}
