import axios from 'axios'
import React from 'react'
import { InfiniteData } from 'react-query'
import useInfinityScroll from '../../hooks/useInfinityScroll'
import { historyType, tradingHistoryApiType } from '../../types/axiosType'
import TradingCard from '../tradingCard/tradingCard'
import styles from './tradingList.module.scss'
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
} from 'chart.js';
import { Line } from 'react-chartjs-2';


ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
);

export const options = {
    responsive: true,
    plugins: {
        legend: {
            position: 'top' as const,
        },
        title: {
            display: true,
            text: '내 잔고 차트',
        },
    },
};




export default function TradingList() {
    const { data, status, RefDiv } = useInfinityScroll((pageParam: String) => {
        return axios.get('/tradingHistory', {
            params: {
                index: pageParam
            }
        })
    })

    if (status === "loading") return <>loading</>

    const [labels, setLabels] = React.useState(['January', 'February', 'March', 'April', 'May', 'June', 'July']);

    const [chartData, setCharData] = React.useState({
        labels,
        datasets: [
            {
                label: 'KRW',
                data: labels.map(() => Math.random()),
                borderColor: 'rgb(255, 99, 132)',
                backgroundColor: 'rgba(255, 99, 132, 0.5)',
            }
        ],
    });

    const makeTradingList = (data: InfiniteData<tradingHistoryApiType>, RefDiv: JSX.Element) => {

        const tradingList = data.pages.map(
            (val: tradingHistoryApiType) => val.history.map(
                (his: historyType) => {
                    return <TradingCard
                        title={his.market}
                        buyTime={his.buyDate}
                        sellTime={his.sellDate}
                        profit={his.sellBalance === null ?
                            "ing" :
                            his.sellBalance - his.buyBalance}
                    ></TradingCard>
                }))


        return [tradingList, RefDiv]
    }

    return (
        <div className={styles.tradingList}>
            <div className={
                styles.tradingListBox
            }>
                {
                    data && makeTradingList(data, RefDiv)
                }
            </div>
            <div className={
                styles.chartBox
            }>
                <Line options={options} data={chartData} />
            </div>
        </div>
    )
}

