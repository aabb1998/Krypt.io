import React, { useState } from "react";
import logo from "../../assets/logo.png";
import { HiMenuAlt4 } from "react-icons/hi";
import { AiOutlineClose } from "react-icons/ai";
import { Outlet, Link } from "react-router-dom";
import "./Navbar.css";

const NavbarItems = ({ title, classProps }) => (
	<li
		className={`cursor-pointer mx-9 nav-links sm:text-[15px] ${classProps}`}
	>
		<Link to="/account">{title}</Link>
	</li>
);

const Navbar = () => {
	const [toggleMenu, setToggleMenu] = useState(false);

	return (
		<nav className="w-full flex md:justify-around justify-between items-center p-4 select-none navbar">
			<div className="flex-initial justify-center items-center">
				<img
					className="w-32 cursor-pointer select-none"
					src={logo}
					alt="pureCrypto.io"
				/>
			</div>
			<ul className="nav__list flex list-none flex-row justify-between items-center p-4">
				{["Cryptocurrencies", "Exchanges", "Prices", "News"].map(
					(item, index) => (
						<NavbarItems key={item + index} title={item} />
					)
				)}
			</ul>
			<div className="button__container">
				<button className=" text-white bg-[#3861FB] py-1.5 px-5 rounded-[8px] cursor-pointer hover:text-black">
					<Link to="/login">Log in</Link>
				</button>
			</div>
			{/* <div className="flex relative">
        {!toggleMenu && (
          <HiMenuAlt4
            fontSize={24}
            className="md:hidden cursor-pointer text-black"
          />
        )}
        {toggleMenu && (
          <AiOutlineClose fontSize={24} className="md:hidden cursor-pointer" />
        )}
      </div> */}
		</nav>
	);
};

export default Navbar;
