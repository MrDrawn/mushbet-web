'use client';

import { motion } from 'framer-motion';

import { useState } from 'react';

import { LoginForm, RegisterForm } from '.';
import { PiXBold } from 'react-icons/pi';

export function Auth({
  initialTab,
  indication,
  close,
}: {
  initialTab: 'login' | 'register';
  indication?: string;
  close: () => void;
}) {
  const [selectedTab, setSelectedTab] = useState<'login' | 'register'>(initialTab);

  const handleOverlayClick = () => {
    close();
  };

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
          className="z-49 lg:bg-[linear-gradient(#212134,#15171B)] relative w-full lg:max-w-xl lg:h-fit h-full p-6 lg:rounded-[20px] lg:my-10"
          onClick={e => e.stopPropagation()}
        >
          <div className="flex flex-col gap-[30px] pt-[40px] pb-[20px]">
            <button
              onClick={close}
              className="absolute top-4 right-4 px-1 py-1 rounded-full text-white text-primary flex items-center gap-2 transition-all duration-300 ease-in disabled:opacity-50"
            >
              <PiXBold size={24} />
            </button>
            <div className="flex justify-center lg:justify-start items-center gap-[30px]">
              <button
                className={`${
                  selectedTab === 'login'
                    ? 'text-primary-100 border-primary-100'
                    : 'text-secondary-100 border-transparent'
                } border-b text-[18px] font-semibold py-[10px] px-[3px]`}
                onClick={() => {
                  setSelectedTab('login');
                }}
              >
                Login
              </button>
              <button
                className={`${
                  selectedTab === 'register'
                    ? 'text-primary-100 border-primary-100'
                    : 'text-secondary-100 border-transparent'
                } border-b text-[18px] font-semibold py-[10px] px-[3px]`}
                onClick={() => {
                  setSelectedTab('register');
                }}
              >
                Cadastre-se
              </button>
            </div>
            {selectedTab === 'login' ? (
              <LoginForm close={close} />
            ) : (
              <RegisterForm indication={indication} setSelectedTab={setSelectedTab} />
            )}
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
}
