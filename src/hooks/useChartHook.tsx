import React from 'react'

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
import { InfiniteData } from 'react-query';
import { tradingHistoryApiType } from '../types/axiosType';


ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
);

export default function useChartHook(data : InfiniteData<tradingHistoryApiType> | undefined) {
    const [labels, setLabels] = React.useState(['']);
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
    const options = {
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
    React.useEffect(() => {
        const labelArray: React.SetStateAction<string[]> = []
        const dataArray: React.SetStateAction<number[]> = []
        data && data.pages.map(page => 
            page.history.forEach(tradingInfo => {
                labelArray.push(tradingInfo.market)
                dataArray.unshift(tradingInfo.sellBalance)
            })
        );
        setLabels(labelArray)
        setCharData({
            labels,
            datasets: [
                {
                    label: 'KRW',
                    data: dataArray,
                    borderColor: 'rgb(255, 99, 132)',
                    backgroundColor: 'rgba(255, 99, 132, 0.5)',
                }
            ],
        })
    }, [data])
    return {
        options,
        chartData
    }
}
