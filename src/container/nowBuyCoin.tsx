import React from "react";
import MainPanel from "../components/mainPanel/mainPanel";
import { useGetNowBuyCoin } from "../hooks/queryHooks";

export default function NowBuyCoin() {
  const { data, isLoading } = useGetNowBuyCoin();

  if (isLoading) return <>loading</>;
  return (
    <MainPanel
      market={data.market}
      nowPrice={data.nowPrice}
      pre={data.pre}
    ></MainPanel>
  );
}
