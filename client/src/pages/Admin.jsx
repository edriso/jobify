import { redirect, useLoaderData } from 'react-router-dom';
import { toast } from 'react-toastify';
import { FaSuitcaseRolling, FaCalendarCheck } from 'react-icons/fa';
import apiHandler from '../utils/apiHandler';
import Wrapper from '../assets/styledWrappers/StatsContainer';

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
      <h3>admin</h3>
    </Wrapper>
  );
}

export default Admin;
