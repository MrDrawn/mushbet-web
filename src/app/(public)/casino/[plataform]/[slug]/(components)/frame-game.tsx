'use client';

import { Auth, Container } from '@src/components';
import { ErrorLogin, Game } from '.';

import { useMediaQuery } from 'react-responsive';
import Link from 'next/link';
import { PiArrowLeft, PiStarDuotone, PiXBold } from 'react-icons/pi';
import { GoScreenFull } from 'react-icons/go';
import { IGame } from '@src/interfaces';
import { useState } from 'react';
import { AnimatePresence } from 'framer-motion';
import Image from 'next/image';

export function FrameGame({
  game,
  auth,
  pgGameData,
}: {
  game: IGame;
  auth: boolean;
  pgGameData: any;
}) {
  const isTabletOrMobile = useMediaQuery({ query: '(max-width: 1224px)' });

  const [fullscreen, setFullscreen] = useState(false);

  const [typeAuth, setTypeAuth] = useState<'login' | 'register'>('login');

  const [authOpen, setAuthOpen] = useState(false);

  return (
    <div>
      <AnimatePresence initial={false}>
        {authOpen && <Auth initialTab={typeAuth} close={() => setAuthOpen(false)} />}
      </AnimatePresence>
      <Container>
        <div className="flex justify-between items-center mb-8">
          <div className="flex flex-row gap-8">
            <Link
              href="/"
              className="py-3 px-3 rounded-full bg-transparent hover:bg-dark-200 border border-dark-200 transition-all duration-300 ease-in-out"
              aria-label="Voltar"
            >
              <PiArrowLeft className="text-white" size={24} />
            </Link>
            <div>
              <h1 className="text-[18px] lg:text-[20px] text-white font-semibold">
                {game?.name}
              </h1>
              <p className="text-[12px] lg:text-[14px] text-gray-300">PG Soft</p>
            </div>
          </div>
          <button
            onClick={() => {
              setFullscreen(!fullscreen);
            }}
          >
            <GoScreenFull className="text-white" size={24} />
          </button>
        </div>

        <div
          className={`${
            !fullscreen
              ? 'lg:container lg:mx-auto lg:max-w-7xl lg:p-4 2xl:p-0'
              : 'overflow-hidden'
          } `}
        >
          <div
            id="frame-game"
            className={`${
              isTabletOrMobile || fullscreen
                ? `absolute z-46 ${
                    fullscreen
                      ? 'left-0 min-h-[100vh] h-full w-full rounded-none'
                      : 'w-[100vw] h-[120vh]'
                  } top-0`
                : 'relative z-0 lg:rounded-[12px]'
            } w-full flex flex-col overflow-hidden bg-dark-200 rounded-0 mb-8`}
          >
            {auth === false ? (
              <div className="relative">
                {fullscreen && (
                  <button
                    onClick={() => setFullscreen(false)}
                    className="absolute z-48 top-4 right-4 px-1 py-1 rounded-full text-white text-primary flex items-center gap-2 transition-all duration-300 ease-in disabled:opacity-50"
                  >
                    <PiXBold size={24} />
                  </button>
                )}
                <ErrorLogin setAuthOpen={setAuthOpen} />
              </div>
            ) : (
              <div className="relative text-white">
                <Game game={pgGameData} fullscreen={fullscreen} />
              </div>
            )}
            <div className='absolute top-0 left-0 z-20 w-full h-full bg-[url("https://imagedelivery.net/BgH9d8bzsn4n0yijn4h7IQ/c939520b-ae64-41a7-3137-9639713dfd00/public")] bg-cover bg-top filter blur-lg opacity-20'></div>
          </div>
        </div>
        <div className="bg-dark-200 p-[20px] rounded-[5px]">
          <div className="flex flex-col gap-[25px]">
            <div className="flex items-center gap-[40px]">
              <div className="relative">
                <Image
                  src={game.image}
                  width={150}
                  height={150}
                  quality={100}
                  className="rounded-[6px]"
                  alt={game.name}
                />
              </div>
              <div className="flex flex-col gap-2">
                <h1 className="text-[20px] text-white font-semibold">{game.name}</h1>
                <h2 className="text-primary-100 font-semibold text-[20px]">
                  {game.plataform.name}
                </h2>
                <p className="text-[14px] text-secondary-100 font-medium">Popularidade</p>
                <div className="flex items-center">
                  {Array.from({ length: 5 }).map((_, index) => (
                    <div key={index}>
                      {index < 4 ? (
                        <PiStarDuotone className="h-4 w-5 text-[#FFC800]" size={20} />
                      ) : (
                        <PiStarDuotone className="h-4 w-5 text-[#939FAE]" size={20} />
                      )}
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <div className="flex flex-col gap-[25px]">
              <div className="bg-[#242435] py-[10px] px-[15px] rounded-[5px]">
                <h1 className="text-secondary-100 text-[13px] font-medium mb-[5px]">
                  Descrição
                </h1>
                <p className="text-[11px] text-secondary-100">{game.description}</p>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}
