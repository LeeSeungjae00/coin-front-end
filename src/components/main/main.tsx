import React from 'react'
import NowBuyCoin from '../../container/nowBuyCoin'
import styles from './main.module.scss'


export default function Main() {
    return (
        <div className={styles.main}>
            <NowBuyCoin></NowBuyCoin>            
        </div>
    )
}
