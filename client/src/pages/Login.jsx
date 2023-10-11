import { Link } from 'react-router-dom';
import Wrapper from '../assets/styledWrappers/RegisterAndLoginPage';
import { FormRow, Logo, SubmitBtn } from '../components';

function Login() {
  return (
    <Wrapper>
      <form method="post" className="form">
        <Logo />
        <h4>login</h4>
        <FormRow type="email" name="email" />
        <FormRow type="password" name="password" />
        <SubmitBtn />
        <button type="button" className="btn btn-block">
          explore the app
        </button>
        <p>
          Not a member yet?
          <Link to="/register" className="member-btn">
            Register
          </Link>
        </p>
      </form>
    </Wrapper>
  );
}
export default Login;
