import React from "react";
import Input from "../common/input";
import styles from "./login.module.scss";
import { Controller, FieldValues, useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const {
    control,
    handleSubmit,
    formState: { isSubmitting, isDirty, errors },
  } = useForm();
  const navigate = useNavigate();

  const onSubmit = async (data: FieldValues) => {
    await new Promise((r) => setTimeout(r, 1000));
    if (data.id === "admin" && data.pwd === "admin") {
      localStorage.setItem("login", "true");
      navigate("/");
    } else {
      alert("ID, PW 정보가 틀립니다.");
    }
  };

  return (
    <div className={styles.login}>
      <form onSubmit={handleSubmit(onSubmit)} className={styles.loginForm}>
        <Controller
          name="id"
          control={control}
          rules={{ required: "아이디를 입력해주세요" }}
          render={({ field }) => <Input aria-label="ID" {...field} />}
        />
        {errors.id && (
          <small className={styles.errorM} role="alert">
            {errors.id.message as string}
          </small>
        )}
        <Controller
          name="pwd"
          control={control}
          rules={{ required: "비밀번호를를 입력해주세요" }}
          aria-invalid={!isDirty ? undefined : errors.pwd ? "true" : "false"}
          render={({ field }) => (
            <Input aria-label="P/W" type="password" {...field} />
          )}
        />
        {errors.pwd && (
          <small className={styles.errorM} role="alert">
            {errors.pwd.message as string}
          </small>
        )}
        {/* <Input
          aria-label="ID"
          id="id"
          {...register("id", {
            required: "아이디를 입력해주세요",
          })}
        ></Input> */}
        {/* <Input
          id="pw"
          aria-label="P/W"
          type="password"
          {...register("id", {
            required: "비밀번호를 입력해주세요",
          })}
        ></Input> */}
        <button type="submit" className={`${styles.button} ${styles.colorful}`}>
          login
        </button>
        <hr />
        <button style={{ marginBottom: "1rem" }} className={`${styles.button}`}>
          contect
        </button>
        <div className={styles.OAuthContainer}>
          <button
            style={{
              backgroundColor: "white",
              border: "none",
              borderRadius: "100%",
              height: "30px",
              display: "flex",
              width: "30px",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 48 48"
              width="20px"
              height="20px"
            >
              <path
                fill="#FFC107"
                d="M43.611,20.083H42V20H24v8h11.303c-1.649,4.657-6.08,8-11.303,8c-6.627,0-12-5.373-12-12c0-6.627,5.373-12,12-12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C12.955,4,4,12.955,4,24c0,11.045,8.955,20,20,20c11.045,0,20-8.955,20-20C44,22.659,43.862,21.35,43.611,20.083z"
              />
              <path
                fill="#FF3D00"
                d="M6.306,14.691l6.571,4.819C14.655,15.108,18.961,12,24,12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C16.318,4,9.656,8.337,6.306,14.691z"
              />
              <path
                fill="#4CAF50"
                d="M24,44c5.166,0,9.86-1.977,13.409-5.192l-6.19-5.238C29.211,35.091,26.715,36,24,36c-5.202,0-9.619-3.317-11.283-7.946l-6.522,5.025C9.505,39.556,16.227,44,24,44z"
              />
              <path
                fill="#1976D2"
                d="M43.611,20.083H42V20H24v8h11.303c-0.792,2.237-2.231,4.166-4.087,5.571c0.001-0.001,0.002-0.001,0.003-0.002l6.19,5.238C36.971,39.205,44,34,44,24C44,22.659,43.862,21.35,43.611,20.083z"
              />
            </svg>
          </button>
          <button
            style={{
              backgroundColor: "white",
              border: "none",
              borderRadius: "100%",
              height: "30px",
              display: "flex",
              width: "30px",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 48 48"
              width="30px"
              height="30px"
            >
              <path
                fill="#039be5"
                d="M24 5A19 19 0 1 0 24 43A19 19 0 1 0 24 5Z"
              />
              <path
                fill="#fff"
                d="M26.572,29.036h4.917l0.772-4.995h-5.69v-2.73c0-2.075,0.678-3.915,2.619-3.915h3.119v-4.359c-0.548-0.074-1.707-0.236-3.897-0.236c-4.573,0-7.254,2.415-7.254,7.917v3.323h-4.701v4.995h4.701v13.729C22.089,42.905,23.032,43,24,43c0.875,0,1.729-0.08,2.572-0.194V29.036z"
              />
            </svg>
          </button>
          <button
            style={{
              backgroundColor: "white",
              border: "none",
              borderRadius: "100%",
              height: "30px",
              display: "flex",
              width: "30px",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <svg
              fill="#000000"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 30 30"
              width="30px"
              height="30px"
            >
              {" "}
              <path d="M15,3C8.373,3,3,8.373,3,15c0,5.623,3.872,10.328,9.092,11.63C12.036,26.468,12,26.28,12,26.047v-2.051 c-0.487,0-1.303,0-1.508,0c-0.821,0-1.551-0.353-1.905-1.009c-0.393-0.729-0.461-1.844-1.435-2.526 c-0.289-0.227-0.069-0.486,0.264-0.451c0.615,0.174,1.125,0.596,1.605,1.222c0.478,0.627,0.703,0.769,1.596,0.769 c0.433,0,1.081-0.025,1.691-0.121c0.328-0.833,0.895-1.6,1.588-1.962c-3.996-0.411-5.903-2.399-5.903-5.098 c0-1.162,0.495-2.286,1.336-3.233C9.053,10.647,8.706,8.73,9.435,8c1.798,0,2.885,1.166,3.146,1.481C13.477,9.174,14.461,9,15.495,9 c1.036,0,2.024,0.174,2.922,0.483C18.675,9.17,19.763,8,21.565,8c0.732,0.731,0.381,2.656,0.102,3.594 c0.836,0.945,1.328,2.066,1.328,3.226c0,2.697-1.904,4.684-5.894,5.097C18.199,20.49,19,22.1,19,23.313v2.734 c0,0.104-0.023,0.179-0.035,0.268C23.641,24.676,27,20.236,27,15C27,8.373,21.627,3,15,3z" />
            </svg>
          </button>
        </div>
      </form>
    </div>
  );
}
