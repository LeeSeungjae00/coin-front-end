import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Main from '../components/main'
import TradingList from '../components/tradingList/tradingList'
import Contect from '../components/Contect/contect'


export default function RouterCoinfig() {
    return (
        <Routes>
            <Route path = "/" element={<Main></Main>}></Route>
            <Route path = "/tradingList" element={<TradingList></TradingList>}></Route>
            <Route path = "/contect" element={<Contect></Contect>}></Route>
        </Routes>
    )
}
