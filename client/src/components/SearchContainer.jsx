import { Form, useSubmit, Link } from 'react-router-dom';
import { FormRow, FormRowSelect, SubmitBtn } from '.';
import { useAllJobsContext } from '../pages/AllJobs';
import { JOB_TYPE, JOB_STATUS, JOB_SORT_BY } from '../../../utils/constants';
import Wrapper from '../assets/styledWrappers/DashboardFormPage';

function SearchContainer() {
  const {
    searchValues: { search, jobStatus, jobType, sort },
  } = useAllJobsContext();
  const submit = useSubmit();

  return (
    <Wrapper>
      <Form className="form">
        <h5 className="form-title">Search form</h5>
        <div className="form-center">
          <FormRow
            type="search"
            name="search"
            labelText="Search for position or company"
            notRequired
            defaultValue={search}
            onChange={(e) => submit(e.currentTarget.form)}
          />
          <FormRowSelect
            labelText="job status"
            name="jobStatus"
            list={['all', ...Object.values(JOB_STATUS)]}
            defaultValue={jobStatus}
            onChange={(e) => submit(e.currentTarget.form)}
          />
          <FormRowSelect
            labelText="job type"
            name="jobType"
            list={['all', ...Object.values(JOB_TYPE)]}
            defaultValue={jobType}
            onChange={(e) => submit(e.currentTarget.form)}
          />
          <FormRowSelect
            labelText="sort"
            name="sort"
            defaultValue={sort}
            list={Object.values(JOB_SORT_BY)}
            onChange={(e) => submit(e.currentTarget.form)}
          />
          <Link
            to={window.location.pathname}
            className="btn form-btn delete-btn"
          >
            Reset search values
          </Link>
        </div>
      </Form>
    </Wrapper>
  );
}

export default SearchContainer;
