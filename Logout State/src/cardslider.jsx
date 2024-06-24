// CardSlider.js
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./CardSlider.css";
import img1 from "./Group-16352-1 (1).png";
import img2 from "./Group-16406.png";
import img3 from "./Group-16352-4.png";
import img4 from "./Group-16352-3.png";
import playstore from "./playstore.png";
import mac from "./mac.png";
import scanner from "./scanner.png";
import { Link } from "react-router-dom";

const CardSlider = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
  };

  const cards = [
    {
      id: 1,
      title: "Invest in Crypto like a Pro",
      content:
        "Bitcoin, Ethereum, and 150+ cryptos available on our ultra-secure platform.",
      img: img1,
    },
    {
      id: 2,
      title: "Crypto Lending",
      content:
        "Generate Passive returns up to 8.5%* using our fully secure Lend feature.",
      img: img2,
    },
    {
      id: 3,
      title: "Invest in Diversified CryptoPacks",
      content:
        "Curated portfolios with performance analytics and risk-reward metrics.",
      img: img3,
    },
    {
      id: 4,
      title: "Transfer Brave Rewards to Zebpay for free",
      content:
        "Win 50 BAT by being among the first 500 to transfer Brave Rewards to ZebPay!",
      img: img4,
    },
    // { id: 5, title: "Card 5", content: "This is card 5" },
    // { id: 6, title: "Card 6", content: "This is card 6" },
  ];

  return (
    <div className="main">
        <div className="container mx-auto flex flex-wrap p-2 items-center justify-between">
            <a className="flex title-font font-medium items-center text-gray-900">
                <img src="/src/ZebPay-1.svg" alt="ZebPay Logo" className="h-8 mr-3" />
                <span className="text-2xl"></span>
            </a>
            <div className="flex-auto text-base justify-center m-2 title-font font-medium">
                <select className="p-2 flex-auto custom-select border-2 rounded m-2 fancy-dropdown">
                    <option value="Trade">TRADE</option>
                    <option value="vegetable">MARKET EXCHANGE</option>
                    <option value="meat">OTC</option>
                </select>

                <select className="p-2 flex-auto custom-select border-2 rounded fancy-dropdown">
                    <option value="fruit">FEATURES</option>
                    <option value="Overview">Overview</option>
                    <option value="Cryptocoins">Cryptocoins</option>
                </select>
                <a className="p-2 flex-auto custom-select border-2 rounded m-2 fancy-dropdown">MARKETS</a>
            </div>
            <select className="p-2 text-black w-40 border-2 rounded custom-select fancy-dropdown">
                <option value="fruit">INDIA</option>
                <option value="Overview">AUSTRALIA</option>
                <option value="Cryptocoins">SINGAPORE</option>
                <option value="Cryptocoins">GLOBAL</option>
            </select>
            <button className="inline-flex items-center bg-blue-500 border-0 py-1 px-3 focus:outline-none hover:bg-yellow-600 rounded text-white mt-0 m-2">
                LOGIN
            </button>

            <button className="inline-flex items-center border-2 py-1 px-3 focus:outline-none hover:bg-yellow-600 rounded text-black mt-0 m-2">
                SIGN UP
            </button>
        </div>
    







    <div className="card-slider">
      <Slider {...settings}>
        {cards.map((card) => (
          <div key={card.id} className="card">
            <div className="card-content">
              <img src={card.img} alt="not found" />
              <div className="card-text">
                <h3 className="card-title">{card.title}</h3>
                <p className="card-description">{card.content}</p>
                <button className="card-button">Learn More</button>
                <div className = "card-input">
                    <input type="tel" name="phone" id="phone" placeholder="Enter Mobile Number.." />
                     <button className="signup">Sign Up</button>
                </div>


                <div className="outlinks">
                  <a
                    href="https://play.google.com/store/apps/details?id=zebpay.Application&hl=en_SG&gl=US"
                    className="link"
                  >
                    <img src={playstore} alt="not found" />
                  </a>

                  <a
                    href="https://apps.apple.com/in/app/zebpay-crypto-exchange/id944854686"
                    className="link"
                  >
                    <img src={mac} alt="not found" />
                  </a>

                  <a
                    href="https://zebpay.com/in/wp-content/uploads/2023/11/Group-16396.png"
                    className="link"
                  >
                    <img src={scanner} alt="not found" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>

      </div>
  );
};

export default CardSlider;


