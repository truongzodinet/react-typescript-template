import React, { useCallback, useState } from 'react';
import AuthRequest from '../../services/auth';
import {
  GoogleReCaptchaProvider,
  useGoogleReCaptcha,
  GoogleReCaptcha,
} from 'react-google-recaptcha-v3';

const signin: React.FC = () => {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [data, setData] = useState<object>();

  const [token, setToken] = useState<string>();
  const [refreshReCaptcha, setRefreshReCaptcha] = useState(false);

  const onVerify = useCallback((token1: string) => {
    setToken(token1);
  }, []);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setData(await AuthRequest.loginUser({ email, password, capcha: token }));
    console.log(data);
    setRefreshReCaptcha((r) => !r);
    if (data) {
      window.location.href = '/multi-auth';
    }
  };
  return (
    <section>
      <h1>Welcome back!</h1>
      <GoogleReCaptcha
        onVerify={onVerify}
        refreshReCaptcha={refreshReCaptcha}
      />
      <form onSubmit={handleSubmit}>
        <fieldset>
          <label>Email:</label>
          <input
            type="email"
            autoComplete="true"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </fieldset>

        <fieldset>
          <label>Password:</label>
          <input
            type="password"
            autoComplete="true"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </fieldset>

        <fieldset>
          <button type="submit">Login</button>
        </fieldset>

        {data && <p>{JSON.stringify(data)}</p>}
      </form>
    </section>
  );
};

export default signin;
