import React, { useState } from 'react';
import market from '../../../assets/DashboardAssets/market.png';
import dashboard from '../../../assets/DashboardAssets/dashboard.png';
import analytics from '../../../assets/DashboardAssets/analytics.png';
import portfolio from '../../../assets/DashboardAssets/portfolio.png';
import news from '../../../assets/DashboardAssets/news.png';
import help from '../../../assets/DashboardAssets/help.png';
import settings from '../../../assets/DashboardAssets/settings.png';
import logout from '../../../assets/DashboardAssets/logout.png';
import './LeftMenu.css';
import { useUserAuth } from '../../../Context/UserAuthContext';
import { useEffect } from 'react';

const LeftMenu = () => {
  const { user, logout, setDashboard, dashboardElement } = useUserAuth();
  const [dashboardPage, setDashboardPage] = useState(0);

  const handleLogout = async () => {
    try {
      await logOut();
    } catch (error) {
      console.log(error.message);
    }
  };

  useEffect(() => {
    setDashboard(dashboardPage);
  }, [dashboardPage]);

  return (
    <div className="left__menu">
      <div className="left__menuLinks">
        <h5 className="left__menu-header">MENU</h5>
        <div className="menu__link" onClick={() => setDashboardPage(0)}>
          <img src={market} alt="" />
          <h5>MARKET</h5>
        </div>
        <div className="menu__link" onClick={() => setDashboardPage(1)}>
          <img src={dashboard} alt="" />
          <h5>DASHBOARD</h5>
        </div>
        <div className="menu__link" onClick={() => setDashboardPage(2)}>
          <img src={analytics} alt="" />
          <h5>ANALYTICS</h5>
        </div>
        <div className="menu__link" onClick={() => setDashboardPage(3)}>
          <img src={portfolio} alt="" />
          <h5>MY PORTFOLIO</h5>
        </div>
        <div className="menu__link" onClick={() => setDashboardPage(4)}>
          <img src={news} alt="" />
          <h5>NEWS</h5>
        </div>
      </div>
      <div className="left__menuLinksOther">
        <h5 className="left__menu-header">OTHER</h5>
        <div className="menu__link" onClick={() => setDashboardPage(5)}>
          <img src={help} alt="" />
          <h5>HELP</h5>
        </div>
        <div className="menu__link" onClick={() => setDashboardPage(6)}>
          <img src={settings} alt="" />
          <h5>SETTINGS</h5>
        </div>
      </div>
      <div className="left__menuLogout">
        <div className="menu__link-logout" onClick={handleLogout}>
          <img src={logout} alt="" />
          <h5>LOG OUT</h5>
        </div>
      </div>
    </div>
  );
};

export default LeftMenu;
