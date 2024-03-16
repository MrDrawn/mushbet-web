'use client';

import { useState } from 'react';

import {
  Navbar,
  NavbarMobileBottom,
  OfferBar,
  Sidebar,
  Wins,
  routes,
} from '@src/components';

export function MainLayout({ children }: { children: React.ReactNode }) {
  const [isActiveOffer, setIsActiveOffer] = useState(true);

  return (
    <>
      <header className="fixed top-0 left-0 z-20 w-full">
        <OfferBar isActiveOffer={isActiveOffer} setIsActiveOffer={setIsActiveOffer} />
        <Navbar />
      </header>
      <Wins isActiveOffer={isActiveOffer} />
      <Sidebar routes={routes} isActiveOffer={isActiveOffer} />
      <NavbarMobileBottom routes={routes} isActiveOffer={isActiveOffer} />
      <main
        className={`overflow-x-hidden ${
          isActiveOffer
            ? 'pt-[226px] md:pt-[229px] lg:ml-[250px]'
            : 'pt-[178px] md:pt-[184px] lg:ml-[250px]'
        }`}
      >
        <div className="lg:px-[34px] lg:pt-[40px] pb-[40px] min-h-[100vh]">
          {children}
        </div>
      </main>
    </>
  );
}
