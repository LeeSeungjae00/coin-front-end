import React from "react";
import MainPanel from "../components/mainPanel/mainPanel";
import { useQuery } from "react-query";
import { getBuyCoin } from "../api/coinApi";

export default function NowBuyCoin() {
  const { data, isLoading } = useQuery(
    "nowBuyCoin",
    () => getBuyCoin().then((res) => res.data[0]),
    {
      refetchInterval: 10000,
    }
  );

  if (isLoading) return <>loading</>;
  return (
    <MainPanel
      market={data.market}
      nowPrice={data.nowPrice}
      pre={data.pre}
    ></MainPanel>
  );
}
