'use client';
import React, { useContext } from 'react';
import { useRouter} from 'next/navigation'

import { AuthContext } from '../../contexts/auth/AuthContext';
import Login from '../../components/Login';


const LoginPage = () => {
  const { user } = useContext(AuthContext);
  const router = useRouter();

  if (user) {
    router.replace('/');
    return null;
  }

  return (
    <div>
      <h1>Login Page</h1>
      <Login />
    </div>
  );
};

export default LoginPage;
