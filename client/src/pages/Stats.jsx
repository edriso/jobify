// import { useLoaderData } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';
import { StatsContainer, ChartsContainer } from '../components';
import apiHandler from '../utils/apiHandler';

const statsQuery = {
  queryKey: ['stats'],
  queryFn: async () => {
    const response = await apiHandler.get('/jobs/stats');
    return response.data;
  },
};

export const loader = (queryClient) => async () => {
  //// loader function can be used without a try-catch block,
  //// and incase of error, <ErrorElement /> will be displayed

  //// Note: Since useQuery is a hook, it cannot be utilized here in the loader,
  //// as hooks can only be called in a component or a custom hook.
  //// and that's why we always set up custom hooks with use and whatever the name
  await queryClient.ensureQueryData(statsQuery);
  return null;
  //// We can also use the data returned from here, but opting for this approach
  //// might lead to the loss of other benefits provided by react-query.
  // const data = await queryClient.ensureQueryData(statsQuery);
  // return data;
};

function Stats() {
  const { data } = useQuery(statsQuery);

  // const { defaultStats, monthlyApplications } = useLoaderData();
  const { defaultStats, monthlyApplications } = data;
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
