'use client';

import { useState } from 'react';

import { motion } from 'framer-motion';

import {
  PiCaretDownBold,
  PiCaretUpFill,
  PiClock,
  PiCurrencyDollar,
  PiGear,
  PiLink,
  PiSignOut,
  PiUser,
  PiWallet,
} from 'react-icons/pi';

import Link from 'next/link';

import { useUser } from '@src/contexts';

export function NavbarUser({
  username,
  setWithdrawnOpen,
  setDepositOpen,
  setAffiliateOpen,
}: {
  username: string;
  setWithdrawnOpen: (withdrawn: boolean) => void;
  setDepositOpen: (deposit: boolean) => void;
  setAffiliateOpen: (affiliate: boolean) => void;
}) {
  const [open, setOpen] = useState(false);

  const { signOut } = useUser();

  return (
    <div className="relative">
      <button className="flex items-center gap-3" onClick={() => setOpen(!open)}>
        <div className="h-10 w-10  flex justify-center items-center rounded-full bg-primary-100 text-white">
          {username.charAt(0).toUpperCase()}
        </div>
        <div className="hidden lg:block text-white text-[14px] leading-[15px]">
          <span className="text-[11px] lg:text-[13px]">Olá,</span>
          <br />
          <span className="text-[11px] lg:text-[13px] text-white">{username}</span>
        </div>
        <motion.button animate={{ rotate: open ? 180 : 0 }}>
          <PiCaretDownBold className="text-white" size={18} />
        </motion.button>
      </button>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: open ? 1 : 0 }}
        transition={{ duration: 0.3 }}
        className={`${
          open
            ? 'absolute bg-dark-300 md:bg-dark-100 border border-dark-200 py-5 lg:w-[180px] rounded-[4px] -right-3 lg:-right-2 top-16 z-30'
            : 'hidden'
        }`}
      >
        <PiCaretUpFill className="absolute text-dark-200 -top-[21px] right-1" size={32} />
        <div className="flex flex-col gap-3">
          <Link
            href="/profile?tab=profile"
            className="flex items-center gap-3 text-[14px] text-white hover:text-primary-100 px-5"
            aria-label="Minha Conta"
            onClick={() => setOpen(false)}
          >
            <PiUser size={18} /> Minha conta
          </Link>
          <button
            className="flex items-center gap-3 text-[14px] text-white hover:text-primary-100 px-5"
            aria-label="Convidar"
            onClick={() => setAffiliateOpen(false)}
          >
            <PiLink size={18} /> Convidar
          </button>
          <Link
            href="/profile?tab=historics"
            className="flex items-center gap-3 text-[14px] text-white hover:text-primary-100 px-5"
            aria-label="Histórico"
            onClick={() => setOpen(false)}
          >
            <PiClock size={18} /> Histórico
          </Link>
          <Link
            href="/profile?tab=transactions"
            className="flex items-center gap-3 text-[14px] text-white hover:text-primary-100 px-5"
            aria-label="Transações"
            onClick={() => setOpen(false)}
          >
            <PiClock size={18} /> Transações
          </Link>
          <button
            className="flex items-center gap-3 text-[14px] text-white hover:text-primary-100 px-5"
            aria-label="Saque"
            onClick={() => setWithdrawnOpen(true)}
          >
            <PiCurrencyDollar size={18} /> Saque
          </button>
          <button
            className="flex items-center gap-3 text-[14px] text-white hover:text-primary-100 px-5"
            aria-label="Depósito"
            onClick={() => setDepositOpen(true)}
          >
            <PiWallet size={18} /> Depósito
          </button>
          <Link
            href="/profile?tab=profile"
            className="flex items-center gap-3 text-[14px] text-white hover:text-primary-100 px-5"
            aria-label="Configurações"
            onClick={() => setOpen(false)}
          >
            <PiGear size={18} /> Configurações
          </Link>
          <hr className="border-dark-200" />
          <button
            className="flex items-center gap-3 text-[14px] text-white hover:text-primary-100 px-5"
            aria-label="Sair"
            onClick={signOut}
          >
            <PiSignOut size={18} /> Sair
          </button>
        </div>
      </motion.div>
    </div>
  );
}
