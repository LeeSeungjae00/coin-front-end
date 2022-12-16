import React from "react";
import Input from "../common/input";
import styles from "./setting.module.scss";
import { FieldValues, useForm } from "react-hook-form";
import { Alert, Button, TextField } from "@mui/material";

export default function Setting() {
  return (
    <div className={styles.setting}>
      <form className={styles.settingForm}>
        <TextField
          value={"123456789010"}
          label="UPBIT API Token"
          type={"password"}
        ></TextField>
        <TextField
          value={"qwieajnvnoqijlzksj"}
          label="Slack API Token"
          type={"password"}
        ></TextField>
        <Alert variant="filled" color="warning">
          UPBIT 토큰은 매수 매도 및 코인 정보 가져오기 위함입니다.<br></br>{" "}
          입금이나 출금에 사용하지 않으므로 해당 기능은 제외 하여도 무방합니다.
        </Alert>
        <Button>저장</Button>
      </form>
    </div>
  );
}
