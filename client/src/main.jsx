import { render } from "react-dom";
import "./index.css";
import App from "./App";
import Account from "./Routes/Account/Account";
import { BrowserRouter, Routes, Route } from "react-router-dom";

const rootElement = document.getElementById("root");
render(
	<BrowserRouter>
		<Routes>
			<Route path="/" element={<App />} />
			<Route path="account" element={<Account />} />
		</Routes>
	</BrowserRouter>,
	rootElement
);
