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
                π΅ {coinMarket}  <p className={nowPrice >= openingPrice ? styles.up : styles.down}>&nbsp;</p>
            </div>
            <div className={styles.marketInfo}>
                <p><b>β</b> {coinMarket}μ νμ¬ {nowPrice}β© μΌλ‘ μ λ λ³΄λ€ {(nowPrice - openingPrice)}{nowPrice >= openingPrice ? "β© μμΉμ€" : "β© νλ½μ€"}μ΄μμ.</p>
                <p><b>β</b> {Math.abs(preRise)}% {preRise > 0 ? "μμΉ μ" : "νλ½μ"} κ΅¬λ§€ κ°λ₯ν΄μ</p>
                <p><b>β</b> {Math.abs(moneyRise)}β© {preRise > 0 ? "μμΉ μ" : "νλ½μ"} κ΅¬λ§€ κ°λ₯ν΄μ</p>
            </div>

        </div>
    )
}
