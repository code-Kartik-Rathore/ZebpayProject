import React, { useEffect, useState } from "react";
import "./QT.css";
import btcLogo from "../images/btc.svg";
import adaLogo from "../images/ada.svg";
import ethLogo from "../images/eth.svg";
import usdtLogo from "../images/usdt.svg";
import bnbLogo from "../images/bnb.svg";
import solLogo from "../images/sol.svg";
import usdcLogo from "../images/usdc.svg";
import xrpLogo from "../images/xrp.svg";
import dogeLogo from "../images/doge.svg";
import tonLogo from "../images/ton.svg";
import tethlogo from "../images/teth.svg";
import "../components/main.css";
import Ribbon from "../components/Ribbon";
import NavBar from "../components/NavBar";

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
  { value: "trending", label: "Trending" },
  { value: "priceAsc", label: "Price (Low to High)" },
  { value: "priceDesc", label: "Price (High to Low)" },
  { value: "cmcRank", label: "CMC Rank" },
  { value: "marketCapAsc", label: "Market Cap (Low to High)" },
  { value: "marketCapDesc", label: "Market Cap (High to Low)" },
];

function QuickTrade() {
  const [cryptoData, setCryptoData] = useState([]);
  const [sortOption, setSortOption] = useState("trending");
  const [error, setError] = useState(null);
  const [vsCurrency, setVsCurrency] = useState("inr");

  const handleCurrencyChange = (currency) => {
    setVsCurrency(currency);
  };

  useEffect(() => {
    const url = "https://api.coingecko.com/api/v3/coins/markets";
    const ids =
      "bitcoin,ethereum,ripple,tether,the-open-network,usd-coin,binancecoin,cardano,solana,dogecoin";

    const fetchCryptoData = async () => {
      try {
        const response = await fetch(
          `${url}?vs_currency=${vsCurrency}&ids=${ids}`
        );
        if (!response.ok) {
          throw new Error(`${response.status} - ${response.statusText}`);
        }
        const data = await response.json();
        setCryptoData(data);
        setError(null);
      } catch (error) {
        setError(error.message);
        console.error("Error fetching data:", error);
      }
    };

    fetchCryptoData();
  }, [vsCurrency]); // Dependency array includes vsCurrency to refetch on change

  const handleSortChange = (event) => {
    setSortOption(event.target.value);
  };

  const sortedData = () => {
    if (!cryptoData) return [];

    let sortedArray = [...cryptoData];
    switch (sortOption) {
      case "priceAsc":
        return sortedArray.sort((a, b) => a.current_price - b.current_price);
      case "priceDesc":
        return sortedArray.sort((a, b) => b.current_price - a.current_price);
      case "cmcRank":
        return sortedArray.sort(
          (a, b) => a.market_cap_rank - b.market_cap_rank
        );
      case "marketCapAsc":
        return sortedArray.sort((a, b) => a.market_cap - b.market_cap);
      case "marketCapDesc":
        return sortedArray.sort((a, b) => b.market_cap - a.market_cap);
      default:
        return sortedArray; // Trending (no specific sorting)
    }
  };

  return (
    <div className="full-page">
      <Ribbon
        qt="/"
        overv="/portfolio"
        exh="/exchange"
        fut="/future"
        cry_pac="/cyptopacks"
        lends="/lend"
        market="/market"
        order="/order"
        wallets="/wallets"
      />
      <div>
        <NavBar f1="Quick Trade" />

        <div className="full-container">
          <div className="sorting-container">
            <label htmlFor="sort-select">Sort By: </label>
            <select
              id="sort-select"
              value={sortOption}
              onChange={handleSortChange}
            >
              {sortOptions.map((option) => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))}
            </select>
          </div>
          <div className="usd-inr">
            <button
              className="usd prices"
              onClick={() => handleCurrencyChange("usd")}
            >
              USD
            </button>
            <button
              className="inr prices"
              onClick={() => handleCurrencyChange("inr")}
            >
              INR
            </button>
          </div>
          <div className="crypto-container">
            <table className="crypto-table">
              <thead>
                <tr>
                  <th className="table-head" id="id">
                    #
                  </th>
                  <th className="table-head" id="name">
                    Name
                  </th>
                  <th className="table-head" id="price">
                    Price
                  </th>
                  <th className="table-head" id="percentage-change-24">
                    24h %
                  </th>
                  <th className="table-head" id="vol-change-24">
                    Volume Change (24 hrs)
                  </th>
                  <th className="table-head" id="market-cap">
                    Market Cap
                  </th>
                  <th className="table-head" id="cmc-rank">
                    CMC Rank
                  </th>
                  <th className="table-head" id="supply">
                    Circulating Supply
                  </th>
                  <th className="table-head">Options</th>
                </tr>
              </thead>
              <tbody>
                {sortedData().map((currency, index) => (
                  <tr key={currency.id}>
                    <td>{index + 1}</td>
                    <td className="name-block">
                      <div id="curr-name">
                        <img
                          src={logoMap[currency.id]}
                          alt={`${currency.name} Logo`}
                          className="crypto-image"
                        />
                        {currency.name}&nbsp;&nbsp;
                        <span className="symbol">
                          {currency.symbol.toUpperCase()}
                        </span>
                      </div>
                    </td>
                    <td>{currency.current_price} </td>
                    <td>{currency.price_change_percentage_24h}</td>
                    <td>{currency.total_volume}</td>
                    <td>{currency.market_cap}</td>
                    <td>{currency.market_cap_rank}</td>
                    <td className="supply-data">
                      {currency.circulating_supply}{" "}
                      {currency.symbol.toUpperCase()}
                    </td>
                    <td className="lastData">
                      <div className="trade-sell">
                        <button className="options" id="trade">
                          Buy
                        </button>
                        <button className="options" id="sell">
                          Sell
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
            {error && <div className="error-message">{error}</div>}
          </div>
        </div>
      </div>
    </div>
  );
}

export default QuickTrade;
