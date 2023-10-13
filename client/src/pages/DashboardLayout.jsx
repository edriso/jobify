import { Outlet } from 'react-router-dom';
import Wrapper from '../assets/styledWrappers/Dashboard';
import { Navbar, SidebarBig, SidebarSmall } from '../components';

function DashboardLayout() {
  return (
    <Wrapper>
      <main className="dashboard">
        <SidebarSmall />
        <SidebarBig />
        <div>
          <Navbar />
          <div className="dashboard-page">
            <Outlet />
          </div>
        </div>
      </main>
    </Wrapper>
  );
}

export default DashboardLayout;
