import React from "react";
import MainPanel from "../components/mainPanel/mainPanel";
import { useGetNowBuyCoin } from "../hooks/queryHooks";

export default function NowBuyCoin() {
  const { data, isLoading, isError } = useGetNowBuyCoin();

  if (isError)
    return (
      <>
        정보 갱신 실패. <br></br>새로고침을 해주세요
      </>
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
