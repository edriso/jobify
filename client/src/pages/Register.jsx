import { Form, redirect, Link, useActionData } from 'react-router-dom';
import { toast } from 'react-toastify';
import { Logo, FormRow, SubmitBtn } from '../components';
import Wrapper from '../assets/styledWrappers/RegisterAndLoginPage';
import apiHandler from '../utils/apiHandler';

export const action = async ({ request }) => {
  const formData = await request.formData();
  const data = Object.fromEntries(formData);
  const errors = { message: '' };
  if (data.password.length < 8) {
    errors.message = 'Password must be at least 8 characters long';
    return errors;
  }
  try {
    await apiHandler.post('/auth/register', data);
    toast.success('Registration Successful');
    return redirect('/login');
  } catch (error) {
    // errors.message = error?.response?.data?.message; // alternative way to display errors
    toast.error(error?.response?.data?.message);
    return error;
  }
};

function Register() {
  const errors = useActionData();
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
          notRequired
        />
        <FormRow type="text" name="location" />
        <FormRow type="email" name="email" />
        <FormRow type="password" name="password" />
        {errors?.message && (
          <p style={{ color: '#f98080' }}>{errors.message}</p>
        )}
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
