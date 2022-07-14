import React from 'react';
import '~/styles/components/form/_signup.scss';
import { useSignUpInfoContext } from '~/helpers/context.tsx';

const SignupInfor: React.FC = () => {
  const { signUpInfo } = useSignUpInfoContext();
  const { role, name, email, password, checked } = signUpInfo;
  return (
    <section className="signup_infor">
      {role ? (
        <label>isEmployer: {role}</label>
      ) : (
        <label>isEmployer: not-choose</label>
      )}
      {name ? <label>Name: {name}</label> : <label>Name: not-choose</label>}
      <label>Email: {email}</label>
      {password ? (
        <label>Password: {password}</label>
      ) : (
        <label>Password: not-choose</label>
      )}
      <div style={{ display: 'flex' }}>
        {checked[0] ? (
          <label>Options: [{checked[0]}</label>
        ) : (
          <label>Options: [not-choose</label>
        )}
        {checked[1] ? (
          <label>, {checked[1]}]</label>
        ) : (
          <label>, not-choose]</label>
        )}
      </div>
    </section>
  );
};

export default SignupInfor;
