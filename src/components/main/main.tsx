import React from 'react'
import NowBuyCoin from '../nowBuyCoin/nowBuyCoin';
import styles from './main.module.scss'

export default function Main() {
    return (
        <div className = {styles.main}>
            <NowBuyCoin></NowBuyCoin>
            <div style = {{width : "100%", height : "50px", backgroundColor : "#FFF"}}></div>
        </div>
    )
}
