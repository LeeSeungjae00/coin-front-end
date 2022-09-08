import axios from "axios";
import React from "react";
import { useQuery } from "react-query";
import { getTodayCoinList } from "../api/coinApi";
import Table from "../components/table";
import { todayCoinType } from "../types/axiosType";

interface TodayCoinTable {
  onRowClick: (rowVal: string) => void;
}

export default function TodayCoinTable({ onRowClick }: TodayCoinTable) {
  const { data, isLoading } = useQuery<todayCoinType[], Error>(
    "todayCoin",
    () => getTodayCoinList().then((res) => res.data)
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
