import { FaTimes } from 'react-icons/fa';
import Wrapper from '../assets/styledWrappers/SidebarSmall';
import { useDashboardContext } from '../pages/DashboardLayout';
import Logo from './Logo';
import links from '../utils/links';
import { NavLink } from 'react-router-dom';

function SidebarSmall() {
  const { showSidebar, toggleSidebar } = useDashboardContext();

  return (
    <Wrapper>
      <div
        className={
          showSidebar ? 'sidebar-container show-sidebar' : 'sidebar-container'
        }
      >
        <div className="content">
          <button type="button" className="close-btn" onClick={toggleSidebar}>
            <FaTimes />
          </button>
          <header>
            <Logo />
          </header>
          <div className="nav-links">
            {links.map((link) => {
              return (
                <NavLink
                  key={link.text}
                  to={link.path}
                  className="nav-link"
                  end
                  onClick={toggleSidebar}
                >
                  <span className="icon">{link.icon}</span>
                  {link.text}
                </NavLink>
              );
            })}
          </div>
        </div>
      </div>
    </Wrapper>
  );
}

export default SidebarSmall;
