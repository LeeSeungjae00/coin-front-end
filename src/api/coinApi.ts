import axios from "axios";

export const getCoinState = (market: string) =>
  axios.get(`/coinState`, {
    params: {
      market,
    },
  });

export const getTradingHistory = (pageParam: String) =>
  axios.get("/tradingHistory", {
    params: {
      index: pageParam,
    },
  });

// export const getBuyCoin = () => (

// )
