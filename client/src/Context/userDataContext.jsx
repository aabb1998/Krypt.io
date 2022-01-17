import { createContext, useContext, useEffect, useState } from "react";
import { database } from "../firebase";
import { getDatabase, set, ref } from "firebase/database";
import { auth } from "../firebase";
import { onAuthStateChanged } from "firebase/auth";

const userDataContext = createContext();

export function UserDataContextProvider({ children }) {
	const [user, setUser] = useState({});
	const db = getDatabase();
	// let ref = Database.database(
	// 	"https://purecryptoio-default-rtdb.asia-southeast1.firebasedatabase.app/"
	// );

	function writeUserData(userId, name, email) {
		return set(ref(db, "users/" + userId), {
			username: name,
			email: email,
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
		<userDataContext.Provider value={{ user, writeUserData }}>
			{children}
		</userDataContext.Provider>
	);
}

export function useUserData() {
	return useContext(userDataContext);
}
