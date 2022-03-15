import React from 'react'

interface InfoPanelType {
    nowPrice : number,
    preRise : number,
    moneyRise : number,
}

export default function InfoPanel({nowPrice, preRise, moneyRise} : InfoPanelType) {
    return (
        <div style={{width : "100%"}}>
            <div>현재가 : {nowPrice}</div>
            <div>상승 퍼센트 : {preRise} %</div>
            <div>상승 원 :{moneyRise} ₩</div>
        </div>
    )
}
