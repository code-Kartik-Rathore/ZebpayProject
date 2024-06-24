import NavBar from "./NavBar";
import Direct from "./Direct";
import Ribbon from "./Ribbon";
import PortfolioDetails from "./PortfolioDetails";
import QuickTrade from "../QuickTrade/QuickTrade";
// qt, exh, fut, cry_pac, overv, lend, market, order, wallets;
// import "../App.css";
import "./main.css";
// import "../QuickTrade/QT.css"
export default function PortfolioPage() {
  return (
    <div className="full-page">
      <Ribbon
        qt="/"
        overv="/portfolio"
        exh="/exchange"
        fut="/future"
        cry_pac="/cyptopacks"
        lend="/lend"
        market="/market"
        order="/order"
        wallets="/wallets"
      />
      <div>
        <NavBar f1="Portfolio" />
        <Direct />
        <PortfolioDetails />
      </div>
    </div>
  );
}
