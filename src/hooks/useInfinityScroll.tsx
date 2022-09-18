import React, { useEffect } from 'react'
import { useInView } from 'react-intersection-observer'
import { useInfiniteQuery } from 'react-query'
import axios, { AxiosResponse } from 'axios'
import { tradingHistoryApiType } from '../types/axiosType'


type infinityQueryType = (pageParam: String) => Promise<AxiosResponse<any, any>>;

export default function useInfinityScroll(infinityQuery: infinityQueryType) {
    const { ref, inView } = useInView();
    const {
        data,
        error,
        fetchNextPage,
        hasNextPage,
        isFetching,
        isFetchingNextPage,
        status,
        isLoading
    } = useInfiniteQuery<tradingHistoryApiType>(
        "getTradingList",
        async ({ pageParam = 0 }) => {
            const res = await infinityQuery(pageParam);
            return res.data;
        },
        {
            getNextPageParam: (lastPage, _pages) => {
                return lastPage.nextIndex ?? false;
            }
        }
    )


    useEffect(() => {
        if (inView) fetchNextPage();
        return () => { }
    }, [inView])


    return {
        data,
        error,
        fetchNextPage,
        hasNextPage,
        isFetching,
        isFetchingNextPage,
        status,
        RefDiv: <div key="infinityKeyDiv" ref={ref} />,
        isLoading
    }
}
