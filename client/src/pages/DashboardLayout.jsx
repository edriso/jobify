import { Outlet } from 'react-router-dom';

function DashboardLayout() {
  return (
    <>
      <div>Shared layout</div>
      <Outlet />
    </>
  );
}
export default DashboardLayout;
