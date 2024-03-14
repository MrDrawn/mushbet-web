'use client';

import { Game, GameModal } from '@src/components/casino';
import { IGame } from '@src/interfaces';
import { apiClient } from '@src/services';
import { motion, AnimatePresence } from 'framer-motion';
import { useEffect, useState } from 'react';
import { PiMagnifyingGlass } from 'react-icons/pi';

export function Topbar() {
  const [active, setActive] = useState(false);

  const [games, setGames] = useState<IGame[]>([]);

  const [game, setGame] = useState<IGame | null>(null);

  const [modal, setModal] = useState(false);

  const [search, setSearch] = useState('');

  async function getGames() {
    await apiClient
      .get(`/games/search?name=${search}`)
      .then(response => {
        setGames(response.data);
      })
      .catch(error => {});
  }

  useEffect(() => {
    getGames();
  }, [search]);

  return (
    <>
      <AnimatePresence initial={false}>
        {modal && game && <GameModal game={game} close={() => setModal(false)} />}
      </AnimatePresence>
      <div className="relative z-40 w-full mb-[40px]">
        <div className="relative">
          <div className="absolute inset-y-0 left-0 flex items-center pl-3.5 pointer-events-none">
            <PiMagnifyingGlass className="text-secondary-100" size={18} />
          </div>
          <input
            id="search"
            type="text"
            placeholder="Procurar um jogo de cassio..."
            className="w-full bg-dark-200 px-[20px] py-[12px] rounded-[4px] outline-none pl-10 text-secondary-100 placeholder:text-[#3B3B4D] text-[14px]"
            onMouseDown={() => setActive(true)}
            onChange={e => setSearch(e.target.value)}
            onClick={e => e.stopPropagation()}
          />
        </div>
        {active && search.length > 0 && (
          <div className="bg-dark-200 text-white mt-5 w-full rounded-[4px] p-3">
            {search.length < 3 ? (
              <p className="text-[14px] text-center text-secondary-100 col-span-6">
                Você precisa digitar mais de 3 caracteres
              </p>
            ) : (
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
                  <p className="text-[14px] text-center text-secondary-100 col-span-6">
                    Nenhum resultado foi encontrado
                  </p>
                )}
              </div>
            )}
          </div>
        )}
      </div>
      {active && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="z-30 fixed w-[100vw] h-[100vh] top-0 left-0 bg-[#25263A]/70"
          onClick={() => setActive(false)}
        ></motion.div>
      )}
    </>
  );
}
