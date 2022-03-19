import React from 'react'
import styles from './infoPanel.module.scss'

interface InfoPanelType {
    nowPrice: number,
    preRise: number,
    moneyRise: number,
    coinMarket: string,
    openingPrice : number
}

export default function InfoPanel({ coinMarket, nowPrice, preRise, moneyRise, openingPrice }: InfoPanelType) {
    return (
        <div className={styles.infoPanel}>
            <div className={styles.marketName}>
                💵 {coinMarket}  <p className={nowPrice >= openingPrice ? styles.up : styles.down}>&nbsp;</p>
            </div>
            <div className={styles.marketInfo}>
                <p><b>✓</b> {coinMarket}은 현재 {nowPrice}₩ 으로 전날보다 {nowPrice - openingPrice}상승중이에요.</p>
                <p><b>✓</b> {preRise}% 상승시 구매 가능해요</p>
                <p><b>✓</b> {moneyRise}₩ 상승시 구매 가능해요</p>
            </div>

        </div>
    )
}
