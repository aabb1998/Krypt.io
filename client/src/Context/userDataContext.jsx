import { createContext, useContext, useEffect, useState } from "react";
import { database } from "../firebase";
import { getDatabase, set, ref } from "firebase/database";
import { auth } from "../firebase";
import { onAuthStateChanged } from "firebase/auth";
import axios from "axios";

const userDataContext = createContext();

export function UserDataContextProvider({ children }) {
	const [user, setUser] = useState({});
	const [market, setCurrentMarket] = useState();

	const db = getDatabase();
	// let ref = Database.database(
	// 	"https://purecryptoio-default-rtdb.asia-southeast1.firebasedatabase.app/"
	// );

	useEffect(() => {
		function fetchCurrentMarket() {
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
					setCurrentMarket(data);
					// console.log(coinData);
				})
				.catch(function (error) {
					console.error(error);
				});
		}
		fetchCurrentMarket();
	}, []);

	function writeUserData(userId, coin, price, symbol) {
		return set(ref(db, "users/" + userId + "/watchlist/" + coin), {
			CoinName: coin,
			price: price,
			symbol: symbol,
		})
			.then(() => {
				console.log("Added to database");
			})
			.catch((error) => {
				console.log(error.message);
			});
	}

	useEffect(() => {
		const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
			setUser(currentUser);
		});

		return () => {
			unsubscribe();
		};
	}, []);

	return (
		<userDataContext.Provider value={{ user, writeUserData, market }}>
			{children}
		</userDataContext.Provider>
	);
}

export function useUserData() {
	return useContext(userDataContext);
}
