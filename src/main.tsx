import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import '~/styles/main.scss';
import { SignUpInfoProvider } from './helpers/context';
import { GoogleReCaptchaProvider } from 'react-google-recaptcha-v3';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <GoogleReCaptchaProvider
    reCaptchaKey="6Lf6BAohAAAAAEJ-7gv4d1DjxQbHBb26E-g4ukZt"
    language="en"
    scriptProps={{
      async: false,
      defer: false,
      appendTo: 'head',
      nonce: undefined,
    }}
  >
    <React.StrictMode>
      <SignUpInfoProvider>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </SignUpInfoProvider>
    </React.StrictMode>
  </GoogleReCaptchaProvider>
);
