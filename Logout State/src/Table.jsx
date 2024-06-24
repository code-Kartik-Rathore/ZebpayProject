import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Line } from 'react-chartjs-2';
import 'chart.js/auto';
import './App.css';
import './Table.css';

import btcLogo from "./images/btc.svg";
import ethLogo from "./images/eth.svg";
import usdtLogo from "./images/usdt.svg";
import bnbLogo from "./images/bnb.svg";
import solLogo from "./images/sol.svg";
import usdcLogo from "./images/usdc.svg";
import xrpLogo from "./images/xrp.svg";
import dogeLogo from "./images/doge.svg";
import tonLogo from "./images/ton.svg";
import adaLogo from "./images/ada.svg";
import tethlogo from "./images/teth.svg";

const logoMap = {
  bitcoin: btcLogo,
  ethereum: ethLogo,
  ripple: xrpLogo,
  tether: tethlogo,
  "the-open-network": tonLogo,
  usdt: usdtLogo,
  "usd-coin": usdcLogo,
  binancecoin: bnbLogo,
  cardano: adaLogo,
  solana: solLogo,
  dogecoin: dogeLogo,
};

const sortOptions = [
  { value: 'trending', label: 'Trending' },
  { value: 'priceAsc', label: 'Price (Low to High)' },
  { value: 'priceDesc', label: 'Price (High to Low)' },
  { value: 'cmcRank', label: 'CMC Rank' },
  { value: 'marketCapAsc', label: 'Market Cap (Low to High)' },
  { value: 'marketCapDesc', label: 'Market Cap (High to Low)' },
];

const CryptoTable = () => {
  const [cryptoData, setCryptoData] = useState([]);
  const [sortOption, setSortOption] = useState('trending');
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('https://api.coingecko.com/api/v3/coins/markets', {
          params: {
            vs_currency: 'inr', // Changed to INR
            ids: 'bitcoin,ethereum,ripple,tether,the-open-network,usd-coin,binancecoin,cardano,solana,dogecoin',
            order: 'market_cap_desc',
            per_page: 10,
            page: 1,
            sparkline: true,
          },
        });
        setCryptoData(response.data);
        setError(null);
      } catch (error) {
        setError(error.message);
        console.error('Error fetching cryptocurrency data', error);
      }
    };

    fetchData();
  }, []);

  const handleSortChange = (event) => {
    setSortOption(event.target.value);
  };

  const sortedData = () => {
    if (!cryptoData) return [];

    let sortedArray = [...cryptoData];
    switch (sortOption) {
      case 'priceAsc':
        return sortedArray.sort((a, b) => a.current_price - b.current_price);
      case 'priceDesc':
        return sortedArray.sort((a, b) => b.current_price - a.current_price);
      case 'cmcRank':
        return sortedArray.sort((a, b) => a.market_cap_rank - b.market_cap_rank);
      case 'marketCapAsc':
        return sortedArray.sort((a, b) => a.market_cap - b.market_cap);
      case 'marketCapDesc':
        return sortedArray.sort((a, b) => b.market_cap - a.market_cap);
      default:
        return sortedArray; // Trending (no specific sorting)
    }
  };

  return (
    <div className="full-container">
      <div className="sorting-container">
        <label htmlFor="sort-select">Sort By: </label>
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
              <th className="table-head" id="price">Price (INR)</th> {/* Changed to INR */}
              <th className="table-head" id="percentage-change-24">24h %</th>
              <th className="table-head" id="vol-change-24">Volume Change (24 hrs)</th>
              <th className="table-head" id="market-cap">Market Cap (INR)</th> {/* Changed to INR */}
              <th className="table-head" id="cmc-rank">CMC Rank</th>
              <th className="table-head" id="supply">Circulating Supply</th>
              <th className="table-head" id="days">Last 7 days</th>
              <th className="table-head" id="actions">Actions</th>
            </tr>
          </thead>
          <tbody>
            {sortedData().map((crypto, index) => (
              <tr key={crypto.id}>
                <td>{index + 1}</td>
                <td className="name-block">
                  <div id="curr-name">
                    <img
                      src={logoMap[crypto.id]}
                      alt={`${crypto.name} Logo`}
                      className="crypto-image"
                    />
                    {crypto.name}&nbsp;&nbsp;
                    <span className="symbol">{crypto.symbol.toUpperCase()}</span>
                  </div>
                </td>
                <td>₹{crypto.current_price.toFixed(2)}</td> {/* Changed to INR symbol */}
                <td>{crypto.price_change_percentage_24h.toFixed(2)}%</td>
                <td>₹{crypto.total_volume.toLocaleString()}</td> {/* Changed to INR symbol */}
                <td>₹{crypto.market_cap.toLocaleString()}</td> {/* Changed to INR symbol */}
                <td>{crypto.market_cap_rank}</td>
                <td className="supply-data">{crypto.circulating_supply.toLocaleString()}</td>
                <td>
                  <Line
                    data={{
                      labels: Array.from({ length: crypto.sparkline_in_7d.price.length }, (_, i) => i + 1),
                      datasets: [
                        {
                          data: crypto.sparkline_in_7d.price,
                          borderColor: 'rgba(75, 192, 192, 1)',
                          borderWidth: 2,
                          fill: false,
                        },
                      ],
                    }}
                    options={{
                      scales: {
                        x: {
                          display: false,
                        },
                        y: {
                          display: false,
                        },
                      },
                      elements: {
                        point: {
                          radius: 0,
                        },
                      },
                      plugins: {
                        legend: {
                          display: false,
                        },
                      },
                    }}
                    width={100}
                    height={50}
                  />
                </td>
                <td>
                  <button className="buy-button">Buy</button>
                  <button className="sell-button">Sell</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        {error && <div className="error-message">{error}</div>}
      </div>
    </div>
  );
};

export default CryptoTable;
