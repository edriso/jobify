import { useContext, createContext } from 'react';
import { useLoaderData } from 'react-router-dom';
import { toast } from 'react-toastify';
import { useQuery } from '@tanstack/react-query';
import { JobsContainer, SearchContainer } from '../components';
import apiHandler from '../utils/apiHandler';

const allJobsQuery = (params) => {
  const { search, jobStatus, jobType, sort, page } = params || {};
  return {
    queryKey: [
      'jobs',
      search ?? '',
      jobStatus ?? 'all',
      jobType ?? 'all',
      sort ?? 'newest',
      page ?? '1',
    ],
    queryFn: async () => {
      const { data } = await apiHandler.get('/jobs', {
        params,
      });
      return data;
    },
  };
};

export const loader =
  (queryClient) =>
  async ({ request }) => {
    try {
      const params = Object.fromEntries([
        ...new URL(request.url).searchParams.entries(),
      ]);
      await queryClient.ensureQueryData(allJobsQuery(params));
      return { searchValues: params };
    } catch (error) {
      toast.error(error?.response?.data?.message);
      return error;
    }
  };

const AllJobsContext = createContext();

function AllJobs() {
  const { searchValues } = useLoaderData();
  const { data } = useQuery(allJobsQuery(searchValues));

  return (
    <AllJobsContext.Provider value={{ data, searchValues }}>
      {searchValues && <SearchContainer />}
      <JobsContainer />
    </AllJobsContext.Provider>
  );
}

export const useAllJobsContext = () => useContext(AllJobsContext);
export default AllJobs;
