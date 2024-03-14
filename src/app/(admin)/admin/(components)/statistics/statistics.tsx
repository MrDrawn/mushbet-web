'use client';

import { useEffect, useState } from 'react';

import { Statistic } from '.';

import { apiClient } from '@src/services';
import {
  PiCards,
  PiCurrencyDollar,
  PiGameController,
  PiUsers,
  PiX,
} from 'react-icons/pi';

export function Statistics() {
  const [statistic, setStatistic] = useState<{
    totalUsers: number;
    totalGames: number;
    totalTransactions: number;
    totalDepositsDay: number;
    totalDepositsMonth: number;
    totalDepositsYear: number;
    totalDeposits: number;
    totalWithdrawsDay: number;
    totalWithdrawsMonth: number;
    totalWithdrawsYear: number;
    totalWithdraws: number;
  } | null>(null);

  const statistics = [
    {
      icon: <PiUsers className="text-primary-100" size={38} />,
      name: 'Contas ativas',
      value: statistic?.totalUsers || 0,
      color: 'bg-green-500/30',
    },
    {
      icon: <PiGameController className="text-primary-100" size={38} />,
      name: 'Jogos ativos',
      value: statistic?.totalGames || 0,
      color: 'bg-green-500/30',
    },
    {
      icon: <PiCards className="text-primary-100" size={38} />,
      name: 'Transações totais',
      value: statistic?.totalTransactions || 0,
      color: 'bg-green-500/30',
    },
  ];

  const statisticsGains = [
    {
      icon: <PiCurrencyDollar className="text-primary-100" size={38} />,
      name: 'Depósitos do dia',
      value: statistic?.totalDepositsDay || 0,
      color: 'bg-green-500/30',
      gain: true,
    },
    {
      icon: <PiCurrencyDollar className="text-primary-100" size={38} />,
      name: 'Depósitos do mês',
      value: statistic?.totalDepositsMonth || 0,
      color: 'bg-green-500/30',
      gain: true,
    },
    {
      icon: <PiCurrencyDollar className="text-primary-100" size={38} />,
      name: 'Depósitos do ano',
      value: statistic?.totalDepositsYear || 0,
      color: 'bg-green-500/30',
      gain: true,
    },
    {
      icon: <PiCurrencyDollar className="text-primary-100" size={38} />,
      name: 'Depósitos totais',
      value: statistic?.totalDeposits || 0,
      color: 'bg-green-500/30',
      gain: true,
    },
  ];

  const statisticsLosses = [
    {
      icon: <PiX className="text-primary-100" size={38} />,
      name: 'Saques do dia',
      value: statistic?.totalWithdrawsDay || 0,
      color: 'bg-green-500/30',
      gain: true,
    },
    {
      icon: <PiX className="text-primary-100" size={38} />,
      name: 'Saques do mês',
      value: statistic?.totalWithdrawsMonth || 0,
      color: 'bg-green-500/30',
      gain: true,
    },
    {
      icon: <PiX className="text-primary-100" size={38} />,
      name: 'Saques do ano',
      value: statistic?.totalWithdrawsYear || 0,
      color: 'bg-green-500/30',
      gain: true,
    },
    {
      icon: <PiX className="text-primary-100" size={38} />,
      name: 'Saques totais',
      value: statistic?.totalWithdraws || 0,
      color: 'bg-green-500/30',
      gain: true,
    },
  ];

  async function getStatistics() {
    await apiClient
      .get('/statistics')
      .then(response => {
        setStatistic(response.data);
      })
      .catch(error => {});
  }

  useEffect(() => {
    getStatistics();
  }, []);

  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {statistics.map((statistic, index) => (
          <Statistic key={index} {...statistic} />
        ))}
      </div>
      <div className="grid grid-cols-1 md:grid-cols-4 mt-8 gap-8">
        {statisticsGains.map((statistic, index) => (
          <Statistic key={index} {...statistic} />
        ))}
      </div>
      <div className="grid grid-cols-1 md:grid-cols-4 mt-8 gap-8">
        {statisticsLosses.map((statistic, index) => (
          <Statistic key={index} {...statistic} />
        ))}
      </div>
    </>
  );
}
