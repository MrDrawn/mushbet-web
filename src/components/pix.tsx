'use client';

import { motion } from 'framer-motion';
import QRCode from 'qrcode.react';
import CopyToClipboard from 'react-copy-to-clipboard';
import toast from 'react-hot-toast';
import { PiXBold } from 'react-icons/pi';

export function Pix({ pixKey, close }: { pixKey: string; close: () => void }) {
  const handleOverlayClick = () => {
    close();
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="z-49 fixed w-[100vw] h-[100vh] top-0 left-0 bg-[#25263A]/70"
      onClick={handleOverlayClick}
    >
      <div className="z-50 fixed top-0 left-0 flex items-center justify-center overflow-auto w-[100vw] h-[-webkit-fill-available]">
        <motion.div
          initial={{ y: -20 }}
          animate={{ y: 0 }}
          className="z-50 bg-[linear-gradient(#212134,#15171B)] relative w-full lg:max-w-xl lg:h-fit h-full p-6 lg:rounded-[20px] lg:my-10"
          onClick={e => e.stopPropagation()}
        >
          <div className="flex flex-col gap-[30px] pt-[40px] pb-[20px]">
            <button
              onClick={close}
              className="absolute top-4 right-4 px-1 py-1 rounded-full text-white text-primary flex items-center gap-2 transition-all duration-300 ease-in disabled:opacity-50"
            >
              <PiXBold size={24} />
            </button>
            <h1 className="text-[18px] text-center text-white font-bold">Pix</h1>
            <div className="flex flex-col items-center justify-center text-center">
              <h3 className="text-white text-lg font-semibold mb-4">
                Use o QR Code do Pix para pagar
              </h3>
              <p className="text-white">
                Abra o app em que vai fazer a transferência, escaneie a imagem ou cole o
                código do QR Code.
              </p>
              <div className="my-5">{pixKey && <QRCode value={pixKey} size={256} />}</div>
              <CopyToClipboard
                text={pixKey ? pixKey : ''}
                onCopy={() => toast.success('Chave Pix copiada com sucesso!')}
              >
                <button
                  className="bg-primary-100 mt-5 hover:bg-primary-200 text-white rounded-[5px] py-[15px] w-full font-medium text-[14px] transition-all duration-300 ease-in-out disabled:opacity-50 disabled:cursor-not-allowed"
                  arial-label=" Copiar código pix"
                >
                  Copiar código pix
                </button>
              </CopyToClipboard>
            </div>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
}
