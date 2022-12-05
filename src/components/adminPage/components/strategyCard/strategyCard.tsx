import React from "react";
import styles from "./strategyCard.module.scss";
import Giraffe from "../../svgs/giraffe.svg";
import lockSvg from "../../svgs/lock.svg";

interface StrategyCardProp {
  name: string;
  lock: boolean;
  dangerousness: number;
  stability: number;
  yield: number;
}

export default function StrategyCard(props: StrategyCardProp) {
  return (
    <div className={styles.strategy}>
      <div className={styles.cardHead}>
        <p>{props.name}</p>
        {props.lock ? <p>✔</p> : <p>🔒</p>}
      </div>
      <hr></hr>
      <img src={props.lock ? Giraffe : lockSvg} alt="" />
      <div className={styles.desc}>
        <p>위험성: {`⭐️`.repeat(props.dangerousness)}</p>
        <p>안정성: {`⭐️`.repeat(props.stability)}</p>
        <p>수익률: {`⭐️`.repeat(props.yield)}</p>
      </div>
    </div>
  );
}
