import { useEffect, useState } from 'react';
import { useAppContext } from '../context/appContext';
import { Logo, FormRow, Alert } from '../components';
import Wrapper from '../assets/styledWrappers/RegisterPage';

const initialValues = {
  name: '',
  email: '',
  password: '',
  isMember: true,
};

function Register() {
  const [values, setValues] = useState(initialValues);
  const { isLoading, showAlert } = useAppContext();

  const toggleMember = () => {
    setValues({ ...values, isMember: !values.isMember });
  };

  const onChange = (e) => {
    console.log(e.target);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    console.log(e.target);
  };

  return (
    <Wrapper className="full-page">
      <form className="form" onSubmit={onSubmit}>
        <Logo />
        <h3>{values.isMember ? 'Login' : 'Register'}</h3>
        {showAlert && <Alert />}
        {!values.isMember && (
          <FormRow
            type="text"
            name="name"
            value={values.name}
            onChange={onChange}
          />
        )}
        <FormRow
          type="email"
          name="email"
          value={values.email}
          onChange={onChange}
        />
        <FormRow
          type="password"
          name="password"
          value={values.password}
          onChange={onChange}
        />

        <button type="submit" className="btn btn-block">
          Submit
        </button>

        <p>
          {values.isMember ? 'Not a member yet? ' : 'Already a member? '}
          <button type="button" className="member-btn" onClick={toggleMember}>
            {values.isMember ? 'Register' : 'Login'}
          </button>
        </p>
      </form>
    </Wrapper>
  );
}
export default Register;
