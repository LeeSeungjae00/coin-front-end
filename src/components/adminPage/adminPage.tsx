import React from "react";
import styles from "./adminPage.module.scss";
import Giraffe from "../../svgs/giraffe.svg";
import StrategyCard from "./components/strategyCard";
import Slider from "@mui/material/Slider";
import { Checkbox, FormControlLabel } from "@mui/material";

export default function AdminPage() {
  return (
    <>
      <div className={styles.strategyList}>
        <StrategyCard
          dangerousness={1}
          lock={true}
          name="1️⃣ BASIC"
          stability={3}
          yield={1}
        ></StrategyCard>
        <StrategyCard
          dangerousness={3}
          lock={true}
          name="2️⃣ STANDARD"
          stability={1}
          yield={3}
        ></StrategyCard>
        <StrategyCard
          dangerousness={4}
          lock={false}
          name="3️⃣ PREMIUM"
          stability={1}
          yield={5}
        ></StrategyCard>
        <StrategyCard
          dangerousness={3}
          lock={false}
          name="4️⃣ ADVANCED"
          stability={3}
          yield={4}
        ></StrategyCard>
      </div>
      <div className={styles.options}>
        하한선 (%)
        <div className={styles.flexBox}>
          <div className={styles.sliderContainer}>
            <Slider></Slider>
          </div>
          <FormControlLabel control={<Checkbox />} label="하한선 없음" />
        </div>
        상한선 (%)
        <div className={styles.flexBox}>
          <div className={styles.sliderContainer}>
            <Slider></Slider>
          </div>
          <FormControlLabel control={<Checkbox />} label="상한선 없음" />
        </div>
      </div>
    </>
  );
}
