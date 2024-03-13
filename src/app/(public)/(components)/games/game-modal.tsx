'use client';

import Image from 'next/image';

import { PiPlayBold, PiStarDuotone, PiXBold } from 'react-icons/pi';

import { IGame } from '@src/interfaces';

import { motion } from 'framer-motion';

export function GameModal({ game, close }: { game: IGame; close: () => void }) {
  const { name, image, description, plataform } = game;

  const handleOverlayClick = () => {
    close();
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="z-48 fixed w-[100vw] h-[100vh] top-0 left-0 bg-[#25263A]/70"
      onClick={handleOverlayClick}
    >
      <div className="z-49 fixed top-0 left-0 flex items-center justify-center overflow-auto w-[100vw] h-[-webkit-fill-available]">
        <motion.div
          initial={{ y: -20 }}
          animate={{ y: 0 }}
          className="z-49 bg-[linear-gradient(#212134,#15171B)] relative w-full lg:max-w-xl lg:h-fit h-full p-6 lg:rounded-[20px] lg:my-10"
          onClick={e => e.stopPropagation()}
        >
          <div className="flex items-center justify-end">
            <div className="flex gap-3 items-center">
              <button
                onClick={close}
                className="px-1 py-1 rounded-full text-white text-primary flex items-center gap-2 transition-all duration-300 ease-in disabled:opacity-50"
              >
                <PiXBold size={24} />
              </button>
            </div>
          </div>
          <div className="flex flex-col gap-[25px]">
            <div className="flex items-center gap-[40px]">
              <div className="relative">
                <Image
                  src={image}
                  width={150}
                  height={150}
                  quality={100}
                  className="rounded-[6px]"
                  alt={name}
                />
              </div>
              <div className="flex flex-col gap-2">
                <h1 className="text-[20px] text-white font-semibold">{name}</h1>
                <h2 className="text-primary-100 font-semibold text-[20px]">
                  {plataform.name}
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
                <p className="text-[11px] text-secondary-100">{description}</p>
              </div>
              <button className="flex justify-center items-center gap-3 bg-primary-100 hover:bg-primary-200 text-white text-[10px] lg:text-[13px] font-medium px-8 py-3 rounded-[6px]">
                <PiPlayBold className="hidden lg:block" size={18} />
                Jogar agora
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
}
