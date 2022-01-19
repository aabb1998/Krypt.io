import { createContext, useContext, useEffect, useState } from "react";
import { database } from "../firebase";
import { getDatabase, set, ref, push } from "firebase/database";
import { auth } from "../firebase";
import { onAuthStateChanged } from "firebase/auth";
import axios from "axios";

const userPortfolioContext = createContext();

export function UserPortfolioContextProvider({ children }) {
	const [user, setUser] = useState({});
	const [userValue, setUserValue] = useState(100000);

	const db = getDatabase();
	const postListRef = ref(db, "users/" + user.uid + "/transactions");
	const newPostRef = push(postListRef);

	useEffect(() => {
		const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
			setUser(currentUser);
		});

		return () => {
			unsubscribe();
		};
	}, []);

	function updateUserPortfolioValue(userId, amount) {
		return set(ref(db, "users/" + userId + "/portfolio/value"), {
			portfolioValue: amount,
			lastUpdated: Math.floor(Date.now() / 1000),
		})
			.then(() => {
				setUserValue(amount);
				console.log("Portfolio Value Updated to " + amount);
			})
			.catch((err) => {
				console.log(err.message);
			});
	}

	function buyTransaction(userId, coinName, coinAmount, liveCoinPrice) {
		// return set(
		// 	ref(db, "users/" + userId + "/portfolio/transactions/" + coinName),
		// 	{
		// 		tradeType: "buy",
		// 		coinName: coinName,
		// 		coinAmount: coinAmount,
		// 		liveCoinPrice: liveCoinPrice,
		// 		tradeValue: coinAmount * liveCoinPrice,
		// 	}
		// )
		// 	.then(() => {
		// 		// setUserValue(userValue);
		// 		console.log(
		// 			`Transaction successful for ${coinAmount} ${coinName} at a value of`
		// 		);
		// 	})
		// 	.catch((err) => {
		// 		console.log(err.message);
		// 	});
		return set(newPostRef, {
			tradeType: "buy",
			coinName: coinName,
			coinAmount: coinAmount,
			liveCoinPrice: liveCoinPrice,
			tradeValue: coinAmount * liveCoinPrice,
		})
			.then(() => {
				console.log(
					`Transaction successful for ${coinAmount} ${coinName} at a value of`
				);
			})
			.catch((err) => {
				console.log(err.message);
			});
	}

	return (
		<userPortfolioContext.Provider
			value={{
				user,
				updateUserPortfolioValue,
				userValue,
				buyTransaction,
			}}
		>
			{children}
		</userPortfolioContext.Provider>
	);
}

export function useUserPortfolio() {
	return useContext(userPortfolioContext);
}
