import React from "react";
import { useUserData } from "../../../Context/userDataContext";
import Price from "../../Prices/Price";
import Prices from "../../Prices/Prices";
import "./DashboardMarket.css";

const DashboardMarket = () => {
	const { market, user } = useUserData();

	return (
		<div className="dashboard__market">
			<div className="dashboard__market-header">
				<h1>Live Market</h1>
			</div>
			<div className="dashboard__market-rates">
				{market &&
					market
						.slice(0, 100)
						.map((coin, index) => (
							<Price key={index} data={coin} />
						))}
			</div>
		</div>
	);
};

export default DashboardMarket;
