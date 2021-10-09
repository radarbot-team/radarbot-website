import { createContext } from 'react';
import { signIn as LoginWithDiscord } from 'next-auth/client';
import axios from 'axios';
import { setCookie } from 'nookies';
import Router from 'next/router';
import { useState } from 'react';

type User = {
  email: string;
  image: string;
  name: string;
}

type AuthContexType = {
  isAuthenticated: boolean;
  user: User | null;
  signIn: () => Promise<void>;
}


export const AuthContext = createContext({} as AuthContexType);

export function AuthProvider({ children }) {
  const [user, setUser] = useState<User | null>(null);

  const isAuthenticated = !!user;

  async function signIn() {

    const { token, user } = (await axios.get('/api/auth/session')).data;
    setCookie(undefined, 'rb.token', token, {
      maxAge: 60 * 60 * 24 // 1 day
    })

    setUser(user);
    
    Router.push('/dashboard')

  }

  return (
    <AuthContext.Provider value={{ user, isAuthenticated, signIn }}>
      {children}
    </AuthContext.Provider>
  );
}