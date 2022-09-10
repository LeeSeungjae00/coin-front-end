import {
  API_GET_COIN_STATE,
  API_GET_TRADING_HISTORY,
  API_GET_BUY_COIN,
  API_GET_COIN_LIST,
} from "./../constant/api";
import axios from "axios";

export const getCoinState = (market: string) =>
  axios.get(API_GET_COIN_STATE, {
    params: {
      market,
    },
  });

export const getTradingHistory = (pageParam: String) =>
  axios.get(API_GET_TRADING_HISTORY, {
    params: {
      index: pageParam,
    },
  });

export const getBuyCoin = () => axios.get(API_GET_BUY_COIN);

export const getTodayCoinList = () => axios.get(API_GET_COIN_LIST);
