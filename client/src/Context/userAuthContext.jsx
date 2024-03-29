import { createContext, useContext, useEffect, useState } from "react";
import {
	createUserWithEmailAndPassword,
	signInWithEmailAndPassword,
	onAuthStateChanged,
	signOut,
	GoogleAuthProvider,
	signInWithPopup,
	updateProfile,
	updateEmail,
	sendPasswordResetEmail,
} from "firebase/auth";
import { auth } from "../firebase";

const userAuthContext = createContext();

export function UserAuthContextProvider({ children }) {
	const [user, setUser] = useState({});
	const [dashboardElement, setDashboardElement] = useState(0);
	function logIn(email, password) {
		return signInWithEmailAndPassword(auth, email, password);
	}
	function signUp(email, password, username) {
		return createUserWithEmailAndPassword(auth, email, password);
	}

	function setDashboard(element) {
		if (element === 0) setDashboardElement(0);
		if (element === 1) setDashboardElement(1);
		if (element === 2) setDashboardElement(2);
		if (element === 3) setDashboardElement(3);
		if (element === 4) setDashboardElement(4);
		if (element === 5) setDashboardElement(5);
		if (element === 6) setDashboardElement(6);
		if (element === 7) setDashboardElement(7);
		if (element === 8) setDashboardElement(8);
		if (element === 9) setDashboardElement(9);
	}

	function updateName(username) {
		return updateProfile(auth.currentUser, {
			displayName: username,
		})
			.then(() => {
				console.log("Profile updated");
			})
			.catch((error) => {
				console.log(error.message);
			});
	}

	function updateProfilePic(picUrl) {
		return updateProfile(auth.currentUser, {
			photoURL: picUrl,
		})
			.then(() => {
				console.log("Profile Pic Updated.");
			})
			.error((err) => {
				console.log(err.message);
			});
	}

	function resetPass(email) {
		return sendPasswordResetEmail(auth, email)
			.then(() => console.log("Password reset sent."))
			.catch((error) => console.log(error.message));
	}

	function updateUserEmail(email) {
		return updateEmail(auth.currentUser, email)
			.then(() => {
				console.log("Email Updated");
			})
			.catch((error) => {
				console.log(error.message);
			});
	}

	function logOut() {
		return signOut(auth);
	}

	function googleSignIn() {
		const googleAuthProvider = new GoogleAuthProvider();
		return signInWithPopup(auth, googleAuthProvider);
	}

	useEffect(() => {
		const unsubscribe = onAuthStateChanged(auth, (currentuser) => {
			console.log("Auth", currentuser);
			setUser(currentuser);
		});

		return () => {
			unsubscribe();
		};
	}, []);

	return (
		<userAuthContext.Provider
			value={{
				user,
				logIn,
				signUp,
				logOut,
				googleSignIn,
				updateName,
				updateUserEmail,
				resetPass,
				updateProfilePic,
				setDashboard,
				dashboardElement,
			}}
		>
			{children}
		</userAuthContext.Provider>
	);
}

export function useUserAuth() {
	return useContext(userAuthContext);
}
