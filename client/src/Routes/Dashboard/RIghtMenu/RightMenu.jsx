import React, { useEffect } from "react";
import "./RightMenu.css";
import cardano from "../../../assets/DashboardAssets/cardano.png";
import dropdown from "../../../assets/DashboardAssets/dropdown.png";
import { useState } from "react";
import { useUserData } from "../../../Context/userDataContext";

const RightMenu = () => {
	const [tradeOption, setTradeOption] = useState(true);
	const { user, writeUserData, coinPurchase, purchaseCoin } = useUserData();

	const handleDataTest = async () => {
		try {
			await writeUserData(user.uid, user.displayName, user.email);
		} catch (error) {
			console.log(error.message);
		}
	};

	useEffect(async () => {
		await coinPurchase;
		console.log(coinPurchase);
	}, [coinPurchase]);

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
							<span>{coinPurchase.coinName} price</span>
							<h5>
								${coinPurchase?.coinPrice?.toLocaleString()}
							</h5>
						</div>
					</div>
					<div className="purchase__info">
						<div className="purchase__amount-size">
							<input type="number" placeholder="Amount to buy" />
						</div>
						<div className="purchase__amount-coin">
							<img src={coinPurchase.imageUrl} alt="" />
							<input
								style={{
									fontSize: "10px",
									textTransform: "uppercase",
								}}
								type="text"
								placeholder={coinPurchase.coinSymbol}
							/>
							<img
								style={{ width: "10px" }}
								src={dropdown}
								alt=""
							/>
						</div>
					</div>
					<div className="purchase__button">
						<button>Buy {coinPurchase.coinName}</button>
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
							<span>{coinPurchase.coinName} price</span>
							<h5>${coinPurchase.coinPrice.toLocaleString()}</h5>
						</div>
					</div>
					<div className="purchase__info">
						<div className="purchase__amount-size">
							<input type="number" placeholder="Amount to sell" />
						</div>
						<div className="purchase__amount-coin">
							<img src={coinPurchase.imageUrl} alt="" />
							<input
								style={{
									fontSize: "10px",
									textTransform: "uppercase",
								}}
								type="text"
								placeholder={coinPurchase.coinSymbol}
							/>
							<img
								style={{ width: "10px" }}
								src={dropdown}
								alt=""
							/>
						</div>
					</div>
					<div className="purchase__button">
						<button>Sell {coinPurchase.coinName}</button>
					</div>
				</div>
			)}
			<div className="right__menu-recents">
				<div className="right__menu-recents-header"></div>
			</div>
		</div>
	);
};

export default RightMenu;
