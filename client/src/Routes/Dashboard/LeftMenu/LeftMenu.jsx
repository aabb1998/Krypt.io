import React from "react";
import market from "../../../assets/DashboardAssets/market.png";
import "./LeftMenu.css";

const LeftMenu = () => {
	return (
		<div className="left__menu">
			<div className="left__menuLinks">
				<h5>MENU</h5>
				<div className="menu__link">
					<img src={market} alt="" />
					<h5>MARKET</h5>
				</div>
				<div className="menu__link">
					<img src={market} alt="" />
					<h5>MARKET</h5>
				</div>
				<div className="menu__link">
					<img src={market} alt="" />
					<h5>MARKET</h5>
				</div>
				<div className="menu__link">
					<img src={market} alt="" />
					<h5>MARKET</h5>
				</div>
				<div className="menu__link">
					<img src={market} alt="" />
					<h5>MARKET</h5>
				</div>
			</div>
		</div>
	);
};

export default LeftMenu;
