import { IoBarChartSharp } from 'react-icons/io5';
import { MdQueryStats } from 'react-icons/md';
import { FaWpforms } from 'react-icons/fa';
import { ImProfile } from 'react-icons/im';
import { MdAdminPanelSettings } from 'react-icons/md';

const links = [
  {
    text: 'add job',
    path: '.', // path is relative, so '.' refers to the parent. here it's same as '/dashboard'
    icon: <FaWpforms />,
  },
  {
    text: 'all jobs',
    path: 'all-jobs',
    icon: <MdQueryStats />,
  },
  {
    text: 'stats',
    path: 'stats',
    icon: <IoBarChartSharp />,
  },
  {
    text: 'profile',
    path: 'profile',
    icon: <ImProfile />,
  },
  {
    text: 'admin',
    path: 'admin',
    icon: <MdAdminPanelSettings />,
  },
];

export default links;
