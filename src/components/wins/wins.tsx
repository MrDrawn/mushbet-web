'use client';

import { useEffect, useState } from 'react';

import { Win, WinLoading } from './';
import { ITransaction } from '@src/interfaces';
import { apiClient } from '@src/services';

export function Wins({ isActiveOffer }: { isActiveOffer: boolean }) {
  const [loading, setLoading] = useState(true);

  const [transactions, setTransactions] = useState<ITransaction[]>([]);

  const [scrollPosition, setScrollPosition] = useState(0);

  const coinCount = 25;

  async function getWins() {
    setLoading(true);

    await apiClient
      .get('/transactions/gains')
      .then(response => {
        setTransactions(response.data);

        setLoading(false);
      })
      .catch(error => {});
  }

  useEffect(() => {
    getWins();
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setScrollPosition(prevPosition => (prevPosition + 1) % coinCount);
    }, 2000);

    return () => clearInterval(interval);
  }, [transactions]);

  return (
    <div
      className={`fixed ${
        isActiveOffer
          ? 'top-[146px] md:top-[149px] lg:top-[153px]'
          : 'top-[99px] md:top-[104px] lg:top-[104px]'
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
            {loading
              ? Array(coinCount)
                  .fill('')
                  .map((_, index) => <WinLoading key={index} />)
              : transactions.length > 0
              ? transactions.map((transaction, index) => (
                  <Win key={index} {...transaction} />
                ))
              : Array(coinCount)
                  .fill('')
                  .map((_, index) => <WinLoading key={index} />)}
          </div>
        </div>
      </div>
    </div>
  );
}
