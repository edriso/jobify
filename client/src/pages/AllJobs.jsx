import { useContext, createContext } from 'react';
import { useLoaderData } from 'react-router-dom';
import { toast } from 'react-toastify';
import { JobsContainer, SearchContainer } from '../components';
import apiHandler from '../utils/apiHandler';

export const loader = async () => {
  try {
    const { data } = await apiHandler.get('/jobs');
    return { data };
  } catch (error) {
    toast.error(error?.response?.data?.message);
    return error;
  }
};

const AllJobsContext = createContext();
function AllJobs() {
  const { data } = useLoaderData();
  return (
    <AllJobsContext.Provider value={{ data }}>
      <SearchContainer />
      <JobsContainer />
    </AllJobsContext.Provider>
  );
}

export const useAllJobsContext = () => useContext(AllJobsContext);
export default AllJobs;
