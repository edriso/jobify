import { Form, redirect, useOutletContext } from 'react-router-dom';
import { toast } from 'react-toastify';
import Wrapper from '../assets/styledWrappers/DashboardFormPage';
import { FormRow, FormRowSelect, SubmitBtn } from '../components';
import { JOB_STATUS, JOB_TYPE } from '../../../utils/constants';
import apiHandler from '../utils/apiHandler';

export const action =
  (queryClient) =>
  async ({ request }) => {
    const formData = await request.formData();
    const data = Object.fromEntries(formData);
    try {
      await apiHandler.post('/jobs', data);
      queryClient.invalidateQueries(['jobs']);
      toast.success('Job added Successfully');
      return redirect('/dashboard/all-jobs');
    } catch (error) {
      toast.error(error?.response?.data?.message);
      return error;
    }
  };

function AddJob() {
  const { user } = useOutletContext();
  return (
    <Wrapper>
      <Form method="post" className="form">
        <h4 className="form-title">add job</h4>
        <div className="form-center">
          <FormRow name="position" />
          <FormRow name="company" />
          <FormRow
            labelText="job location"
            name="jobLocation"
            defaultValue={user.location}
          />
          <FormRowSelect
            name="jobStatus"
            labelText="job status"
            defaultValue={JOB_STATUS.PENDING}
            list={Object.values(JOB_STATUS)}
          />
          <FormRowSelect
            name="jobType"
            labelText="job type"
            defaultValue={JOB_TYPE.FULL_TIME}
            list={Object.values(JOB_TYPE)}
          />
          <SubmitBtn formBtn />
        </div>
      </Form>
    </Wrapper>
  );
}
export default AddJob;
