import { NavLink } from 'react-router-dom';
import { useDashboardContext } from '../pages/DashboardLayout';
import links from '../utils/links';

function NavLinks({ isBigSidebar }) {
  const { toggleSidebar, user } = useDashboardContext();

  return (
    <div className="nav-links">
      {links.map((link) => {
        if (link.path === 'admin' && user.role !== 'admin') return;
        return (
          <NavLink
            key={link.text}
            to={link.path}
            className="nav-link"
            end
            onClick={isBigSidebar ? null : toggleSidebar}
          >
            <span className="icon">{link.icon}</span>
            {link.text}
          </NavLink>
        );
      })}
    </div>
  );
}

export default NavLinks;
