'use client';

import { useState } from 'react';

import {
  Navbar,
  NavbarMobileBottom,
  OfferBar,
  Sidebar,
  Wins,
  routesAdmin,
} from '@src/components';

export function AdminLayout({ children }: { children: React.ReactNode }) {
  const [isActiveOffer, setIsActiveOffer] = useState(true);

  return (
    <>
      <header className="fixed top-0 left-0 z-20 w-full">
        <OfferBar isActiveOffer={isActiveOffer} setIsActiveOffer={setIsActiveOffer} />
        <Navbar />
      </header>
      <Wins isActiveOffer={isActiveOffer} />
      <Sidebar routes={routesAdmin} isActiveOffer={isActiveOffer} />
      <NavbarMobileBottom />
      <main
        className={`overflow-x-hidden ${
          isActiveOffer
            ? 'pt-[233px] md:pt-[241px] lg:ml-[250px]'
            : 'pt-[178px] md:pt-[198px] lg:ml-[250px]'
        }`}
      >
        <div className="lg:px-[34px] lg:pt-[40px] pb-[40px] min-h-[100vh]">
          {children}
        </div>
      </main>
    </>
  );
}
