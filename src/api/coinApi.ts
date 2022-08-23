import axios from 'axios';

export const getCoinState = (market : string) => () =>
(axios.get(`/coinState`, {
    params: {
        market
    }
}).then(res => res.data))