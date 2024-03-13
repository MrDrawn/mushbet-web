'use client';

import { createContext, useState, useEffect, useContext } from 'react';

import Cookies from 'js-cookie';

import { addMinutes } from 'date-fns';
import { IUser } from '@src/interfaces';
import { apiClient } from '@src/services';
import toast from 'react-hot-toast';

type SignInData = {
  username: string;
  password: string;
  remember_me: boolean;
  setLoading: (loading: boolean) => void;
  close?: () => void;
};

type AuthContextType = {
  isAuthenticated: boolean;
  user: IUser | null;
  setUser: (user: IUser | null) => void;
  signIn: (data: SignInData) => Promise<void>;
  signOut: () => void;
  recoverUser: () => void;
};

const AuthContext = createContext({} as AuthContextType);

function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<IUser | null>(null);

  const isAuthenticated = !!user;

  const recoverUser = async () => {
    await apiClient
      .get('/user')
      .then(response => {
        setUser(response.data);
      })
      .catch(() => {
        setUser(null);
      });
  };

  useEffect(() => {
    const token = Cookies.get('session');

    if (token) recoverUser();
  }, []);

  async function signIn({
    username,
    password,
    remember_me,
    setLoading,
    close,
  }: SignInData) {
    await apiClient
      .post('/auth', {
        username,
        password,
        remember_me,
      })
      .then(response => {
        Cookies.set('session', response.data.token, {
          expires: addMinutes(new Date(), remember_me ? 360 : 180),
        });

        apiClient.defaults.headers.common[
          'Authorization'
        ] = `Bearer ${response.data.token}`;

        setUser(response.data.user);

        toast.success('Logado com sucesso.');

        if (close) close();
      })
      .catch(error => {
        toast.error(error.response.data.message);

        setLoading(false);
      });
  }

  function signOut() {
    Cookies.remove('session');

    setUser(null);

    window.location.href = '/';
  }

  return (
    <AuthContext.Provider
      value={{ user, setUser, isAuthenticated, signIn, signOut, recoverUser }}
    >
      {children}
    </AuthContext.Provider>
  );
}

const useUser = () => useContext(AuthContext);

export { AuthProvider, useUser };
