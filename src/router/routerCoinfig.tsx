import React from "react";
import { Route, Routes } from "react-router-dom";
import Main from "../components/main";
import TradingList from "../components/tradingList/tradingList";
import Contect from "../components/Contect/contect";
import {
  ROUTE_ADMIN,
  ROUTE_CONTECT,
  ROUTE_LOGIN,
  ROUTE_MAIN,
  ROUTE_SETTING,
  ROUTE_SIMULATOR,
  ROUTE_TRADING_LIST,
} from "../constant/route";
import Login from "../components/login";
import AdminPage from "../components/adminPage";
import Simulator from "../components/simulator";
import Setting from "../components/setting";

export default function RouterCoinfig() {
  return (
    <Routes>
      <Route path={ROUTE_MAIN} element={<Main></Main>}></Route>
      <Route
        path={ROUTE_TRADING_LIST}
        element={<TradingList></TradingList>}
      ></Route>
      <Route path={ROUTE_CONTECT} element={<Contect></Contect>}></Route>
      <Route path={ROUTE_LOGIN} element={<Login></Login>}></Route>
      <Route path={ROUTE_ADMIN} element={<AdminPage></AdminPage>}></Route>
      <Route path={ROUTE_SIMULATOR} element={<Simulator />}></Route>
      <Route path={ROUTE_SETTING} element={<Setting />}></Route>
    </Routes>
  );
}
