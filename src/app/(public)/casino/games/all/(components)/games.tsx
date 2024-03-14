'use client';

import { Game, GameModal } from '@src/components/casino';
import { IGame } from '@src/interfaces';
import { apiClient } from '@src/services';
import { AnimatePresence } from 'framer-motion';
import { useEffect, useState } from 'react';

export function Games() {
  const [loading, setLoading] = useState(true);

  const [games, setGames] = useState<IGame[]>([]);

  const [game, setGame] = useState<IGame | null>(null);

  const [modal, setModal] = useState(false);

  async function getGames() {
    await apiClient
      .get('/games')
      .then(response => {
        setGames(response.data);

        setLoading(false);
      })
      .catch(error => {});
  }

  useEffect(() => {
    getGames();
  }, []);

  return (
    <>
      <AnimatePresence initial={false}>
        {modal && game && <GameModal game={game} close={() => setModal(false)} />}
      </AnimatePresence>
      <div className="grid grid-cols-3 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 gap-[10px] lg:gap-[30px]">
        {loading ? (
          Array.from({ length: 6 }).map((_, index) => (
            <div
              key={index}
              className="w-full h-[220px] bg-dark-200 rounded-[4px] animate-pulse"
            />
          ))
        ) : games.length > 0 ? (
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
          <div className="col-span-6">
            <p className="text-white text-center">Não há jogos disponíveis.</p>
          </div>
        )}
      </div>
    </>
  );
}
