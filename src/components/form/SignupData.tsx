import React from 'react';
import { useSignUpInfoContext } from '~/helpers/context.tsx';

const SignupData: React.FC = () => {
  const { signUpInfo } = useSignUpInfoContext();
  const { role, name, email, password, checked } = signUpInfo;
  return (
    <section>
      <label>isEmployer:{role}</label>
      <label>Name:{name}</label>
      <label>Email:{email}</label>
      <label>Password:{password}</label>
      <div style={{ display: 'flex' }}>
        {checked[0] && <label>Options: {checked[0]}</label>}
        {checked[1] && <label>, {checked[1]}</label>}
      </div>
    </section>
  );
};

export default SignupData;
