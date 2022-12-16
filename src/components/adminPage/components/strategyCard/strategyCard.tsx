import React from "react";
import styles from "./strategyCard.module.scss";
import Giraffe from "../../../../svgs/giraffe.svg";
import GiraffeStar from "../../../../svgs/giraffe_exiting.svg";
import lockSvg from "../../../../svgs/lock.svg";
import { ToastContainer, toast } from "react-toastify";

interface StrategyCardProp {
  name: "basic" | "standard" | "premium" | "advanced";
  lock: boolean;
  dangerousness: number;
  stability: number;
  yield: number;
  selected: {
    basic: boolean;
    standard: boolean;
    premium: boolean;
    advanced: boolean;
  };
  setSelected: React.Dispatch<
    React.SetStateAction<{
      basic: boolean;
      standard: boolean;
      premium: boolean;
      advanced: boolean;
    }>
  >;
}

const nameMap = new Map([
  ["basic", "1️⃣ BASIC"],
  ["standard", "2️⃣ STANDARD"],
  ["premium", "3️⃣ PREMIUM"],
  ["advanced", "4️⃣ ADVANCED"],
]);

export default function StrategyCard(props: StrategyCardProp) {
  return (
    <div
      onClick={(e) => {
        console.log("test");
        if (!props.lock) {
          toast("🥲잠금 해제를 위해 결제가 필요합니다!", {
            position: "top-right",
            autoClose: 2000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
          });
        } else {
          props.setSelected((selected) => {
            const init = {
              basic: false,
              standard: false,
              premium: false,
              advanced: false,
            };
            return { ...init, [props.name]: true };
          });
        }
      }}
      className={`${styles.strategy} ${
        props.selected[props.name] && styles.selected
      }`}
    >
      <div className={styles.cardHead}>
        <p>{nameMap.get(props.name)}</p>
        {props.lock ? <p>✔</p> : <p>🔒</p>}
      </div>
      <hr></hr>
      <img
        src={
          props.lock
            ? props.selected[props.name]
              ? GiraffeStar
              : Giraffe
            : lockSvg
        }
        alt=""
      />
      <div className={styles.desc}>
        <p>위험성: {`⭐️`.repeat(props.dangerousness)}</p>
        <p>안정성: {`⭐️`.repeat(props.stability)}</p>
        <p>수익률: {`⭐️`.repeat(props.yield)}</p>
      </div>
    </div>
  );
}
