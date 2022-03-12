import React, { useCallback } from 'react'
import styles from './mainPanel.module.scss';
import Giraffe from '../../svgs/giraffe.svg';
import GiraffeExiting from '../../svgs/giraffe_exiting.svg'
import GiraffeSleep from '../../svgs/giraffe_sleep.svg'
import GiraffeSad from '../../svgs/giraffe_sad.svg'
import GiraffeManbung from '../../svgs/giraffe_manbung.svg'
import Coin from '../../svgs/Bitcoin.svg';
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

export default function MainPanel({ market, nowPrice, pre }: NowBuyCoinType) {
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
        },[]
    )

    const checkPer = useCallback((pre: number) => {
        if (pre > 0) return styles.plus;
        if (pre < 0) return styles.minus;
        return styles.zero;
    }, [])

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
            <GiraffeImg speed={market === "" ? 0 : ((pre * -1) + 4) * 0.055 + 0.02} alt="giraffe" src={selectGiraffe(market, pre)}></GiraffeImg>
        </div>
    )
}
