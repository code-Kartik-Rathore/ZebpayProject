import "../App.css";
import  walletIcon from "../images/wallet-icon.png";
import chatbotIcon from "../images/chatbot.png"
import helpIcon from "../images/help.png"
import profileIcon from "../images/profile.png"
export default function NavBar({f1}){
    return (
        <>
        <div className = "navbar">
            <div className="portfolio-title">{f1}</div>
            <div id = "nav-empty"></div>
            <div className = "wallet-balance">
                <img id="wallet-icon" src = {walletIcon} alt = "Wallet-icon"></img>
                <div className = "wallet-balance-details">Wallet Balance: 0.00 INR</div>
            </div>
            <div className = "navbar-icons">
                <a className = "nav-icons" href = "#" id = "chatbot"><img className = "icons" src = {chatbotIcon} alt = "ChatBot-icon"></img></a>
                <a href = "#" id = "help" className = "nav-icons" ><img className = "icons" src = {helpIcon} alt = "Help-icon"></img></a>
                <a href = "#" id = "profile" className = "nav-icons" ><img className = "icons" src = {profileIcon} alt = "Profile-icon"></img></a>
            </div>
        </div>
        </>
    )
}