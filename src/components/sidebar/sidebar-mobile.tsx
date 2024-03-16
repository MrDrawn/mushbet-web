'use client';

import { motion } from 'framer-motion';

import { SidebarItem } from '.';

import { IRoutes } from '@src/interfaces';

export function SidebarMobile({
  isActiveOffer,
  routes,
  close,
}: {
  routes: IRoutes[];
  isActiveOffer: boolean;
  close: () => void;
}) {
  return (
    <motion.div
      initial={{ opacity: 0.5, height: 0 }}
      animate={{ opacity: 1, height: 'auto' }}
      exit={{ opacity: 0, height: 0 }}
      className="flex flex-col fixed top-0 left-0 z-10 w-full"
    >
      <div
        className={`bg-dark-200 ${
          isActiveOffer ? 'py-[170px] h-[100vh]' : 'py-[80px] h-[94vh]'
        } overflow-x-hidden overflow-y-auto`}
      >
        <div className="flex flex-col gap-3 p-[9px]">
          {routes.map((item, index) => (
            <SidebarItem key={index} item={item} close={close} />
          ))}
        </div>
      </div>
    </motion.div>
  );
}
