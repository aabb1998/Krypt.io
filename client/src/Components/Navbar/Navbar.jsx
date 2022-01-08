import React, { useState } from 'react';
import logo from '../../assets/logo.png';
import { HiMenuAlt4 } from 'react-icons/hi';
import { AiOutlineClose } from 'react-icons/ai';
import { Outlet, Link } from 'react-router-dom';
import './Navbar.css';
import App from './../../App';
import { useUserAuth } from '../../Context/UserAuthContext';
import { useEffect } from 'react';

const NavbarItems = ({ title, classProps }) => (
  <li className={`cursor-pointer mx-9 nav-links sm:text-[15px] ${classProps}`}>
    <Link to="/account">{title}</Link>
  </li>
);

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);
  const { user } = useUserAuth();

  return (
    <nav className="w-full flex md:justify-around justify-between items-center p-4 select-none navbar">
      <div className="flex-initial justify-center items-center">
        <Link to="/">
          <img
            className="w-32 cursor-pointer select-none"
            src={logo}
            alt="pureCrypto.io"
          />
        </Link>
      </div>
      <ul className="nav__list flex list-none flex-row justify-between items-center p-4">
        {['Cryptocurrencies', 'Exchanges', 'Prices', 'News'].map(
          (item, index) => (
            <NavbarItems key={item + index} title={item} />
          )
        )}
      </ul>
      {!user && (
        <div className="button__container">
          <Link to="/login">
            <button className=" text-white bg-[#3861FB] py-1.5 px-5 rounded-[8px] cursor-pointer hover:text-black">
              Log in
            </button>
          </Link>
        </div>
      )}

      {user && <span>{user.email}</span>}

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
