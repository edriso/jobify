import { redirect, useLoaderData } from 'react-router-dom';
import { toast } from 'react-toastify';
import { FaSuitcaseRolling, FaCalendarCheck } from 'react-icons/fa';
import apiHandler from '../utils/apiHandler';
import Wrapper from '../assets/styledWrappers/StatsContainer';
import { StatItem } from '../components';

export const loader = async () => {
  try {
    const response = await apiHandler.get('/users/admin/app-stats');
    return response.data;
  } catch (error) {
    toast.error(error?.response?.data?.message);
    return redirect('/dashboard/all-jobs');
  }
};

function Admin() {
  const { users, jobs } = useLoaderData();
  return (
    <Wrapper>
      <StatItem
        title="current users"
        count={users}
        color="#e9b949"
        bg="#fcefc7"
        icon={<FaSuitcaseRolling />}
      />
      <StatItem
        title="total jobs"
        count={jobs}
        color="#647acb"
        bg="#e0e8f9"
        icon={<FaCalendarCheck />}
      />
    </Wrapper>
  );
}

export default Admin;
