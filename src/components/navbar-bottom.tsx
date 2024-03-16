'use client';

import { useState } from 'react';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

import { Affiliate, Auth, Deposit, SidebarMobile, Withdraw } from '.';

import { AnimatePresence } from 'framer-motion';

import { PiHeadsetBold, PiLink, PiList, PiUser, PiWallet, PiX } from 'react-icons/pi';
import { useUser } from '@src/contexts';
import { IRoutes } from '@src/interfaces';

export function NavbarMobileBottom({
  routes,
  isActiveOffer,
}: {
  routes: IRoutes[];
  isActiveOffer: boolean;
}) {
  const pathname = usePathname();

  const [open, setOpen] = useState(false);

  const [affiliateOpen, setAffiliateOpen] = useState(false);
  const [depositOpen, setDepositOpen] = useState(false);
  const [withdrawOpen, setWithdrawOpen] = useState(false);

  const [authOpen, setAuthOpen] = useState(false);
  const [typeAuth, setTypeAuth] = useState<'login' | 'register'>('login');

  const { user } = useUser();

  return (
    <>
      <AnimatePresence initial={false}>
        {open && (
          <SidebarMobile
            routes={routes}
            isActiveOffer={isActiveOffer}
            close={() => setOpen(false)}
          />
        )}
      </AnimatePresence>
      <AnimatePresence initial={false}>
        {affiliateOpen && <Affiliate close={() => setAffiliateOpen(false)} />}
      </AnimatePresence>
      <AnimatePresence initial={false}>
        {depositOpen && <Deposit close={() => setDepositOpen(false)} />}
      </AnimatePresence>
      <AnimatePresence initial={false}>
        {withdrawOpen && <Withdraw close={() => setWithdrawOpen(false)} />}
      </AnimatePresence>
      <AnimatePresence initial={false}>
        {authOpen && <Auth initialTab={typeAuth} close={() => setAuthOpen(false)} />}
      </AnimatePresence>
      <nav className="fixed lg:hidden bottom-0 left-0 right-0 w-full z-30 py-1 bg-dark-200 justify-center mt-16">
        <div className="overflow-hidden">
          <ul className="flex justify-between flex-row">
            <li className="relative">
              <button
                className={`flex flex-col items-center text-[.68rem] ${
                  open === true
                    ? 'text-primary-100'
                    : 'text-white/70 hover:text-primary-100'
                } font-medium px-5 py-2.5`}
                onClick={() => setOpen(!open)}
              >
                {open ? <PiX size={18} /> : <PiList size={18} />} Menu
              </button>
            </li>
            {user ? (
              <>
                <li className="relative">
                  <Link
                    href="/profile?tab=afilliate"
                    className={`flex flex-col items-center text-[.68rem] ${
                      pathname === '/profile'
                        ? 'text-primary-100'
                        : 'text-white/70 hover:text-primary-100'
                    } font-medium px-5 py-2.5`}
                  >
                    <PiLink size={18} /> Convide
                  </Link>
                </li>
                <li className="relative">
                  <button
                    className={`flex flex-col items-center text-[.68rem] bg-gradient-to-t to-primary-100 from-primary-200 rounded-[4px] ${
                      depositOpen === true
                        ? 'text-white'
                        : 'text-white/70 hover:text-white'
                    } font-medium px-2.5 py-2.5`}
                    onClick={() => setDepositOpen(true)}
                  >
                    <PiWallet size={18} /> Depósito
                  </button>
                </li>
                <li className="relative">
                  <Link
                    className={`flex flex-col items-center text-[.68rem] ${
                      pathname === '/support'
                        ? 'text-primary-100'
                        : 'text-white/70 hover:text-primary-100'
                    } font-medium px-5 py-2.5`}
                    href="https://tawk.to/chat/65a83e918d261e1b5f54935b/1hkcj8q41"
                    target="_blank"
                  >
                    <PiHeadsetBold size={18} /> Suporte
                  </Link>
                </li>
                <li className="relative">
                  <Link
                    href="/profile?tab=profile"
                    className={`flex flex-col items-center text-[.68rem] ${
                      pathname === '/profile'
                        ? 'text-primary-100'
                        : 'text-white/70 hover:text-primary-100'
                    } font-medium px-5 py-2.5`}
                  >
                    <PiUser size={18} /> Perfil
                  </Link>
                </li>
              </>
            ) : (
              <>
                <li className="relative">
                  <button
                    className={`flex flex-col items-center text-[.68rem] ${
                      pathname === '/profile'
                        ? 'text-primary-100'
                        : 'text-white/70 hover:text-primary-100'
                    } font-medium px-5 py-2.5`}
                    onClick={() => setAuthOpen(true)}
                  >
                    <PiLink size={18} /> Convide
                  </button>
                </li>
                <li className="relative">
                  <button
                    className={`flex flex-col items-center text-[.68rem] bg-gradient-to-t to-primary-100 from-primary-200 rounded-full ${
                      depositOpen === true
                        ? 'text-white'
                        : 'text-white/70 hover:text-white'
                    } font-medium px-2.5 py-2.5`}
                    onClick={() => setAuthOpen(true)}
                  >
                    <PiWallet size={18} /> Depósito
                  </button>
                </li>
                <li className="relative">
                  <Link
                    className={`flex flex-col items-center text-[.68rem] ${
                      pathname === '/support'
                        ? 'text-primary-100'
                        : 'text-white/70 hover:text-primary-100'
                    } font-medium px-5 py-2.5`}
                    href="https://tawk.to/chat/65a83e918d261e1b5f54935b/1hkcj8q41"
                    target="_blank"
                  >
                    <PiHeadsetBold size={18} /> Suporte
                  </Link>
                </li>
                <li className="relative">
                  <button
                    className={`flex flex-col items-center text-[.68rem] ${
                      pathname === '/profile'
                        ? 'text-primary-100'
                        : 'text-white/70 hover:text-primary-100'
                    } font-medium px-5 py-2.5`}
                    onClick={() => setAuthOpen(true)}
                  >
                    <PiUser size={18} /> Perfil
                  </button>
                </li>
              </>
            )}
          </ul>
        </div>
      </nav>
    </>
  );
}
