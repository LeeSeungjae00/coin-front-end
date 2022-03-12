import React from 'react'

interface InfoPanelType {
    nowPrice : number,
    preRise : number,
    moneyRise : number,
}

export default function InfoPanel({nowPrice, preRise, moneyRise} : InfoPanelType) {
    return (
        <div style={{width : "100%"}}>
            <div>{nowPrice}</div>
            <div>{preRise}</div>
            <div>{moneyRise}</div>
        </div>
    )
}
