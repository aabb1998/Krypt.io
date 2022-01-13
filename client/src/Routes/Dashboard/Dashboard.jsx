import React from 'react';
import DashboardNavbar from './DashboardNavbar';
import LeftMenu from './LeftMenu/LeftMenu';
import './Dashboard.css';
import DashboardMain from './DashboardMain/DashboardMain';
import { useUserAuth } from '../../Context/UserAuthContext';
import { useEffect } from 'react';
import DashboardHelp from './DashboardHelp/DashboardHelp';

const Dashboard = () => {
  const { user, logout, setDashboard, dashboardElement } = useUserAuth();

  useEffect(() => {
    console.log(dashboardElement);
  }, [dashboardElement]);

  const currentDashboardElement = () => {
    if (dashboardElement === 0) return <DashboardMain />;
    if (dashboardElement === 1) return <DashboardHelp />;
  };

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
          {dashboardElement === 0 && <DashboardMain />}
          {dashboardElement === 1 && <DashboardHelp />}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
