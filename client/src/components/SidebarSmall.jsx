import { FaTimes } from 'react-icons/fa';
import Wrapper from '../assets/styledWrappers/SidebarSmall';
import { useDashboardContext } from '../pages/DashboardLayout';
import Logo from './Logo';
import links from '../utils/links';
import { NavLink } from 'react-router-dom';

function SidebarSmall() {
  const data = useDashboardContext();
  console.log(data);

  return (
    <Wrapper>
      <div className="sidebar-container show-sidebar">
        <div className="content">
          <button type="button" className="close-btn">
            <FaTimes />
          </button>
          <header>
            <Logo />
          </header>
          <div className="nav-links">
            {links.map((link) => {
              return (
                <NavLink key={link.text} to={link.path} className="nav-link">
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
