import React, { createContext, useState } from 'react';

type SignUpContext = {
  role: string;
  name: string;
  email: string;
  password: string;
  cheked: [];
};

type ISignUpContext = {
  signUpInfo: SignUpContext;
  submit: (signUpInfo: SignUpContext) => void;
};
type Props = {
  children?: React.ReactNode;
};
const SignUpInfoContext = createContext<ISignUpContext | string>(
  'useSignUpInfoContext should be used inside SignUpInfoProvider'
);

export const SignUpInfoProvider: React.FC<Props> = ({ children }) => {
  const [signUpInfo, setSignUpInfo] = useState<SignUpContext>({
    role: '',
    name: '',
    email: '',
    password: '',
    cheked: [],
  });
  const submit = (values: SignUpContext) => {
    setSignUpInfo(values);
  };
  const value: ISignUpContext = { signUpInfo, submit };
  return <SignUpInfoContext.Provider {...{ value, children }} />;
};

export const useSignUpInfoContext = (): ISignUpContext => {
  const context = React.useContext(SignUpInfoContext);
  if (typeof context === 'string') {
    throw new Error(context);
  }
  return context;
};
