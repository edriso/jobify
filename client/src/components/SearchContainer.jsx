import { Form, useSubmit, Link } from 'react-router-dom';
import { FormRow, FormRowSelect, SubmitBtn } from '.';
import { useAllJobsContext } from '../pages/AllJobs';
import { JOB_TYPE, JOB_STATUS, JOB_SORT_BY } from '../../../utils/constants';
import Wrapper from '../assets/styledWrappers/DashboardFormPage';

/* In the SearchContainer, if no 'post' method is specified in the form
 * the browser defaults to a 'get' request to the same URL
 * and input values are then provided as query parameters
 */

const debounce = (onChange) => {
  let timeout;
  return (e) => {
    const form = e.currentTarget.form;
    clearTimeout(timeout);
    timeout = setTimeout(() => {
      onChange(form);
    }, 2000);
  };
};

function SearchContainer() {
  const {
    searchValues: { search, jobStatus, jobType, sort },
  } = useAllJobsContext();
  const submit = useSubmit();

  return (
    <Wrapper>
      <Form className="form">
        <h5 className="form-title">Search specific jobs</h5>
        <div className="form-center">
          <FormRow
            labelText="position or company"
            type="search"
            name="search"
            defaultValue={search}
            onChange={debounce((form) => submit(form))}
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
