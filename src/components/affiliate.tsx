'use client';

import { useUser } from '@src/contexts';
import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import CopyToClipboard from 'react-copy-to-clipboard';
import toast from 'react-hot-toast';
import { PiLinkSimpleBold, PiXBold } from 'react-icons/pi';

export function Affiliate({ close }: { close: () => void }) {
  const [code, setCode] = useState('');

  const { user } = useUser();

  useEffect(() => {
    if (user) {
      setCode(user.indicationCode.code);
    }
  }, [user]);

  const handleOverlayClick = () => {
    close();
  };

  if (!user) return;

  return (
    <motion.div
      id="modal"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="z-48 fixed w-[100vw] h-[100vh] top-0 left-0 bg-[linear-gradient(#212134,#15171B)] lg:bg-gradient-to-t lg:to-dark-600/70 lg:from-dark-600/70"
      onClick={handleOverlayClick}
    >
      <div className="z-49 fixed top-0 left-0 flex items-center justify-center overflow-auto w-[100vw] h-[-webkit-fill-available]">
        <motion.div
          initial={{ y: -20 }}
          animate={{ y: 0 }}
          className="z-49 bg-[linear-gradient(#212134,#15171B)] relative w-full lg:max-w-xl lg:h-fit h-full p-6 lg:rounded-[20px] lg:my-10"
          onClick={e => e.stopPropagation()}
        >
          <div className="flex flex-col gap-[30px] pt-[40px] pb-[20px]">
            <button
              onClick={close}
              className="absolute top-4 right-4 px-1 py-1 rounded-full text-white text-primary flex items-center gap-2 transition-all duration-300 ease-in disabled:opacity-50"
            >
              <PiXBold size={24} />
            </button>
            <h1 className="text-[18px] text-center text-white font-bold">Afiliado</h1>
            <div className="flex flex-col justify-center text-center items-center">
              <h2 className="text-primary-100 mb-4">
                Ganhe até R$15,00 BRL por convidado
              </h2>
              <h1 className="text-[20px] text-white font-semibold">
                Convide amigos e ganhe dinheiro
              </h1>
              <p className="text-[13px] lg text-gray-300">
                Receba saldo em dinheiro para todos os amigos que você indicar a MushBet.
              </p>
              <div className="h-[1px] w-full bg-gray-800 my-4" />
              <h1 className="text-white">Compartilhe o seu código de convite</h1>
            </div>
            <div className="relative">
              <div className="absolute left-2.5 top-[12px]">
                <PiLinkSimpleBold className="text-white" size={20} />
              </div>
              <input
                id="indicationCode"
                type="text"
                className={`pl-10 w-full bg-[#242435] px-[15px] text-[14px] py-[10px] placeholder:text-[#45454D] text-secondary-100 rounded-[5px] outline-none`}
                placeholder="Código"
                defaultValue={`https://www.mush.bet/affiliate/${code}`}
                value={`https://www.mush.bet/affiliate/${code}`}
                readOnly
              />
            </div>
            <CopyToClipboard
              text={`https://www.mush.bet/affiliate/${code}`}
              onCopy={() => toast.success('Código de afiliado copiado!')}
            >
              <button
                className="bg-primary-100 mt-5 hover:bg-primary-200 text-white rounded-[5px] py-[15px] w-full font-medium text-[14px] transition-all duration-300 ease-in-out disabled:opacity-50 disabled:cursor-not-allowed"
                arial-label="Copiar link"
              >
                Copiar link
              </button>
            </CopyToClipboard>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
}
