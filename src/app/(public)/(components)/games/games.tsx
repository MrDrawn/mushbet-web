'use client';

import { useState } from 'react';

import { Game, GameModal } from '.';

import { IGame } from '@src/interfaces';

import { AnimatePresence } from 'framer-motion';

import { PiGameControllerBold } from 'react-icons/pi';

export function Games() {
  const [game, setGame] = useState<IGame | null>(null);
  const [modal, setModal] = useState(false);

  const games: IGame[] = [
    {
      id: 'uuid',
      name: 'Fortune Dragon',
      image:
        'https://imagedelivery.net/BgH9d8bzsn4n0yijn4h7IQ/d13671d6-6951-4561-5857-3622b050ff00/public',
      description: 'Faça dinheiro com o dragão que libera as cartas.',
      external_id: 'external',
      game_plataform_id: 'uuid',
      slug: 'fortune-dragon',
      created_at: new Date(),
      updated_at: new Date(),
      active: true,
      plataform: {
        id: 'uuid',
        name: 'PG Soft',
        image: 'https://i.imgur.com/RbEPAyA.png',
        description: 'A melhor provedora de jogos.',
        external_id: 'external',
        created_at: new Date(),
        updated_at: new Date(),
        games: [],
        active: true,
      },
    },
    {
      id: 'uuid',
      name: 'Fortune Tiger',
      image:
        'https://imagedelivery.net/BgH9d8bzsn4n0yijn4h7IQ/c939520b-ae64-41a7-3137-9639713dfd00/public',
      description: 'Faça dinheiro com o tigre que libera as cartas.',
      external_id: 'external',
      game_plataform_id: 'uuid',
      slug: 'fortune-tiger',
      created_at: new Date(),
      updated_at: new Date(),
      active: true,
      plataform: {
        id: 'uuid',
        name: 'PG Soft',
        image: 'https://i.imgur.com/RbEPAyA.png',
        description: 'A melhor provedora de jogos.',
        external_id: 'external',
        created_at: new Date(),
        updated_at: new Date(),
        games: [],
        active: true,
      },
    },

    {
      id: 'uuid',
      name: 'Fortune Ox',
      image:
        'https://imagedelivery.net/BgH9d8bzsn4n0yijn4h7IQ/bb1ec858-3e46-4cab-4e3a-f7b75b32f100/public',
      description: 'Faça dinheiro com o ox que libera as cartas.',
      external_id: 'external',
      game_plataform_id: 'uuid',
      slug: 'fortune-ox',
      created_at: new Date(),
      updated_at: new Date(),
      active: true,
      plataform: {
        id: 'uuid',
        name: 'PG Soft',
        image: 'https://i.imgur.com/RbEPAyA.png',
        description: 'A melhor provedora de jogos.',
        external_id: 'external',
        created_at: new Date(),
        updated_at: new Date(),
        games: [],
        active: true,
      },
    },
    {
      id: 'uuid',
      name: 'Fortune Rabbit',
      image:
        'https://imagedelivery.net/BgH9d8bzsn4n0yijn4h7IQ/3d40a526-6564-4ee0-7d8f-d6e8ab93fb00/public',
      description: 'Faça dinheiro com o coelho que libera as cartas.',
      external_id: 'external',
      game_plataform_id: 'uuid',
      slug: 'fortune-rabbit',
      created_at: new Date(),
      updated_at: new Date(),
      active: true,
      plataform: {
        id: 'uuid',
        name: 'PG Soft',
        image: 'https://i.imgur.com/RbEPAyA.png',
        description: 'A melhor provedora de jogos.',
        external_id: 'external',
        created_at: new Date(),
        updated_at: new Date(),
        games: [],
        active: true,
      },
    },
    {
      id: 'uuid',
      name: 'Fortune Mouse',
      image:
        'https://imagedelivery.net/BgH9d8bzsn4n0yijn4h7IQ/178ad22a-993e-4705-fed0-f9f415ecb200/public',
      description: 'Faça dinheiro com o rato que libera as cartas.',
      external_id: 'external',
      game_plataform_id: 'uuid',
      slug: 'fortune-mouse',
      created_at: new Date(),
      updated_at: new Date(),
      active: true,
      plataform: {
        id: 'uuid',
        name: 'PG Soft',
        image: 'https://i.imgur.com/RbEPAyA.png',
        description: 'A melhor provedora de jogos.',
        external_id: 'external',
        created_at: new Date(),
        updated_at: new Date(),
        games: [],
        active: true,
      },
    },
    {
      id: 'uuid',
      name: 'Dragon Tiger Luck',
      image:
        'https://imagedelivery.net/BgH9d8bzsn4n0yijn4h7IQ/f2a5263c-2212-4462-7c99-871acf1f1e00/public',
      description: 'Faça dinheiro com o tiger que libera as cartas.',
      external_id: 'external',
      game_plataform_id: 'uuid',
      slug: 'dragon-tiger-luck',
      created_at: new Date(),
      updated_at: new Date(),
      active: true,
      plataform: {
        id: 'uuid',
        name: 'PG Soft',
        image: 'https://i.imgur.com/RbEPAyA.png',
        description: 'A melhor provedora de jogos.',
        external_id: 'external',
        created_at: new Date(),
        updated_at: new Date(),
        games: [],
        active: true,
      },
    },
    {
      id: 'uuid',
      name: 'The Great Icescape',
      image:
        'https://imagedelivery.net/BgH9d8bzsn4n0yijn4h7IQ/90089cc1-7db7-4387-1a58-a58d9ab25400/public',
      description: 'Faça dinheiro com o pinguim que libera as cartas.',
      external_id: 'external',
      game_plataform_id: 'uuid',
      slug: 'the-great-icescape',
      created_at: new Date(),
      updated_at: new Date(),
      active: true,
      plataform: {
        id: 'uuid',
        name: 'PG Soft',
        image: 'https://i.imgur.com/RbEPAyA.png',
        description: 'A melhor provedora de jogos.',
        external_id: 'external',
        created_at: new Date(),
        updated_at: new Date(),
        games: [],
        active: true,
      },
    },
  ];

  return (
    <>
      <AnimatePresence initial={false}>
        {modal && game && <GameModal game={game} close={() => setModal(false)} />}
      </AnimatePresence>
      <div className="flex flex-col gap-[30px]">
        <h1 className="flex items-center gap-3 text-white text-[20px] font-medium">
          <PiGameControllerBold size={20} /> Jogos da PG Soft
        </h1>
        <div className="grid grid-cols-3 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 gap-[10px] lg:gap-[30px]">
          {games.map((game, index) => (
            <Game
              key={index}
              game={game}
              onClick={() => {
                setGame(game);
                setModal(true);
              }}
            />
          ))}
        </div>
      </div>
    </>
  );
}
