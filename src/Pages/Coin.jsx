import React, { useState, useEffect, useContext } from 'react'
import { useParams } from 'react-router-dom'
import { CoinContext } from '../Context/CoinContext';
import Loading from '../Components/Loading';
import LineChart from '../Components/LineChart';

const Coin = () => {

  const { coinId } = useParams();
  const [coinData, setCoinData] = useState();
  const [historicalData, setHistoricalData] = useState();
  const { currency } = useContext(CoinContext);

  const fetchCoinData = async () => {

    const options = {
      method: 'GET',
      headers: { accept: 'application/json', 'x-cg-demo-api-key': 'CG-1fUe6YzRUE5TgqCNvKNncEr7' }
    };

    fetch(`https://api.coingecko.com/api/v3/coins/${coinId}`, options)
      .then(res => res.json())
      .then(res => setCoinData(res))
      .catch(err => console.error(err));
  }

  const fetchHistoricalData = async () => {
    const options = {
      method: 'GET',
      headers: { accept: 'application/json', 'x-cg-demo-api-key': 'CG-1fUe6YzRUE5TgqCNvKNncEr7' }
    };

    fetch(`https://api.coingecko.com/api/v3/coins/${coinId}/market_chart?vs_currency=${currency.name}&days=10&interval=daily`, options)
      .then(res => res.json())
      .then(res => setHistoricalData(res))
      .catch(err => console.error(err));
  }

  useEffect(() => {
    fetchCoinData();
    fetchHistoricalData();
  }, [currency]);

  if (coinData && historicalData) {
    return (
      <div className='min-h-screen text-white bg-gray-900 pb-20 pt-28 maxContainer'>
        {/* <div className='text-white'>{coinId}</div> */}
        <div className="coin">
          <div className='coin-name'>
            <img src={coinData.image.large} alt="" />
            <p><b>{coinData.name} ({coinData.symbol.toUpperCase()})</b></p>
          </div>

          <div className='coin-chart'>
            <LineChart historicalData={historicalData} />
          </div>

          {/* Informations about the coins */}
          <div className='coins-info'>
            {/* Market Rank */}
            <ul>
              <li>Market Rank</li>
              <li>{coinData.market_cap_rank}</li>
            </ul>
            {/* Current Price */}
            <ul>
              <li>Current Price</li>
              <li>{currency.symbol} {coinData.market_data.current_price[currency.name].toLocaleString()}</li>
            </ul>
            {/* Market Cap */}
            <ul>
              <li>Market Cap</li>
              <li>{currency.symbol} {coinData.market_data.market_cap[currency.name].toLocaleString()}</li>
            </ul>
            {/* 24 Hour high */}
            <ul>
              <li>24 Hour high</li>
              <li>{currency.symbol} {coinData.market_data.high_24h[currency.name].toLocaleString()}</li>
            </ul>
            {/* 24 Hour low */}
            <ul>
              <li>24 Hour low</li>
              <li>{currency.symbol} {coinData.market_data.low_24h[currency.name].toLocaleString()}</li>
            </ul>
          </div>

        </div>
      </div>
    )
  } else {
    <Loading />
  }
}

export default Coin