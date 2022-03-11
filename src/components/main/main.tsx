import React from 'react'
import NowBuyCoin from '../../container/nowBuyCoin'
import Table from '../table'
import styles from './main.module.scss'


export default function Main() {
    return (
        <div className={styles.main}>
            <NowBuyCoin></NowBuyCoin>
            <div className="rowFlex">
                <Table 
                    thead = {["Market", "Target Price"]}
                    tbody = {[["KRW-BTC", "123,123,123"],["KRW-BTC", "123,123,123"]]}
                ></Table>
                <div style={{ width : '100%' }}>qwe</div>
            </div>
        </div>
    )
}
