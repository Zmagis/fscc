import React from 'react';
import {SignInForm} from './components/SignIn';
import {Layout} from './components/Layout';

export const Auth = () => {
  return (
    <Layout>
      <SignInForm />
    </Layout>
  );
};
