import React from "react";
import { Link } from "react-router-dom";
import { HiMenuAlt4 } from "react-icons/hi";
import { AiOutlineClose } from "react-icons/ai";
import { useEffect } from "react";
import logo from "../../assets/logo.png";
import profile from "../../assets/profile-pic.png";
import "./DashboardNavbar.css";

const DashboardNavbar = () => {
	return (
		<nav className="navbar__container">
			<div className="nav__left">
				<Link to="/">
					<img className="" src={logo} alt="pureCrypto.io" />
				</Link>
				<input
					type="text"
					placeholder="Search cryptocurrency, news, etc"
				/>
			</div>
			<div className="nav__right">
				<span>Saturday, 11 September, 2022</span>
				<img src={profile} alt="" />
				<h5>Abdul Abbou</h5>
			</div>
		</nav>
	);
};

export default DashboardNavbar;
