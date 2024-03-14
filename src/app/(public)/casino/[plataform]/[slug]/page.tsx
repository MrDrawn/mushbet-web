import { apiServer } from '@src/services';
import { redirect } from 'next/navigation';
import { cookies } from 'next/headers';

import { FrameGame } from './(components)';

export default async function GamePage({
  params,
}: {
  params: {
    plataform: string;
    slug: string;
  };
}) {
  let game: any;
  let pgGameData: any;
  let auth = false;

  const cookiesStore = cookies();
  const authSessionToken = cookiesStore.get('session');

  const getSessionToken = () => (authSessionToken ? authSessionToken.value : null);

  const token = getSessionToken();

  try {
    const { data: dataGame } = await apiServer.get(`/game/slug/${params.slug}`);

    game = dataGame;

    const { data: runGame } = await apiServer.post(
      '/games/pg/run',
      {
        game_id: game.id,
      },
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      },
    );

    auth = true;

    pgGameData = runGame.pgGameData;
  } catch (error: any) {
    if (error.response.status === 401) {
      auth = false;
    } else {
      return redirect('/');
    }
  }

  return (
    <div>
      <FrameGame auth={auth} game={game} pgGameData={pgGameData} />
    </div>
  );
}
