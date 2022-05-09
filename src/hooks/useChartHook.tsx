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
import { InfiniteData } from 'react-query';
import { tradingHistoryApiType } from '../types/axiosType';
import { Line } from 'react-chartjs-2';
import { Link, Element, Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll'

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
    const [chartData, setCharData] = React.useState({
        labels : [""],
        datasets: [
            {
                label: 'KRW',
                data: [0],
                borderColor: 'rgb(255, 99, 132)',
                backgroundColor: 'rgba(255, 99, 132, 0.5)',
            }
        ],
        dataSetIds : [0]
    });
    const options = {
        responsive: true,
        event : ['click'],
        onClick : (evt : any, element : any) => {
            console.log(evt, element);
            if(element.length > 0){
                console.log(chartData.dataSetIds[element[0].index])
                const section = document.getElementById(`${chartData.dataSetIds[element[0].index]}`)
                section && section.scrollIntoView( { behavior: 'smooth', block: 'start' } );
            }
            
            

        },
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
        const labelArray: string[] = []
        const dataArray: React.SetStateAction<number[]> = []
        const idArray: React.SetStateAction<number[]> = []
        data && data.pages.map(page => 
            page.history.forEach(tradingInfo => {
                labelArray.unshift(tradingInfo.market)
                dataArray.unshift(tradingInfo.sellBalance)
                idArray.unshift(tradingInfo.id)
            })
        );
        setCharData({
            labels : labelArray,
            datasets: [
                {
                    label: 'KRW',
                    data: dataArray,
                    borderColor: 'rgb(255, 99, 132)',
                    backgroundColor: 'rgba(255, 99, 132, 0.5)',
                }
            ],
            dataSetIds : idArray
        })
    }, [data])
    return <Line options={options} data={chartData} />
}
