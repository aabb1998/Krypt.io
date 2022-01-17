import React from "react";
import { useUserData } from "../../Context/userDataContext";
import "./Prices.css";

const Price = (data, index) => {
	const { user, writeUserData } = useUserData();
	const handleUserData = () => {
		writeUserData(
			user.uid,
			data.data.name,
			data.data.current_price,
			data.data.symbol
		);
	};
	return (
		<div className="coin__price">
			<div className="coin__details">
				<img src={data.data.image} alt="" />
				<span>{data.data.name}</span>
				<span>{data.data.symbol}</span>
			</div>
			<div className="coin__rate">USD ${data.data.current_price}</div>
			<div className="coin__percentChange">
				<span>{data.data.price_change_percentage_24h}%</span>
			</div>
			<div className="coin__chart"></div>
			<div className="coin__addWatchlist">
				<button onClick={handleUserData}>Add to Watchlist</button>
			</div>
		</div>
	);
};

export default Price;
