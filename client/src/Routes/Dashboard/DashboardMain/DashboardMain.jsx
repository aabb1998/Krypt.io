import React, { useEffect } from "react";
import "./DashboardMain.css";
import LiveMarket from "../../../Components/LiveMarket/LiveMarket";
import Prices from "../../Prices/Prices";
import { useUserPortfolio } from "../../../Context/userPortfolioContext";

const DashboardMain = () => {
	const { user, updateUserPortfolioValue, userValue } = useUserPortfolio();

	useEffect(() => {
		console.log(userValue);
	}, [userValue]);

	const handleUpdate = async () => {
		await updateUserPortfolioValue(user.uid, 134827.23);
	};

	return (
		<div className="dashboard__mainContainer">
			<div className="dashboard__main-header">
				<h4>Dashboard</h4>
				<span>An overview of your portfolio and markets.</span>
			</div>
			<div className="dashboard__main-portfolio">
				<div className="portfolio-value">
					<div className="portfolio-value__header">
						<h5>My Portfolio</h5>
					</div>
					<div className="portfolio-value__data">
						<div className="portfolio-value__image">
							<img
								src="https://assets.coingecko.com/coins/images/1/large/bitcoin.png?1547033579"
								alt=""
							/>
						</div>
						<div className="portfolio-value__value">
							<span>${userValue.toLocaleString()}</span>
							<p>$42,130.24</p>
						</div>
						<div className="portfolio-value__change">
							<p style={{ color: "greenyellow" }}>4.32%</p>
						</div>
					</div>
					<div className="portfolio-value__currency">
						<p>USD</p>
					</div>
				</div>
			</div>
			<div className="dashboard__main-marketPrices">
				<Prices />
			</div>
		</div>
	);
};

export default DashboardMain;
