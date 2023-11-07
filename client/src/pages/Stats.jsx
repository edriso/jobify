import { useLoaderData } from 'react-router-dom';
import { StatsContainer, ChartsContainer } from '../components';
import apiHandler from '../utils/apiHandler';

export const loader = async () => {
  try {
    const response = await apiHandler.get('/jobs/stats');
    return response.data;
  } catch (error) {
    return error;
  }
};

function Stats() {
  const { defaultStats, monthlyApplications } = useLoaderData();

  return (
    <>
      <StatsContainer defaultStats={defaultStats} />
      {monthlyApplications.length && (
        <ChartsContainer monthlyApplications={monthlyApplications} />
      )}
    </>
  );
}

export default Stats;
