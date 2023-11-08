import { Form, useSubmit, Link } from 'react-router-dom';
import { FormRow, FormRowSelect, SubmitBtn } from '.';
import { useAllJobsContext } from '../pages/AllJobs';
import { JOB_TYPE, JOB_STATUS, JOB_SORT_BY } from '../../../utils/constants';
import Wrapper from '../assets/styledWrappers/DashboardFormPage';

function SearchContainer() {
  return (
    <Wrapper>
      <Form className="form">
        <h5 className="form-title">Search form</h5>
        <div className="form-center">
          <FormRow
            type="search"
            name="search"
            labelText="Search for position or company"
          />
          <FormRowSelect
            labelText="job status"
            name="jobStatus"
            list={['all', ...Object.values(JOB_STATUS)]}
            defaultValue="all"
          />
          <FormRowSelect
            labelText="job type"
            name="jobType"
            list={['all', ...Object.values(JOB_TYPE)]}
            defaultValue="all"
          />
          <FormRowSelect
            labelText="sort"
            name="sort"
            defaultValue="newest"
            list={Object.values(JOB_SORT_BY)}
          />
          <Link to="/dashboard/all-jobs" className="btn form-btn delete-btn">
            Reset search values
          </Link>
          {/* TEMP */}
          <SubmitBtn formBtn />
        </div>
      </Form>
    </Wrapper>
  );
}

export default SearchContainer;
