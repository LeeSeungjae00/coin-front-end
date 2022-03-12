import axios from 'axios'
import React from 'react'
import { useQuery } from 'react-query'
import CoinState from '../../container/coinState'
import NowBuyCoin from '../../container/nowBuyCoin'
import TodayCoinTable from '../../container/todayCoinTable'
import InfoPanel from '../infoPanel'
import styles from './main.module.scss'


export default function Main() {
    const [marketInfo, setMarketInfo] = React.useState<string>('')
    const onRowClick= (rowVal : string) => {
        setMarketInfo(rowVal)
    }
    
    return (
        <div className={styles.main}>
            <NowBuyCoin></NowBuyCoin>
            <div className="rowFlex">
                <TodayCoinTable onRowClick={onRowClick}/>
                {marketInfo === "" ? 
                <div style={{width : '100%'}}></div> : 
                <CoinState market={marketInfo}></CoinState>}
                
            </div>
        </div>
    )
}
