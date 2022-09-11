import React from "react";
import InfoPanel from "../components/infoPanel";
import { useGetCoinState } from "../hooks/queryHooks";

interface CoinStateType {
  market: string;
}

export default function CoinState({ market }: CoinStateType) {
  const { data, isLoading, refetch } = useGetCoinState(market);

  return <InfoPanel {...data}></InfoPanel>;
}
