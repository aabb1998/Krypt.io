import React from 'react';
import DashboardNavbar from './DashboardNavbar';
import LeftMenu from './LeftMenu/LeftMenu';
import './Dashboard.css';
import DashboardMain from './DashboardMain/DashboardMain';

const Dashboard = () => {
  return (
    <div className="Dashboard">
      <div className="dashboard__nav">
        <DashboardNavbar />
      </div>
      <div className="dashboard__main">
        <div className="dashboard__leftMenu">
          <LeftMenu />
        </div>
        <div className="dashboard__mainContainer">
          <DashboardMain />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
