import React, { useEffect, useState } from "react";
import CoinData from "../../Components/LiveMarket/CoinData";
import { useUserData } from "../../Context/userDataContext";
import Price from "./Price";
import "./Prices.css";

const Prices = () => {
	const { market, user } = useUserData();
	const [displayAmount, setDisplayAmount] = useState(3);
	useEffect(async () => {
		await market;
	}, []);
	return (
		<div className="market__prices">
			<div className="market__price-header">
				<h1>Explore the Market</h1>
			</div>
			<div className="current__market__rates">
				{market &&
					market
						.slice(0, 12)
						.map((coin, index) => (
							<Price key={index} data={coin} />
						))}
			</div>
		</div>
	);
};

export default Prices;
