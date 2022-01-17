import React from "react";
import "./DashboardMain.css";
import LiveMarket from "../../../Components/LiveMarket/LiveMarket";
import Prices from "../../Prices/Prices";

const DashboardMain = () => {
	return (
		<div className="dashboard__mainContainer">
			<div className="dashboard__main-header">
				<h4>Dashboard</h4>
				<span>An overview of your portfolio and markets.</span>
				<Prices />
			</div>
		</div>
	);
};

export default DashboardMain;
