import React, { useEffect } from 'react'
import { useInView } from 'react-intersection-observer'
import { useInfiniteQuery } from 'react-query'
import axios, { AxiosResponse } from 'axios'

type infinityQueryType = (pageParam : String) =>  Promise<AxiosResponse<any, any>>;

export default function infinityScrollHook(infinityQuery : infinityQueryType) {
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
        async ({ pageParam = 0 }) => {
            const res = await axios.get('/tradingHistory',{
                params : {
                    index : pageParam
                }
            })
            return res.data;
        },
        {
            getNextPageParam : (lastPage, _pages) => {
                return lastPage.nextIndex ?? false;
            }
        }
    )


    useEffect(() => {
        if(inView) fetchNextPage();
        return () => {}
    },[])


    return {
        data,
        error, 
        fetchNextPage, 
        hasNextPage, 
        isFetching,
        isFetchingNextPage,
        status,
        RefDiv : <div ref = {ref} />
    }
}
