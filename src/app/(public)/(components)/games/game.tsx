'use client';

import Image from 'next/image';

import { IGame } from '@src/interfaces';

import { PiStarDuotone } from 'react-icons/pi';

export function Game({ game, onClick }: { game: IGame; onClick: () => void }) {
  const { name, image, plataform } = game;

  return (
    <div
      className="flex flex-col gap-[10px] justify-center items-center bg-[linear-gradient(#292940,#02020300)] rounded-t-[6px] lg:min-w-[132px] text-center cursor-pointer"
      onClick={onClick}
    >
      <div className="relative w-full">
        <Image
          src={image}
          width={150}
          height={180}
          quality={100}
          className="h-[150px] lg:h-[200px] w-full rounded-[4px]"
          alt={name}
        />
      </div>
      <div className="flex flex-col gap-[8px] p-[5px]">
        <div>
          <h1 className="text-[12px] lg:text-[16px] text-white font-medium text-center">
            {name}
          </h1>
        </div>
        <div className="flex items-center">
          {Array.from({ length: 5 }).map((_, index) => (
            <div key={index}>
              {index < 4 ? (
                <PiStarDuotone
                  className="h-3 w-4 lg:h-4 lg:w-5 text-[#FFC800]"
                  size={20}
                />
              ) : (
                <PiStarDuotone
                  className="h-3 w-4 lg:h-4 lg:w-5 text-[#939FAE]"
                  size={20}
                />
              )}
            </div>
          ))}
        </div>
        <div className="w-fit flex justify-center items-center mx-auto bg-primary-100/10 text-primary-100/100 py-[5px] px-[10px] rounded-[5px]">
          <p className="text-[12px] lg:text-[14px]">{plataform.name}</p>
        </div>
      </div>
    </div>
  );
}
