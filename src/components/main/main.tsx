import React from "react";
import CoinState from "../../container/coinState";
import NowBuyCoin from "../../container/nowBuyCoin";
import TodayCoinTable from "../../container/todayCoinTable";
import styles from "./main.module.scss";

export default function Main() {
  const [marketInfo, setMarketInfo] = React.useState<string>("");
  const onRowClick = (rowVal: string) => {
    setMarketInfo(rowVal);
  };
  return (
    <div className={styles.main}>
      <NowBuyCoin></NowBuyCoin>
      <div className="rowFlex">
        <TodayCoinTable onRowClick={onRowClick} />
        {marketInfo === "" ? (
          <div style={{ width: "100%" }}></div>
        ) : (
          <CoinState market={marketInfo}></CoinState>
        )}
      </div>
    </div>
  );
}
