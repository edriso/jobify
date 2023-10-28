import { Form, redirect, Link } from 'react-router-dom';
import { toast } from 'react-toastify';
import { Logo, FormRow, SubmitBtn } from '../components';
import Wrapper from '../assets/styledWrappers/RegisterAndLoginPage';
import apiHandler from '../utils/apiHandler';

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
        <SubmitBtn />
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
