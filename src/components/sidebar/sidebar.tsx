import { useSearchParams } from 'next/navigation';

import { IRoutes } from '@src/interfaces';

import { SidebarItem } from '.';
import { Suspense } from 'react';

export function Sidebar({
  routes,
  isActiveOffer,
}: {
  routes: IRoutes[];
  isActiveOffer: boolean;
}) {
  const searchParams = useSearchParams();

  return (
    <div
      className={`lg:fixed w-[250px] z-10 ${
        isActiveOffer ? 'top-[149px] lg:top-[153px]' : 'top-[149px] lg:top-[104px]'
      } bg-[#212134] bottom-0 overflow-y-auto select-none`}
    >
      <div className="hidden lg:flex h-full flex-col gap-3 p-[9px]">
        {routes.map((item, index) => (
          <Suspense key={index}>
            <SidebarItem item={item} searchParams={searchParams} />
          </Suspense>
        ))}
      </div>
    </div>
  );
}
