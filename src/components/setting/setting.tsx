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
        <Alert variant="filled" color="warning"></Alert>
        <Button>저장</Button>
      </form>
    </div>
  );
}
