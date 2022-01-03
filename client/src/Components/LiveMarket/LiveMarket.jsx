import React, { useEffect } from 'react';
import axios from 'axios';
import { useState } from 'react';
import './LiveMarket.css';

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

  return (
    <div className="liveMarket">
      <div className="liveMarket__section">
        <div className="liveMarket__header">
          <h4>#</h4>
          <h4>Name</h4>
          <h4>Price</h4>
          <h4>Change</h4>
          <h4>24H High</h4>
        </div>
        {coinData.map((coin) => {
          return (
            <div className="liveMarket__data-coin">
              <h4 key={coin.market_cap_rank}>{coin.market_cap_rank}</h4>
              <h4 key={coin.market_cap_rank}>{coin.id}</h4>
              <h4 key={coin.market_cap_rank}>{coin.current_price}</h4>
              <h4 key={coin.market_cap_rank}>{coin.price_change_24h}</h4>
              <h4 key={coin.market_cap_rank}>{coin.high_24h}</h4>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default LiveMarket;
