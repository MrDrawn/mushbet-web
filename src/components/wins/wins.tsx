'use client';

import { useEffect, useState } from 'react';

import { Win } from './';

export function Wins({ isActiveOffer }: { isActiveOffer: boolean }) {
  const [scrollPosition, setScrollPosition] = useState(0);

  const coinCount = 20;

  useEffect(() => {
    const interval = setInterval(() => {
      setScrollPosition(prevPosition => (prevPosition + 1) % coinCount);
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div
      className={`fixed ${
        isActiveOffer
          ? 'top-[146px] md:top-[149px] lg:top-[154px]'
          : 'top-[99px] md:top-[149px] lg:top-[105px]'
      } left-0 z-10`}
    >
      <div className="flex w-full bg-dark-200 py-3 shadow-sm">
        <div className="w-full overflow-y-hidden overflow-x-hidden">
          <div
            className="flex gap-5 w-content"
            style={{
              transition: 'transform 0.5s ease-in-out',
              transform: `translateX(-${scrollPosition * 100}px)`,
            }}
          >
            {Array(coinCount)
              .fill('')
              .map((_, index) => (
                <Win key={index} />
              ))}
          </div>
        </div>
      </div>
    </div>
  );
}
