export interface todayCoinType{
    id: string
    coinDate: Date
    coinMarket: string
    volume: number
    targetPrice: number
    rangePer: number
    openingPrice: number
}

export interface historyType {
    buyBalance: number
    buyDate: string
    buyPrice: number
    c_id: string
    id: number
    market: string
    sellBalance: number
    sellDate: string
    sellPrice: number
}

export interface tradingHistoryApiType {
    history : historyType[]
    nextIndex : number
}