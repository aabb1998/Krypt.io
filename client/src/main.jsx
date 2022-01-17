import { render } from "react-dom";
import "./index.css";
import App from "./App";
import Account from "./Routes/Account/Account";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SignUp from "./Routes/Account/SignUp";
import Login from "./Routes/Account/Login";
import ProtectedRoute from "./Components/ProtectedRoute";
import { UserAuthContextProvider } from "./Context/UserAuthContext";
import Dashboard from "./Routes/Dashboard/Dashboard";
import { UserDataContextProvider } from "./Context/userDataContext";

const rootElement = document.getElementById("root");
render(
	<BrowserRouter>
		<UserAuthContextProvider>
			<UserDataContextProvider>
				<Routes>
					<Route path="/" element={<App />} />
					<Route
						path="account"
						element={
							<ProtectedRoute>
								<Account />
							</ProtectedRoute>
						}
					/>
					<Route path="signup" element={<SignUp />} />
					<Route path="login" element={<Login />} />
					<Route
						path="dashboard"
						element={
							<ProtectedRoute>
								<Dashboard />
							</ProtectedRoute>
						}
					/>
				</Routes>
			</UserDataContextProvider>
		</UserAuthContextProvider>
	</BrowserRouter>,

	rootElement
);
