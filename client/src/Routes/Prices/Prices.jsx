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
		console.log(market.slice(0, 3));
	}, []);
	return (
		<div className="market__prices">
			<div className="current__market__rates">
				{market &&
					market
						.slice(0, 3)
						.map((coin, index) => (
							<Price key={index} data={coin} />
						))}
			</div>
		</div>
	);
};

export default Prices;
