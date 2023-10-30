import Job from './Job';
import Wrapper from '../assets/styledWrappers/JobsContainer';
import { useAllJobsContext } from '../pages/AllJobs';

function JobsContainer() {
  const { data } = useAllJobsContext();

  if (data.jobs.length === 0) {
    return <Wrapper>No jobs to display</Wrapper>;
  }

  return (
    <Wrapper>
      <div className="jobs">
        {data.jobs.map((job) => (
          <Job key={job._id} {...job} />
        ))}
      </div>
    </Wrapper>
  );
}

export default JobsContainer;
