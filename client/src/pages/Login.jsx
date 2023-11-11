import { Link, redirect, Form, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import Wrapper from '../assets/styledWrappers/RegisterAndLoginPage';
import { FormRow, Logo, SubmitBtn } from '../components';
import apiHandler from '../utils/apiHandler';

export const action =
  (queryClient) =>
  async ({ request }) => {
    const formData = await request.formData();
    const data = Object.fromEntries(formData);
    try {
      await apiHandler.post('/auth/login', data);
      queryClient.invalidateQueries();
      toast.success('Login Successfully');
      return redirect('/dashboard');
    } catch (error) {
      toast.error(error?.response?.data?.message);
      return error;
    }
  };

function Login() {
  const navigate = useNavigate();
  const loginDemoUser = async () => {
    const data = {
      email: import.meta.env.VITE_DEMO_USER_EMAIL || 'yamada@example.com',
      password: import.meta.env.VITE_DEMO_USER_PASSWORD || 'pass1234',
    };
    try {
      await apiHandler.post('/auth/login', data);
      toast.success("Success! You're now logged in and ready to roll");
      navigate('/dashboard');
    } catch (error) {
      toast.error(error?.response?.data?.message);
    }
  };

  return (
    <Wrapper>
      <Form method="post" className="form">
        <Logo />
        <h4>login</h4>
        <FormRow type="email" name="email" />
        <FormRow type="password" name="password" />
        <SubmitBtn />
        <button type="button" className="btn btn-block" onClick={loginDemoUser}>
          explore the app
        </button>
        <p>
          Not a member yet?
          <Link to="/register" className="member-btn">
            Register
          </Link>
        </p>
      </Form>
    </Wrapper>
  );
}
export default Login;
