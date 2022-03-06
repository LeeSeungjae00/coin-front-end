import React from 'react'
import styles from './nowBuyCoin.module.scss';
import Giraffe from './giraffe.svg';
import Coin from './Bitcoin.svg';


export default function NowBuyCoin() {
    return (
        <div className={styles.container}>
            <div className="colFlex">
                <div className="rowFlex">
                    <img src={Coin}></img>
                    <div className="colFlex">
                        <p className={styles.coinName}>KRW-BTC</p>
                        <p className={styles.nowPrice}>43,912,410 ₩</p>
                    </div>
                </div>
                <div className="rowFlex"><h1 className={styles.present}>+ 0.12%</h1><p></p></div>
            </div>
            <img className={styles.giraffe} src={Giraffe}></img>
        </div>
    )
}
