import zebpayLogo from "../images/zebpay-app-logo.svg"
import quickTrade from "../images/quick-trade.png"
import cryptoPacks from "../images/cryptopacks.png"
import futures from "../images/futures.png"
import exchange from "../images/exchange.png"
import overview from "../images/overview.png"
import lend from "../images/lend.png"
import markets from "../images/markets.png"
import orders from "../images/orders.png"
import wallet from "../images/wallet.png"
import QuickTrade from "../QuickTrade/QuickTrade"
import { Link } from "react-router-dom"
// {
//   qt, exh, fut, cry_pac, overv, lends, market, order, wallets;
// }
export default function Ribbon({
  qt, exh, fut, cry_pac, overv, lends, market, order, wallets
}){
    
    return(
        <div className = "ribbon">
            <div className="logo-container"><img src = {zebpayLogo} alt = "ZebPay Logo"></img></div>   
            <div className="ribbon-sub-section">
                <div className = "ribbon-sub-title">Trade & Invest</div>
                <Link to={qt} type="submit"    className = "ribbon-directing-button" >
                    <img src = {quickTrade} alt = "Quick-Trade Icon"></img>
                    <p>QuickTrade</p>
                </Link>
                
                <Link to={exh} type="submit"  className = "ribbon-directing-button">
                    <img src = {exchange} alt = "Exchange Icon"></img>
                    <p>Exchange</p>
                </Link>
                <Link to={fut} type="submit"  className = "ribbon-directing-button">
                    <img src = {futures} alt = "Futures Icon"></img>
                    <p>Futures</p>
                </Link>
                <Link to={cry_pac} type="submit"  className = "ribbon-directing-button">
                    <img src = {cryptoPacks} alt = "CryptoPacks Icon"></img>
                    <p>CryptoPacks</p>
                </Link>
            </div>
            <div className="ribbon-sub-section">
                <div className = "ribbon-sub-title">Portfolio</div>
                <Link to={overv} type="submit"  className = "ribbon-directing-button">
                    <img src = {overview} alt = "Overview Icon"></img>
                    {/* <Link to="/" type="submit" class="link-btn">
                Sign Up
              </Link> */}
                    <p>Overview</p>
                </Link>
                <Link to={lends} type="submit"  className = "ribbon-directing-button">
                    <img src = {lend} alt = "Lend Icon"></img>
                    <p>Lend</p>
                </Link>
            </div>
            <div className="ribbon-sub-section">
                <div className = "ribbon-sub-title">Others</div>
                <Link to={market}type="submit"  className = "ribbon-directing-button">
                    <img src = {markets} alt = "Markets Icon"></img>
                    <p>Markets</p>
                </Link>
                <Link to={order} type="submit"  className = "ribbon-directing-button">
                    <img src = {orders} alt = "Orders Icon"></img>
                    <p>Orders</p>
                </Link>
                <Link to={wallets} type="submit"  className = "ribbon-directing-button">
                    <img src = {wallet} alt = "wallet Icon"></img>
                    <p>Wallet</p>
                </Link>
            </div>
        </div>
    )
}