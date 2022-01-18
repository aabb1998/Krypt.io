import React from "react";
import { useUserData } from "../../Context/userDataContext";
import "./Prices.css";
import { AiOutlineStar } from "react-icons/ai";
const Price = (data, index) => {
	const { user, writeUserData, coinPurchase, purchaseCoin } = useUserData();
	const handleUserData = () => {
		writeUserData(
			user.uid,
			data.data.name,
			data.data.current_price,
			data.data.symbol
		);
	};

	const handlePurchase = () => {
		purchaseCoin(
			user.uid,
			data.data.name,
			data.data.symbol,
			data.data.current_price,
			data.data.image
		);
	};

	return (
		<div className="coin__price">
			<div className="coin__details">
				<img src={data.data.image} alt="" />
				<span>{data.data.name}</span>
				<p>{data.data.symbol}</p>
			</div>
			<div className="coin__rate">
				USD ${data.data.current_price.toLocaleString()}
			</div>
			<div className="coin__percentChange">
				<span
					style={
						data.data.price_change_percentage_24h >= 0
							? { color: "#16c784" }
							: { color: "#ea3943" }
					}
				>
					{parseFloat(data.data.price_change_percentage_24h).toFixed(
						2
					)}
					%
				</span>
			</div>
			<div className="coin__chart"></div>
			<div className="coin__addWatchlist">
				<button onClick={handlePurchase}>Trade</button>
				<AiOutlineStar
					className="coin__addWatchlist-start"
					fontSize={20}
					onClick={handleUserData}
					title="Add to Watchlist"
				/>
			</div>
		</div>
	);
};

export default Price;
