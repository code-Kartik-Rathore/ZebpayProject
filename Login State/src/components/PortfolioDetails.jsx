import holdingsIcon1 from "../images/portfolio-holdings1.png";
import holdingsIcon2 from "../images/portfolio-holdings2.png";
import coinIcon from "../images/coin-details.png";
export default function PortfolioDetails(){
    return(
        <>
            <div className = "holdings">
                <div className = "holdings-div">
                    <img className="holdings-img" src = {holdingsIcon1} alt = "Holdings-Icon1"></img>
                    <div className = "holdings-data">
                        <div>No Portfolio Holdings</div>
                        <p>Get started today and see your portfolio growing</p>
                        <br></br>
                        <a href = "#" className = "buy-receive-button" id="buy" target="_blank">BUY CRYPTO</a>
                    </div>
                </div>
                <div className="holdings-div">
                    <img class="holdings-img" src = {holdingsIcon2} alt = "Holdings-Icon2"></img>
                    <div className = "holdings-data">
                        <div>No Portfolio Holdings</div>
                        <p>A diversified investment is a smart investment</p>
                        <br></br>
                        <a href = "#" className = "buy-receive-button" id="receive" target="_blank">RECEIVE CRYPTO</a>
                    </div>
                </div>
            </div>
            <div className = "coin-details">
                <div id = "coin-details-title">Coin Details</div>
                <div className = "coin-details-data">
                    <img class="coin-details-img" src = {coinIcon} alt = "Coin-Details-Icon" ></img>
                    <div>No portfolio holdings yet</div>
                    <p>Buy coins to add to your portfolio</p>
                </div>
            </div>
        </>
    )
};