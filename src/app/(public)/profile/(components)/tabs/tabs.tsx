'use client';

import React, { useState, useEffect, useRef } from 'react';

interface Item {
  title: string | React.ReactNode;
  content: string | React.ReactNode;
}

export function Tabs({ items }: { items: Item[] }) {
  const [selectedTab, setSelectedTab] = useState(0);

  const firstBtnRef: any = useRef();

  useEffect(() => {
    firstBtnRef.current.focus();
  }, []);

  return (
    <div>
      <div className="flex flex-col gap-y-2">
        <div className="relative flex items-center before:absolute before:right-0 before:left-0 before:bottom-0 before:content-['']">
          <div className="relative flex flex-col md:flex-row flex-auto self-stretch whitespace-nowrap transform-[translate(0)] gap-5 text-slate-700 dark:text-white">
            {items.map((item, index) => (
              <button
                ref={index === 0 ? firstBtnRef : null}
                key={index}
                onClick={() => setSelectedTab(index)}
                className={`relative text-[12px] text-[#A9A9CA] bg-[#2B2B40] rounded-[6px] py-[17px] font-medium px-[25px] outline-none text-center ${
                  selectedTab === index ? '' : ''
                } `}
              >
                {selectedTab === index && (
                  <>
                    <div className="absolute left-0 top-0 bg-primary-100/10 h-full rounded-[6px] w-full"></div>
                    <div className="bg-primary-100 absolute h-[20px] w-[2px] rounded-full left-0"></div>
                  </>
                )}
                {item.title}
              </button>
            ))}
          </div>
        </div>

        <div className="mt-[40px]">
          {items.map((item, index) => (
            <div key={index} className={`${selectedTab === index ? '' : 'hidden'}`}>
              {item.content}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
