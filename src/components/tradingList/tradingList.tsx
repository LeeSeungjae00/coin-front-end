import axios from "axios";
import React from "react";
import { InfiniteData } from "react-query";
import { getTradingHistory } from "../../api/coinApi";
import useChartHook from "../../hooks/useChartHook";
import useInfinityScroll from "../../hooks/useInfinityScroll";
import { historyType, tradingHistoryApiType } from "../../types/axiosType";
import TradingCard from "../tradingCard/tradingCard";
import styles from "./tradingList.module.scss";

export default function TradingList() {
  const { data, RefDiv, isLoading} = useInfinityScroll((pageParam: String) => {
    return getTradingHistory(pageParam);
  });
  const Chart = useChartHook(data);


  const makeTradingList = React.useCallback(
    (data: InfiniteData<tradingHistoryApiType>, RefDiv: JSX.Element) => {
      const tradingList = data.pages.map((val: tradingHistoryApiType) =>
        val.history.map((his: historyType) => {
          return (
            <TradingCard
              key={his.id}
              id={his.id}
              title={his.market}
              buyTime={his.buyDate}
              sellTime={his.sellDate}
              profit={
                his.sellBalance === null
                  ? "ing"
                  : his.sellBalance - his.buyBalance
              }
            ></TradingCard>
          );
        })
      );
      return [tradingList, RefDiv];
    },
    []
  );

  if (isLoading) return <>loading</>;

  return (
    <div className={styles.tradingList}>
      <div className={styles.tradingListBox}>
        {data && makeTradingList(data, RefDiv)}
      </div>
      <div className={styles.chartBox}>{Chart}</div>
    </div>
  );
}
