'use client';
import { useState } from 'react';

import { Auth } from '@src/components';

import { AnimatePresence } from 'framer-motion';

export function AffiliateRegister({ code }: { code: string }) {
  const [authOpen, setAuthOpen] = useState(false);

  return (
    <>
      <AnimatePresence initial={false}>
        {authOpen && (
          <Auth
            initialTab="register"
            indication={code}
            close={() => setAuthOpen(false)}
          />
        )}
      </AnimatePresence>
      <button
        className="bg-primary-100 hover:bg-primary-200 text-white mt-8 rounded-[5px] py-[15px] w-full font-medium text-[14px] transition-all duration-300 ease-in-out disabled:opacity-50 disabled:cursor-not-allowed"
        arial-label="Cadastre-se agora"
        onClick={() => {
          setAuthOpen(true);
        }}
      >
        Cadastre-se agora
      </button>
    </>
  );
}
