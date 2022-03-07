import React, { useCallback } from 'react'
import styles from './nowBuyCoin.module.scss';
import Giraffe from './giraffe.svg';
import GiraffeExiting from './giraffe_exiting.svg'
import GiraffeSleep from './giraffe_sleep.svg'
import GiraffeSad from './giraffe_sad.svg'
import GiraffeManbung from './giraffe_manbung.svg'
import Coin from './Bitcoin.svg';


interface NowBuyCoinType {
    market: string,
    nowPrice: number,
    pre: number,
}


export default function NowBuyCoin({ market, nowPrice, pre }: NowBuyCoinType) {
    const selectGiraffe = useCallback(
        () => {
            if(market === "") return GiraffeSleep
            if (pre > 1.5) {
                return GiraffeExiting
            } else if(pre >= 0) {
                return Giraffe
            } else if(pre > -1){
                return GiraffeSad
            } else{
                return GiraffeManbung
            }
        },
        [GiraffeExiting, Giraffe],
    )
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
                    {pre >= 0 ? "+" : "-"} {Math.abs(pre)} %</h1><p></p></div>
            </div>
            <img className={styles.giraffe} alt="giraffe" src={selectGiraffe()}></img>
        </div>
    )
}
