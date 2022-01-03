import React, { useEffect } from 'react';
import axios from 'axios';
import { useState } from 'react';

const LiveMarket = () => {
  const [coinData, setCoinData] = useState([]);

  const fetchCurrentMarket = () => {
    const options = {
      method: 'GET',
      url: 'https://coingecko.p.rapidapi.com/coins/markets',
      params: {
        vs_currency: 'usd',
        page: '1',
        per_page: '100',
        order: 'market_cap_desc',
      },
      headers: {
        'x-rapidapi-host': 'coingecko.p.rapidapi.com',
        'x-rapidapi-key': 'b33f6a7648mshe938a076e257b22p1049f7jsne20c6769b910',
      },
    };

    axios
      .request(options)
      .then(function (response) {
        const data = response.data;
        setCoinData(data.slice(0, 5));
        console.log(coinData);
      })
      .catch(function (error) {
        console.error(error);
      });
  };

  useEffect(() => {
    fetchCurrentMarket();
  }, []);

  return <div>LiveMarket</div>;
};

export default LiveMarket;
