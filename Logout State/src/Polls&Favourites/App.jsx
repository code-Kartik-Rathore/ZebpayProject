


import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Pie, Line } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import './App.css';
import 'chart.js/auto';
import btcLogo from "./images/btc.svg";
import ethLogo from './images/eth.svg';
import usdtLogo from './images/usdt.svg';
import bnbLogo from './images/bnb.svg';
import solLogo from './images/sol.svg';
import usdcLogo from './images/usdc.svg';
import xrpLogo from './images/xrp.svg';
import dogeLogo from './images/doge.svg';
import tonLogo from './images/ton.svg';
import adaLogo from './images/ada.svg';

ChartJS.register(ArcElement, Tooltip, Legend);

const logoMap = {
  BTC: btcLogo,
  ETH: ethLogo,
  XRP: xrpLogo,
  TON: tonLogo,
  USDT: usdtLogo,
  USDC: usdcLogo,
  BNB: bnbLogo,
  ADA: adaLogo,
  SOL: solLogo,
  DOGE: dogeLogo
};

const sortOptions = [
  { value: 'trending', label: 'Trending' },
  { value: 'priceAsc', label: 'Price (Low to High)' },
  { value: 'priceDesc', label: 'Price (High to Low)' },
  { value: 'marketCapAsc', label: 'Market Cap (Low to High)' },
  { value: 'marketCapDesc', label: 'Market Cap (High to Low)' },
];

