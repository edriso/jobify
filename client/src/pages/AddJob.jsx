import { Form, redirect, useOutletContext } from 'react-router-dom';
import { toast } from 'react-toastify';
import Wrapper from '../assets/styledWrappers/DashboardFormPage';
import apiHandler from '../utils/apiHandler';
import { FormRow, SubmitBtn } from '../components';
import { JOB_STATUS, JOB_TYPE } from '../../../utils/constants';

function AddJob() {
  const { user } = useOutletContext();

  return (
    <Wrapper>
      <Form method="post" className="form">
        <h4 className="form-title">add job</h4>
        <div className="form-center">
          <FormRow type="text" name="position" />
          <FormRow type="text" name="company" />
          <FormRow
            type="text"
            labelText="job location"
            name="jobLocation"
            defaultValue={user.location}
          />

          <SubmitBtn formBtn />
        </div>
      </Form>
    </Wrapper>
  );
}
export default AddJob;
