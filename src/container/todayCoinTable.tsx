import React from "react";
import Table from "../components/table";
import { useGetTodayCoinTable } from "../hooks/queryHooks";
import { todayCoinType } from "../types/axiosType";

interface TodayCoinTable {
  onRowClick: (rowVal: string) => void;
}

export default function TodayCoinTable({ onRowClick }: TodayCoinTable) {
  const { data, isLoading, isError } = useGetTodayCoinTable();

  if (isError)
    return (
      <>
        정보 갱신 실패. <br></br>새로고침을 해주세요
      </>
    );
  if (isLoading) return <>loading</>;

  return (
    <Table
      onRowClick={onRowClick}
      thead={["Market", "Target Price"]}
      tbody={(data as todayCoinType[]).map((val: todayCoinType) => [
        val.coinMarket,
        val.targetPrice + " ₩",
      ])}
    />
  );
}
