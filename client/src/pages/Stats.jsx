// import { useLoaderData } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';
import { StatsContainer, ChartsContainer } from '../components';
import apiHandler from '../utils/apiHandler';

export const loader = async () => {
  // const response = await apiHandler.get('/jobs/stats');
  // return response.data;
  return null;
};

function Stats() {
  const { isLoading, isError, data } = useQuery({
    queryKey: ['stats'],
    queryFn: () => apiHandler.get('/jobs/stats'),
  });

  if (isLoading) return <h4>Loading...</h4>;
  if (isError) return <h4>Error...</h4>;

  // const { defaultStats, monthlyApplications } = useLoaderData();
  const { defaultStats, monthlyApplications } = data.data;
  return (
    <>
      <StatsContainer defaultStats={defaultStats} />
      {monthlyApplications?.length && (
        <ChartsContainer data={monthlyApplications} />
      )}
    </>
  );
}

export default Stats;
