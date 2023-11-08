import Job from './Job';
import Wrapper from '../assets/styledWrappers/JobsContainer';
import { useAllJobsContext } from '../pages/AllJobs';
import PageBtnContainer from './PageBtnContainer';

function JobsContainer() {
  const {
    data: { jobs, totalJobs, numOfPages },
  } = useAllJobsContext();

  if (jobs.length === 0) {
    return <Wrapper>No jobs to display</Wrapper>;
  }

  return (
    <Wrapper>
      <h5>
        {totalJobs} job{totalJobs > 1 && 's'}
      </h5>
      <div className="jobs">
        {jobs.map((job) => (
          <Job key={job._id} {...job} />
        ))}
      </div>

      {numOfPages > 1 && <PageBtnContainer />}
    </Wrapper>
  );
}

export default JobsContainer;
