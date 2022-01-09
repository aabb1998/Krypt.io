import React from "react";
import "./Footer.css";
import logo from "../../assets/logo.png";
import { useUserAuth } from "../../Context/UserAuthContext";
import { Link } from "react-router-dom";

const Footer = () => {
	const { user } = useUserAuth();

	return (
		<div className="footer__section">
			<div className="footer__section-container">
				<div className="footer__section-left">
					<p>Take your crypto to the next level with pureCrypto.io</p>
					<div
						style={user && { display: "none" }}
						className="footer__section-button"
					>
						<Link to="/login">
							<button className="footer__button-login">
								Log in
							</button>
						</Link>

						<Link to="/signup">
							<button className="footer__button-signup">
								Sign Up
							</button>
						</Link>
					</div>
				</div>
				<div className="footer__section-right">
					<nav>
						<ul>
							<li>Cryptocurrencies</li>
							<li>Exchanges</li>
							<li>News</li>
							<li>Calendars</li>
						</ul>
					</nav>
				</div>
			</div>
			<div className="footer__section-logo">
				<img src={logo} alt="" />
				<p>© 2021 pureCrypto.io. All rights reserved</p>
			</div>
		</div>
	);
};

export default Footer;
