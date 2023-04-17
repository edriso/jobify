import { useEffect, useState } from 'react';
import { Logo, FormRow } from '../components';
import Wrapper from '../assets/styledWrappers/RegisterPage';

const initialValues = {
  name: '',
  email: '',
  password: '',
  isMember: true,
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
        <FormRow name="name" value={values.name} onChange={onChange} />

        <button type="submit" className="btn btn-block">
          Submit
        </button>
      </form>
    </Wrapper>
  );
}
export default Register;
