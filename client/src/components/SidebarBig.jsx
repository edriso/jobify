import Wrapper from '../assets/styledWrappers/SidebarBig';
import { useDashboardContext } from '../pages/DashboardLayout';
import NavLinks from './NavLinks';
import Logo from './Logo';

function SidebarBig() {
  const { showSidebar } = useDashboardContext();

  return (
    <Wrapper>
      <div
        className={
          // showSidebar ? 'sidebar-container show-sidebar' : 'sidebar-container'
          // The logic is flipped as I want to show the sidebar by default, but hide on small screens
          // remember that showSidebar initially is false
          showSidebar ? 'sidebar-container' : 'sidebar-container show-sidebar'
        }
      >
        <div className="content">
          <header>
            <Logo />
          </header>
          <NavLinks isBigSidebar />
        </div>
      </div>
    </Wrapper>
  );
}

export default SidebarBig;
