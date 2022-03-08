import React, { useCallback } from 'react'
import styles from './nowBuyCoin.module.scss';
import Giraffe from './giraffe.svg';
import GiraffeExiting from './giraffe_exiting.svg'
import GiraffeSleep from './giraffe_sleep.svg'
import GiraffeSad from './giraffe_sad.svg'
import GiraffeManbung from './giraffe_manbung.svg'
import Coin from './Bitcoin.svg';
import styled from 'styled-components'


interface NowBuyCoinType {
    market: string,
    nowPrice: number,
    pre: number,
}


const GiraffeImg = styled.img<{ speed: number }>`
    animation: updown ${props => props.speed}s cubic-bezier(0.4, 0, 1, 1) 0s infinite alternate; 
    top: 0px;
    position: relative;
    @keyframes updown {
        0% {
            top: 0px;
        }
    
        100% {
            top: 55px; 
        }
    }
`

export default function NowBuyCoin({ market, nowPrice, pre }: NowBuyCoinType) {
    const selectGiraffe = useCallback(
        (market: string, pre: number) => {
            if (market === "") return GiraffeSleep
            if (pre > 1.5) {
                return GiraffeExiting
            } else if (pre >= 0) {
                return Giraffe
            } else if (pre > -1) {
                return GiraffeSad
            } else {
                return GiraffeManbung
            }
        },
        [GiraffeExiting, Giraffe],
    )

    const checkPer = useCallback((pre : number) => {
        if(pre > 0) return styles.plus;
        if(pre < 0) return styles.minus;
        return styles.zero;
    },[])

    return (
        <div className={`${styles.container} ${market === "" && styles.nonMarket} `}>
            <div className="colFlex">
                <div className="rowFlex">
                    <img src={Coin} alt="bit-coin"></img>
                    <div className="colFlex">
                        <p className={styles.coinName}>{market}</p>
                        <p className={styles.nowPrice}>{nowPrice} ₩</p>
                    </div>
                </div>
                <div className="rowFlex"><h1 className={`${styles.present} ${checkPer(pre)}`}>
                    {pre >= 0 ? "+" : "-"} {Math.abs(pre)} %</h1><p></p></div>
            </div>
            {/* <img className={styles.giraffe} alt="giraffe" src={selectGiraffe(market, pre)}></img> */}
            <GiraffeImg speed={market === "" ? 0 : ((pre * -1) + 4) * 0.075 + 0.05} alt="giraffe" src={selectGiraffe(market, pre)}></GiraffeImg>
        </div>
    )
}
