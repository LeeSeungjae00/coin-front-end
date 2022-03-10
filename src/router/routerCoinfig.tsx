import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Main from '../components/main'


export default function RouterCoinfig() {
    return (
        <Routes>
            <Route path = "/" element={<Main></Main>}></Route>
        </Routes>
    )
}
