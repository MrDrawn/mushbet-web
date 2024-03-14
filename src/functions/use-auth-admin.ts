import { cookies } from 'next/headers';

import { apiServer } from '@src/services';

const prefix = 'session';

export function useAuthAdmin(redirect?: () => void) {
  const cookiesStore = cookies();
  const authSessionToken = cookiesStore.get(prefix);

  const getSessionToken = () => (authSessionToken ? authSessionToken.value : null);

  const validadeToken = async () => {
    try {
      const token = getSessionToken();

      if (!token) throw new Error('Token is missing!');

      apiServer.defaults.headers['Authorization'] = `Bearer ${token}`;

      const { data } = await apiServer.get('/user');

      if (!data?.id) throw new Error('Token is incorrect!');

      if (data?.role === 'USER') throw new Error('No admin');

      return {
        props: {},
      };
    } catch (error) {
      redirect && redirect();
    }
  };

  return { validadeToken, getSessionToken } as const;
}
