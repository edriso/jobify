import { Form, redirect, Link, useNavigation } from 'react-router-dom';
import { Logo, FormRow } from '../components';
import Wrapper from '../assets/styledWrappers/RegisterAndLoginPage';
import apiHandler from '../utils/apiHandler';
import { toast } from 'react-toastify';

export const action = async ({ request }) => {
  const formData = await request.formData();
  const data = Object.fromEntries(formData);

  try {
    await apiHandler.post('/auth/register', data);
    toast.success('Registration Successful');
    return redirect('/login');
  } catch (error) {
    toast.error(error?.response?.data?.message);
    return error;
  }
};

function Register() {
  const navigate = useNavigation();
  const isSubmitting = navigate.state === 'submitting';

  return (
    <Wrapper>
      <Form method="post" className="form">
        <Logo />
        <h4>Register</h4>
        <FormRow type="text" name="name" />
        <FormRow
          type="text"
          name="lastName"
          labelText="last name *"
          optional={true}
        />
        <FormRow type="text" name="location" />
        <FormRow type="email" name="email" />
        <FormRow type="password" name="password" />
        <button type="submit" className="btn btn-block" disabled={isSubmitting}>
          {isSubmitting ? 'Submitting...' : 'Submit'}
        </button>
        <p>
          Already a member?
          <Link to="/login" className="member-btn">
            Login
          </Link>
        </p>
      </Form>
    </Wrapper>
  );
}

export default Register;
