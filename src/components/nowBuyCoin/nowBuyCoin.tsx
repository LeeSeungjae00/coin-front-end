import React from 'react'
import styles from './nowBuyCoin.module.scss';
import Giraffe from './giraffe.svg';
import Coin from './Bitcoin.svg';

interface NowBuyCoinType {
    market: string,
    nowPrice : number,
    per : string,
}


export default function NowBuyCoin({ market, nowPrice, per } : NowBuyCoinType) {
    return (
        <div className={styles.container}>
            <div className="colFlex">
                <div className="rowFlex">
                    <img src={Coin} alt="bit-coin"></img>
                    <div className="colFlex">
                        <p className={styles.coinName}>{market}</p>
                        <p className={styles.nowPrice}>{nowPrice} ₩</p>
                    </div>
                </div>
                <div className="rowFlex"><h1 className={styles.present}>
                    {(+per) > 0 ? "+": "-"} {Math.abs(+per)} %</h1><p></p></div>
            </div>
            <img className={styles.giraffe} alt="giraffe" src={Giraffe}></img>
        </div>
    )
}
