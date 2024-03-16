'use client';

import Link from 'next/link';

import { Suspense } from 'react';

import { usePathname, useSearchParams } from 'next/navigation';

import { useEffect, useState } from 'react';

import { motion } from 'framer-motion';

import { PiCaretRight } from 'react-icons/pi';

interface ISidebarItem {
  icon: React.ReactNode;
  name: string;
  url?: string;
  childrens?: ISidebarItem[];
}

export function SidebarItem({ item, close }: { item: ISidebarItem; close?: () => void }) {
  return (
    <Suspense>
      <Item item={item} close={close} />
    </Suspense>
  );
}

function Item({ item, close }: { item: ISidebarItem; close?: () => void }) {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const [open, setOpen] = useState(true);

  const handleActive = () => {
    if (item.childrens) {
      item.childrens.forEach(child => {
        if (child.url === pathname) {
          setOpen(true);
        }
      });
    }
  };

  useEffect(() => {
    handleActive();
  }, []);

  if (item.childrens) {
    return (
      <div className={`${open ? 'rounded-md' : ''}`}>
        <motion.div
          className={`${
            pathname === item.url || open
              ? 'bg-gradient-to-r from-primary-100/25 from-5% via-[#212134] via-95% text-white'
              : 'bg-transparent text-secondary-100 hover:text-white'
          } flex gap-5 p-3 border-gray-900 w-full rounded-[4px] cursor-pointer`}
          onClick={() => setOpen(!open)}
        >
          {item.icon}
          <span className="font-medium text-[13px] self-center">{item.name}</span>
          <motion.span
            className="ml-auto self-center"
            animate={{ rotate: open ? 90 : 0 }}
          >
            <PiCaretRight size={16} />
          </motion.span>
        </motion.div>
        {open && (
          <div className="px-3 pt-5 flex flex-col gap-2">
            {item.childrens.map((child, index) => (
              <Link
                key={index}
                href={child.url ? child.url : '#'}
                aria-label={child.name}
                onClick={() => {
                  if (close) close();
                }}
              >
                <motion.div
                  className={`${
                    `${pathname}${searchParams.size > 0 ? `?${searchParams}` : ''}` ===
                    child.url
                      ? 'bg-gradient-to-r from-primary-100/25 from-10% via-[#212134] via-90% border-l-2 border-primary-100/100 text-primary-100'
                      : 'bg-transparent text-secondary-100 hover:text-white'
                  } flex gap-5 p-3 border-gray-900 w-full border-opacity-10 cursor-pointer`}
                >
                  {child.icon}
                  <span className="font-medium text-[13px] self-center">
                    {child.name}
                  </span>
                </motion.div>
              </Link>
            ))}
          </div>
        )}
      </div>
    );
  } else {
    return (
      <Link
        href={item.url ? item.url : '#'}
        aria-label={item.name}
        onClick={() => {
          if (close) close();
        }}
      >
        <motion.div
          className={`${
            `${pathname}${searchParams.size > 0 ? `?${searchParams}` : ''}` === item.url
              ? 'bg-gradient-to-r from-primary-100/25 from-5% via-[#212134] via-95% text-white'
              : 'bg-transparent text-secondary-100 hover:text-white'
          } flex gap-5 p-3 border-gray-900 w-full border-opacity-10 rounded-md cursor-pointer`}
        >
          {item.icon}
          <span className="font-medium text-[13px] self-center">{item.name}</span>
        </motion.div>
      </Link>
    );
  }
}
