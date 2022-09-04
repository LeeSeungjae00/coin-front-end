import axios from "axios";

export const getCoinState = (market: string) => () =>
  axios
    .get(`/coinState`, {
      params: {
        market,
      },
    })
    .then((res) => res.data);

export const getTradingHistory = (pageParam: string) =>
  axios.get("/tradingHistory", {
    params: {
      index: pageParam,
    },
  });
