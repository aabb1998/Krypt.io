import React, { useEffect } from "react";
import "./LiveMarket.css";

const CoinData = (data, index) => {
	return (
		<tr>
			<td>{data.data.market_cap_rank}</td>
			<td>
				<img className="coin__image" src={data.data.image} alt="" />
			</td>
			<td>{data.data.name}</td>
			<td>US ${data.data.current_price.toLocaleString()}</td>
			<td
				style={
					data.data.price_change_24h < 0
						? { color: "red" }
						: { color: "green" }
				}
			>
				{parseFloat(data.data.price_change_percentage_24h).toFixed(2)} %
			</td>
			<td>US ${data.data.high_24h.toLocaleString()}</td>
		</tr>
	);
};

export default CoinData;
