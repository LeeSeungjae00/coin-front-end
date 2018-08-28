import { useQuery } from "react-query";
import { getCoinState } from "../api/coinApi";

export function useGetCoinState(market: string) {
    return useQuery(
        ["coinState", market],
        getCoinState(market),
        { refetchInterval: 10000 });

}