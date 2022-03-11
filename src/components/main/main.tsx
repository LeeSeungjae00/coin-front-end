import React from 'react'
import NowBuyCoin from '../../container/nowBuyCoin'
import TodayCoinTable from '../../container/todayCoinTable'
import styles from './main.module.scss'


export default function Main() {
    return (
        <div className={styles.main}>
            <NowBuyCoin></NowBuyCoin>
            <div className="rowFlex">
                <TodayCoinTable/>
                <div style={{ width : '100%' }}>qwe</div>
            </div>
        </div>
    )
}
