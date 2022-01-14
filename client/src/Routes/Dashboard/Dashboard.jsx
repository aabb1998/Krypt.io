import React from 'react';
import DashboardNavbar from './DashboardNavbar';
import LeftMenu from './LeftMenu/LeftMenu';
import './Dashboard.css';
import DashboardMain from './DashboardMain/DashboardMain';
import { useUserAuth } from '../../Context/UserAuthContext';
import { useEffect } from 'react';
import DashboardHelp from './DashboardHelp/DashboardHelp';
import RightMenu from './RIghtMenu/RightMenu';

const Dashboard = () => {
  const { user, logout, setDashboard, dashboardElement } = useUserAuth();

  useEffect(() => {
    console.log(dashboardElement);
  }, [dashboardElement]);

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
          {dashboardElement === 5 && <DashboardHelp />}
        </div>
        <div className="dashboard__rightMenu">
          <RightMenu />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
