import React from "react";
import "./RightMenu.css";
import cardano from "../../../assets/DashboardAssets/cardano.png";
import dropdown from "../../../assets/DashboardAssets/dropdown.png";
import { useState } from "react";
import { useUserData } from "../../../Context/userDataContext";

const RightMenu = () => {
	const [tradeOption, setTradeOption] = useState(true);
	const { user, writeUserData } = useUserData();

	const handleDataTest = async () => {
		try {
			await writeUserData(user.uid, user.displayName, user.email);
		} catch (error) {
			console.log(error.message);
		}
	};

	return (
		<div className="right__menu">
			{tradeOption ? (
				<div className="right__menu-purchase">
					<div className="purchase__options">
						<div
							className="purchase__option"
							onClick={() => setTradeOption(true)}
						>
							<h5 style={{ color: "green" }}>BUY</h5>
						</div>
						<div className="purchase__option-divider"></div>
						<div
							className="purchase__option"
							onClick={() => setTradeOption(false)}
						>
							<h5 style={{ color: "red" }}>SELL</h5>
						</div>
					</div>
					<div className="purchase__price">
						<div className="coin__name">
							<span>Bitcoin price</span>
							<h5>$44,121.71</h5>
						</div>
					</div>
					<div className="purchase__info">
						<div className="purchase__amount-size">
							<input type="number" placeholder="Amount to buy" />
						</div>
						<div className="purchase__amount-coin">
							<img src={cardano} alt="" />
							<input
								style={{ fontSize: "10px" }}
								type="text"
								placeholder="BTC"
							/>
							<img
								style={{ width: "10px" }}
								src={dropdown}
								alt=""
							/>
						</div>
					</div>
					<div className="purchase__button">
						<button>Buy BTC</button>
					</div>
				</div>
			) : (
				<div className="right__menu-purchase">
					<div className="purchase__options">
						<div
							className="purchase__option"
							onClick={() => setTradeOption(true)}
						>
							<h5 style={{ color: "green" }}>BUY</h5>
						</div>
						<div className="purchase__option-divider"></div>
						<div
							className="purchase__option"
							onClick={() => setTradeOption(false)}
						>
							<h5 style={{ color: "red" }}>SELL</h5>
						</div>
					</div>
					<div className="purchase__price">
						<div className="coin__name">
							<span>Bitcoin Price</span>
							<h5>$44,121.71</h5>
						</div>
					</div>
					<div className="purchase__info">
						<div className="purchase__amount-size">
							<input type="number" placeholder="Amount to sell" />
						</div>
						<div className="purchase__amount-coin">
							<img src={cardano} alt="" />
							<input
								style={{ fontSize: "10px" }}
								type="text"
								placeholder="BTC"
							/>
							<img
								style={{ width: "10px" }}
								src={dropdown}
								alt=""
							/>
						</div>
					</div>
					<div className="purchase__button">
						<button>Sell BTC</button>
					</div>
				</div>
			)}
			<div className="right__menu-recents">
				<div className="right__menu-recents-header">
					<button onClick={handleDataTest}>text</button>
				</div>
			</div>
		</div>
	);
};

export default RightMenu;
