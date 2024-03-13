'use client';

import Image from 'next/image';
import Link from 'next/link';

import { useState } from 'react';

import { Auth } from '.';

import { AnimatePresence } from 'framer-motion';

import { PiKeyBold, PiList, PiUserBold } from 'react-icons/pi';

export function Navbar() {
  const [authModal, setAuthModal] = useState(false);

  const [initialAuthTab, setInitialAuthTab] = useState<'login' | 'register'>('register');

  return (
    <>
      <AnimatePresence initial={false}>
        {authModal && (
          <Auth initialTab={initialAuthTab} close={() => setAuthModal(false)} />
        )}
      </AnimatePresence>
      <nav className="flex z-20 justify-between items-center bg-dark-300 md:bg-dark-100 py-[30px] lg:px-5 px-4">
        <Link href="/" aria-label="MushBet">
          <Image
            src="/logotipo.png"
            className='lg:content-[url("/logo.png")] h-[40px] w-[50px] lg:h-[30px] lg:w-[220px]'
            width={180}
            height={180}
            quality={100}
            alt="MushBet"
          />
        </Link>
        <ul className="flex items-center gap-3 md:gap-8">
          <li>
            <button
              className="flex items-center gap-3 text-white text-[10px] lg:text-[13px] font-medium"
              arial-label="Login"
              onClick={() => {
                setInitialAuthTab('login');
                setAuthModal(true);
              }}
            >
              <PiUserBold size={18} />
              Login
            </button>
          </li>
          <li>
            <button
              className="flex items-center gap-3 bg-primary-100 hover:bg-primary-200 text-white text-[10px] lg:text-[13px] font-medium px-8 py-3 rounded-[6px]"
              arial-label="Cadastre-se"
              onClick={() => {
                setInitialAuthTab('register');
                setAuthModal(true);
              }}
            >
              <PiKeyBold className="hidden lg:block" size={18} />
              Cadastre-se
            </button>
          </li>
          <li className="hidden lg:block">
            <div className="flex items-center gap-4 bg-dark-200 px-8 py-3 rounded-[6px] text-[14px] text-primary-100">
              <div className="w-[20px] h-[20px] bg-primary-100 border-[5px] border-dark-200/60 rounded-full"></div>{' '}
              1.340 Jogando agora
            </div>
          </li>
          <li className="block lg:hidden">
            <button arial-label="Menu">
              <PiList className="text-white" size={32} />
            </button>
          </li>
        </ul>
      </nav>
    </>
  );
}
