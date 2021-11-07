import axios from 'axios';
import { setCookie } from 'nookies';
import { createContext, useState } from 'react';
import { parseCookies } from 'nookies';
import { useEffect } from 'react';
import GetMemberInfo from '../services/DiscordApi/GetMemberInfo';

type User = {
  data: {
    id: string;
    username: string;
    avatar: string;
    discriminator: string;
    public_flags: number;
    banner: string | null;
    banner_color: string | null;
    accent_color: string | null;
    locale: string;
    mfa_enabled: boolean;
    email: string;
    verified: boolean;
  }
  avatar: string;
}

type AuthContexType = {
  isAuthenticated: boolean;
  user: User | null;
  signIn: () => Promise<void>;
}


export const AuthContext = createContext({} as AuthContexType);

export function AuthProvider({ children }) {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);

  const isAuthenticated = !!user;

  useEffect(() => {
    let isMounted = true;
    if (isMounted) {
      const { 'rb.token': token } = parseCookies();

      if (token) {
        GetMemberInfo(token).then((res) => {
          setUser(res);
        })
      }
    }

    return () => {
      isMounted = false;
    }
  }, [])


  async function signIn() {
    const { token: sessionToken, user: sessionUser } = (await axios.get('/api/auth/session')).data;
    setCookie(undefined, 'rb.token', sessionToken, {
      maxAge: 60 * 60 * 24 // 1 day
    })

    GetMemberInfo(sessionToken).then((res: any) => {
      setUser(res)
    })

    setUser(sessionUser);

  }

  return (
    <AuthContext.Provider value={{ user, isAuthenticated, signIn }}>
      {children}
    </AuthContext.Provider>
  );
}