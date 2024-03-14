'use client';

import Link from 'next/link';
import React from 'react';

interface Item {
  title: string | React.ReactNode;
  content: string | React.ReactNode;
  identifier: 'INDICATION';
}

export function Tabs({ items, tab }: { items: Item[]; tab: 'indication' }) {
  let tabString = tab;

  const queryTab = {
    indication: 'INDICATION',
  };

  const inverseQueryTab = {
    INDICATION: 'indication',
  };

  return (
    <div>
      <div className="flex flex-col gap-y-2">
        <div className="relative flex items-center before:absolute before:right-0 before:left-0 before:bottom-0 before:content-['']">
          <div className="relative flex flex-col md:flex-row flex-auto self-stretch whitespace-nowrap transform-[translate(0)] gap-5 text-white dark:text-white">
            {items.map((item, index) => (
              <Link
                key={index}
                className={`relative text-[12px] bg-[#2B2B40] rounded-[6px] py-[17px] font-medium px-[25px] outline-none text-center ${
                  item.identifier === queryTab[tabString]
                    ? 'text-white'
                    : 'text-[#A9A9CA]'
                } `}
                href={`/affiliate?tab=${inverseQueryTab[item.identifier]}`}
              >
                {item.identifier === queryTab[tabString] && (
                  <>
                    <div className="absolute left-0 top-0 bg-primary-100/30 h-full rounded-[6px] w-full"></div>
                    <div className="bg-primary-100 absolute h-[20px] w-[2px] rounded-full left-0"></div>
                  </>
                )}
                {item.title}
              </Link>
            ))}
          </div>
        </div>
        <div className="mt-[40px]">
          {queryTab[tabString] === 'INDICATION' && items[0].content}
        </div>
      </div>
    </div>
  );
}
