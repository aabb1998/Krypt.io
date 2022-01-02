import { useState } from "react";
import "./App.css";
import {
	Navbar,
	Footer,
	GetStarted,
	LiveMarket,
	MailingList,
	Preview,
} from "./Components/index";

function App() {
	return (
		<div>
			<Navbar />
			<Preview />
			<GetStarted />
			<LiveMarket />
			<MailingList />
			<Footer />
		</div>
	);
}

export default App;
