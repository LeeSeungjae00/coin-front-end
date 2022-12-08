import React, { useState } from "react";
import styles from "./adminPage.module.scss";
import Giraffe from "../../svgs/giraffe.svg";
import StrategyCard from "./components/strategyCard";
import Slider from "@mui/material/Slider";
import { Alert, Button, Checkbox, FormControlLabel } from "@mui/material";

const marks = [
  {
    value: 3,
    label: "3%",
  },
  {
    value: 10,
    label: "10%",
  },
  {
    value: 20,
    label: "20%",
  },
  {
    value: 30,
    label: "30%",
  },
  {
    value: 100,
    label: "100%",
  },
];

export default function AdminPage() {
  const [upLine, setUpLine] = useState<{
    val: number | number[];
    disable: boolean;
  }>({
    val: 10,
    disable: false,
  });
  const [downLine, setDownLine] = useState<{
    val: number | number[];
    disable: boolean;
  }>({
    val: 10,
    disable: false,
  });

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
            <Slider
              disabled={downLine.disable}
              marks={marks}
              valueLabelDisplay="auto"
              value={downLine.val}
              onChange={(e, value) => {
                setDownLine({
                  ...downLine,
                  val: value,
                });
              }}
              min={3}
              max={100}
            ></Slider>
          </div>
          <FormControlLabel
            control={
              <Checkbox
                onChange={(e, checked) => {
                  setDownLine({
                    ...downLine,
                    disable: checked,
                  });
                }}
                value={downLine.disable}
              />
            }
            label="하한선 없음"
          />
        </div>
        <Alert sx={{ mb: 3 }}>
          하한선을 낮출 수록 안정성은 높아지지만 수익률은 낮아질 수 있습니다.
        </Alert>
        상한선 (%)
        <div className={styles.flexBox}>
          <div className={styles.sliderContainer}>
            <Slider
              disabled={upLine.disable}
              marks={marks}
              valueLabelDisplay="auto"
              value={upLine.val}
              onChange={(e, value) => {
                setUpLine({
                  ...upLine,
                  val: value,
                });
              }}
              min={3}
              max={100}
            ></Slider>
          </div>
          <FormControlLabel
            control={
              <Checkbox
                onChange={(e, checked) => {
                  setUpLine({
                    ...upLine,
                    disable: checked,
                  });
                }}
                value={upLine.disable}
              />
            }
            label="상한선 없음"
          />{" "}
        </div>
        <Alert>
          상한선을 낮출 수록 안정성은 낮아지지만 수익률은 높아질 수 있습니다.
        </Alert>
        <div>
          <Button sx={{ float: "right", mt: 1 }} variant="contained">
            저장
          </Button>
        </div>
      </div>
    </>
  );
}
