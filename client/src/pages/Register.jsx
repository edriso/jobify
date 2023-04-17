import { useEffect, useState } from 'react';
import { Logo, FormRow, Alert } from '../components';
import Wrapper from '../assets/styledWrappers/RegisterPage';

const initialValues = {
  name: '',
  email: '',
  password: '',
  isMember: true,
  showAlert: false,
};

function Register() {
  const [values, setValues] = useState(initialValues);

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
        <h3>Login</h3>
        {values.showAlert && <Alert />}
        <FormRow
          type="text"
          name="name"
          value={values.name}
          onChange={onChange}
        />
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
      </form>
    </Wrapper>
  );
}
export default Register;
