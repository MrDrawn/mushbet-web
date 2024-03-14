'use client';
import { IGame, IPlataform } from '@src/interfaces';

import { Game, GameModal } from '@src/components/casino';

import { useState } from 'react';
import { AnimatePresence } from 'framer-motion';
import { PiGameControllerBold } from 'react-icons/pi';

export function Plataform({ name, games }: IPlataform) {
  const [game, setGame] = useState<IGame | null>(null);

  const [modal, setModal] = useState(false);

  return (
    <>
      <AnimatePresence initial={false}>
        {modal && game && <GameModal game={game} close={() => setModal(false)} />}
      </AnimatePresence>
      <div className="flex flex-col gap-[30px]">
        <h1 className="flex items-center gap-3 text-white text-[20px] font-medium">
          <PiGameControllerBold size={20} /> Jogos da {name}
        </h1>
        <div className="grid grid-cols-3 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 gap-[10px] lg:gap-[30px]">
          {games.length > 0 ? (
            games.map((game, index) => (
              <Game
                key={index}
                game={game}
                onClick={() => {
                  setGame(game);
                  setModal(true);
                }}
              />
            ))
          ) : (
            <div>
              <p className="text-white col-span-6 text-center">
                Não há jogos na plataforma.
              </p>
            </div>
          )}
        </div>
      </div>
    </>
  );
}
