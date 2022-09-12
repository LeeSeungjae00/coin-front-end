import { useQuery } from "react-query";
import { getBuyCoin, getCoinState, getTodayCoinList } from "../api/coinApi";
import { todayCoinType } from "../types/axiosType";

export function useGetCoinState(market: string) {
  return useQuery(
    ["coinState", market],
    () => getCoinState(market).then((res) => res.data),
    { refetchInterval: 10000 }
  );
}

export function useGetNowBuyCoin() {
  return useQuery("nowBuyCoin", () => getBuyCoin().then((res) => res.data[0]), {
    refetchInterval: 10000,
  });
}

export function useGetTodayCoinTable() {
  return useQuery<todayCoinType[], Error>("todayCoin", () =>
    getTodayCoinList().then((res) => res.data)
  );
}
