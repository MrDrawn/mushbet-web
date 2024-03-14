'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

import { useEffect, useState } from 'react';

import { motion } from 'framer-motion';
import { PiCaretRight } from 'react-icons/pi';

interface ISidebarItem {
  icon: React.ReactNode;
  name: string;
  url?: string;
  childrens?: ISidebarItem[];
}

export function SidebarItem({ item }: { item: ISidebarItem }) {
  const pathname = usePathname();

  const [open, setOpen] = useState(false);

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
            item.url === pathname || open
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
              <Link key={index} href={child.url ? child.url : '#'}>
                <motion.div
                  className={`${
                    child.url === pathname
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
      <Link href={item.url ? item.url : '#'}>
        <motion.div
          className={`${
            item.url === pathname
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
