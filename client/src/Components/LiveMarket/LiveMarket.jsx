import React, { useEffect } from "react";
import axios from "axios";
import { useState } from "react";
import "./LiveMarket.css";
import CoinData from "./CoinData";

const LiveMarket = () => {
	const [coinData, setCoinData] = useState([]);
	const [coinDataAmount, setCoinDataAmount] = useState(5);

	const fetchCurrentMarket = () => {
		const options = {
			method: "GET",
			url: "https://coingecko.p.rapidapi.com/coins/markets",
			params: {
				vs_currency: "usd",
				page: "1",
				per_page: "100",
				order: "market_cap_desc",
			},
			headers: {
				"x-rapidapi-host": "coingecko.p.rapidapi.com",
				"x-rapidapi-key":
					"b33f6a7648mshe938a076e257b22p1049f7jsne20c6769b910",
			},
		};

		axios
			.request(options)
			.then(function (response) {
				const data = response.data;
				setCoinData(data.slice(0, coinDataAmount));
				console.log(coinData);
			})
			.catch(function (error) {
				console.error(error);
			});
	};

	const handleLoad = () => {
		setCoinDataAmount(coinDataAmount + 5);
	};

	useEffect(() => {
		fetchCurrentMarket();
	}, [coinDataAmount]);

	useEffect(() => {
		fetchCurrentMarket();
	}, []);

	return (
		<div className="liveMarket">
			<div className="liveMarket__section">
				<div className="liveMarket__header">
					<table id="data">
						<tbody>
							<tr>
								<th>#</th>
								<th></th>
								<th>Name</th>
								<th>Price</th>
								<th>Change</th>
								<th>24H High</th>
							</tr>
							{coinData &&
								coinData.map((coin, index) => (
									<CoinData data={coin} key={index} />
								))}
						</tbody>
					</table>
				</div>
				<div className="data__load">
					<button onClick={handleLoad}>Load More</button>
				</div>
			</div>
		</div>
	);
};

export default LiveMarket;
