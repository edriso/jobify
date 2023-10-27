import { Form, redirect, useNavigate, Link } from 'react-router-dom';
import { Logo, FormRow } from '../components';
import Wrapper from '../assets/styledWrappers/RegisterAndLoginPage';
import apiHandler from '../utils/apiHandler';

export const action = async ({ request }) => {
  const formData = await request.formData();
  const data = Object.fromEntries(formData);

  try {
    await apiHandler.post('/auth/register', data);
    return redirect('/login');
  } catch (error) {
    console.log(error);
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
        <button type="submit" className="btn btn-block">
          Submit
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