function App() {
  const [cryptoData, setCryptoData] = useState(null);
  const [error, setError] = useState(null);
  const [sortOption, setSortOption] = useState('trending');
  const [favorites, setFavorites] = useState({
    BTC: 100,
    ETH: 100,
    XRP: 100,
    TON: 100,
    USDT: 100,
    USDC: 100,
    BNB: 100,
    ADA: 100,
    SOL: 100,
    DOGE: 100
  });

  const [sparklineData, setSparklineData] = useState({});

  // Define the clickedSymbol state
  const [clickedSymbol, setClickedSymbol] = useState(null);

  useEffect(() => {
    const fetchCryptoData = async () => {
      try {
        const coinMarketCapUrl = 'http://localhost:5000/api/cryptocurrency/quotes/latest';
        const symbols = 'BTC,ETH,XRP,TON,USDT,USDC,BNB,ADA,SOL,DOGE';
        const convert = 'INR';

        const coinMarketCapResponse = await axios.get(coinMarketCapUrl, {
          params: { symbol: symbols, convert: convert }
        });

        setCryptoData(coinMarketCapResponse.data);
        setError(null);

        const coinGeckoUrl = 'https://api.coingecko.com/api/v3/coins/markets';
        const coinGeckoResponse = await axios.get(coinGeckoUrl, {
          params: {
            vs_currency: 'inr',
            ids: 'bitcoin,ethereum,ripple,the-open-network,tether,usd-coin,binancecoin,cardano,solana,dogecoin',
            order: 'market_cap_desc',
            per_page: 10,
            page: 1,
            sparkline: true,
          },
        });

        const sparklineData = coinGeckoResponse.data.reduce((acc, coin) => {
          acc[coin.symbol.toUpperCase()] = coin.sparkline_in_7d.price;
          return acc;
        }, {});

        setSparklineData(sparklineData);
      } catch (error) {
        setError(error.response ? `${error.response.status} - ${error.response.statusText}` : error.message);
      }
    };

    fetchCryptoData();
  }, []);

  const handleSortChange = (event) => {
    setSortOption(event.target.value);
  };

  const sortedData = () => {
    if (!cryptoData) return [];

    const data = Object.keys(cryptoData.data).map(symbol => cryptoData.data[symbol][0]);

    switch (sortOption) {
      case 'priceAsc':
        return data.sort((a, b) => a.quote.INR.price - b.quote.INR.price);
      case 'priceDesc':
        return data.sort((a, b) => b.quote.INR.price - a.quote.INR.price);        
      case 'marketCapAsc':
        return data.sort((a, b) => a.quote.INR.market_cap - b.quote.INR.market_cap);
      case 'marketCapDesc':
        return data.sort((a, b) => b.quote.INR.market_cap - a.quote.INR.market_cap);
      default:
        return data.sort((a, b) => a.cmc_rank - b.cmc_rank);// Trending (no specific sorting)
    }
  };

  const handleFavoriteClick = (symbol) => {
    setFavorites(prevFavorites => ({
      ...prevFavorites,
      [symbol]: prevFavorites[symbol] + 1
    }));

    // Set the clicked symbol to trigger the animation
    setClickedSymbol(symbol);

    // Remove the clicked state after 2 seconds
    setTimeout(() => {
      setClickedSymbol(null);
    }, 2000);
  };

  const formatCurrencyName = (name) => name.trim().toUpperCase();

  const totalFavorites = Object.values(favorites).reduce((acc, count) => acc + count, 0);
  
   const colorMap = {
    BTC: '#F7931A',
    ETH: '#343434',
    XRP: '#50AF95',
    TON: '#F0B90B',
    USDT: '#57A7C7',
    USDC: '#2775CA',
    BNB: '#23292F',
    ADA: '#0088CC',
    SOL: '#BA9F33',
    DOGE: '#0033AD'
  };
  
  const pieData = {
    labels: Object.keys(favorites),
    datasets: [
      {
        data: Object.values(favorites).map(count => (count / totalFavorites) * 100),
        backgroundColor: Object.keys(favorites).map(symbol => colorMap[symbol])
      }
    ]
  };
  
  const pieOptions = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: 'left',
        align: 'center',
        labels: {
          usePointStyle: false,
        },
      },
    },
    layout: {
      padding: {
        left: 20,
      },
    },
  };

  return (
    <div className="full-container">
      <div className="sorting-container">
        <label htmlFor="sort-select">Sort By :&nbsp;&nbsp; </label>
        <select id="sort-select" value={sortOption} onChange={handleSortChange}>
          {sortOptions.map(option => (
            <option key={option.value} value={option.value}>{option.label}</option>
          ))}
        </select>
      </div>
      <div className="crypto-container">
        <table className="crypto-table">
          <thead>
            <tr>
              <th className="table-head" id="id">#</th>
              <th className="table-head" id="name">Name</th>    
              <th className="table-head" id="price">Price</th>
              <th className="table-head" id="vol-change-1">1h %</th>
              <th className="table-head" id="percentage-change-24">24h %</th>
              <th className="table-head" id="percentage-change-7">7d %</th>
              <th className="table-head" id="vol-change-24">Volume Change (24 hrs)</th>
              <th className="table-head" id="market-cap">Market Cap</th>
              <th className="table-head" id="cmc-rank">CMC Rank</th>
              <th className="table-head" id="supply">Circulating Supply</th>
              <th className="table-head" id="days">Last 7 days</th>
            </tr>
          </thead>
          <tbody>
            {cryptoData && sortedData().map((currency, index) => (
              <tr key={currency.id}>
                <td>{index + 1}</td>
                <td className="name-block">
                  <div id="curr-name">
                    <img src={logoMap[currency.symbol]} alt={`${currency.name} Logo`} className="crypto-image" />
                    {formatCurrencyName(currency.name)}&nbsp;&nbsp;<span className="symbol">{currency.symbol}</span>
                  </div>&nbsp;&nbsp;
                  <button
                    className={`heart-button ${clickedSymbol === currency.symbol ? 'clicked' : ''}`}
                    onClick={() => handleFavoriteClick(currency.symbol)}
                  >
                    &hearts;
                  </button>
                </td>
                <td>{currency.quote.INR.price.toFixed(2)}</td>
                <td className={currency.quote.INR.percent_change_1h < 0 ? 'red' : 'green'}>
                  {currency.quote.INR.percent_change_1h.toFixed(2)}
                </td>
                <td className={currency.quote.INR.percent_change_24h < 0 ? 'red' : 'green'}>
                  {currency.quote.INR.percent_change_24h.toFixed(2)}
                </td>
                <td className={currency.quote.INR.percent_change_7d < 0 ? 'red' : 'green'}>
                  {currency.quote.INR.percent_change_7d.toFixed(2)}
                </td>
                <td>{currency.quote.INR.volume_change_24h.toFixed(2)}</td>
                <td>{currency.quote.INR.market_cap.toFixed(2)}</td>
                <td>{currency.cmc_rank}</td>
                <td>{currency.circulating_supply}</td>
                <td>
                  {sparklineData[currency.symbol] ? (
                    <Line
                      data={{
                        labels: Array(sparklineData[currency.symbol].length).fill(''),
                        datasets: [
                          {
                            label: 'Price in INR',
                            data: sparklineData[currency.symbol],
                            borderColor: 'rgba(75,192,192,1)',
                            borderWidth: 1,
                            pointRadius: 0,
                          }
                        ]
                      }}
                      options={{
                        scales: {
                          x: {
                            display: false,
                          },
                          y: {
                            display: false,
                          }
                        },
                        plugins: {
                          legend: {
                            display: false,
                          },
                        },
                        elements: {
                          line: {
                            tension: 0.4,
                          }
                        },
                      }}
                      width={100}
                      height={50}
                    />
                  ) : (
                    'Loading...'
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="chart-container">
        <Pie data={pieData} options={pieOptions} />
      </div>
    </div>
  );
}

export default App;
