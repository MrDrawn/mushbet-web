'use client';

import { AnimatePresence } from 'framer-motion';

import { useState } from 'react';

import { PiXBold } from 'react-icons/pi';

import { Deposit } from '.';

export function OfferBar({
  isActiveOffer,
  setIsActiveOffer,
}: {
  isActiveOffer: boolean;
  setIsActiveOffer: (isActiveOffer: boolean) => void;
}) {
  const [depositOpen, setDepositOpen] = useState(false);

  return (
    <>
      <AnimatePresence initial={false}>
        {depositOpen && <Deposit close={() => setDepositOpen(false)} />}
      </AnimatePresence>
      {isActiveOffer && (
        <div className="flex justify-between items-center bg-primary-100 p-[5px] relative">
          <div className="flex justify-center lg:mx-auto lg:justify-start items-center gap-2  lg:gap-5">
            <p className="text-[12px] lg:text-[13px] text-white font-bold w-[300px] text-center lg:w-full">
              🔥 Deposite apartir de R$20,00 e dobramos a sua banca para jogar.
            </p>
            <button
              className="bg-white text-primary-100 text-[10px] lg:text-[13px] uppercase font-semibold py-[5px] lg:py-[10px] lg:px-[35px] px-[10px] rounded-[6px]"
              onClick={() => setDepositOpen(true)}
              aria-label="Depositar"
            >
              Depositar
            </button>
          </div>
          <div className="flex items-center mr-2">
            <button
              className="flex justify-center cursor-pointer"
              onClick={() => setIsActiveOffer(false)}
              aria-label="Fechar"
            >
              <PiXBold className="text-white" size={18} />
            </button>
          </div>
        </div>
      )}
    </>
  );
}
