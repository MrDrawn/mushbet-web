'use client';

import {
  PiCopy,
  PiFacebookLogo,
  PiFolder,
  PiInstagramLogo,
  PiMoney,
  PiScales,
  PiTwitterLogo,
  PiUsers,
} from 'react-icons/pi';

import { useUser } from '@src/contexts';
import CopyToClipboard from 'react-copy-to-clipboard';
import toast from 'react-hot-toast';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { apiClient } from '@src/services';

export function Topbar() {
  const [loading, setLoading] = useState(true);

  const [statistic, setStatistic] = useState<{
    totalUsers: number;
    totalComission: number;
    lastComission: number;
  } | null>(null);

  const { user } = useUser();

  async function getStatistics() {
    setLoading(true);

    await apiClient
      .get(`/affiliates/statistics/user`)
      .then(response => {
        setStatistic(response.data);

        setLoading(false);
      })
      .catch(error => {});
  }

  useEffect(() => {
    getStatistics();
  }, []);

  return (
    <div className="grid grid-cols-1 2xl:grid-cols-2 gap-[40px]">
      <div className="flex flex-col lg:flex-row lg:gap-0 gap-[20px] justify-between items-center p-[20px] bg-[#27273D] rounded-[4px]">
        <div className="flex items-center gap-[20px]">
          <div className="flex justify-center items-center w-[120px] h-[120px] rounded-full bg-primary-100">
            <p className="text-[40px] text-white">
              {user ? user.username.charAt(0).toUpperCase() : '?'}
            </p>
          </div>
          <div className="flex flex-col gap-[10px]">
            <h1 className="text-[25px] text-white font-medium">
              {' '}
              {user ? user.username : '...'}
            </h1>
            <div className="flex items-center gap-[20px]">
              <div className="flex items-center gap-[10px]">
                <div className="bg-[#2B2B40] p-[10px] rounded-[5px]">
                  <PiMoney className="text-white" size={24} />
                </div>
                <div className="flex flex-col">
                  <h1 className="text-[20px] text-white font-medium">
                    {user
                      ? user.wallet.balance.toLocaleString('pt-br', {
                          currency: 'BRL',
                          style: 'currency',
                        })
                      : '...'}
                  </h1>
                  <p className="text-[14px] text-secondary-100">Disponível</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-[#303048] h-[1px] lg:h-[100px] w-[100px] lg:w-[1px]" />
        <div className="flex flex-row lg:flex-col gap-[20px]">
          <div className="flex items-center gap-[10px]">
            <div className="bg-[#2B2B40] p-[10px] rounded-[5px]">
              <PiFolder className="text-white" size={24} />
            </div>
            <div className="flex flex-col">
              <h1 className="text-[16px] text-secondary-100 font-medium">Categoria</h1>
              <p className="text-[14px] text-white">01</p>
            </div>
          </div>
          <div className="flex items-center gap-[10px]">
            <div className="bg-[#2B2B40] p-[10px] rounded-[5px]">
              <PiScales className="text-white" size={24} />
            </div>
            <div className="flex flex-col">
              <h1 className="text-[16px] text-secondary-100 font-medium">Comissão</h1>
              <p className="text-[14px] text-white">
                {user ? user.indicationCode.percentage : '0'}%
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-[20px] p-[20px] bg-[#27273D] rounded-[4px]">
        <div className="flex flex-col lg:flex-row justify-between">
          <h1 className="text-[20px] text-white font-medium">Estatisticas</h1>
          <div className="flex items-center gap-[10px] bg-[#787895]/10 p-[5px] rounded-[5px]">
            <div className="bg-[#2B2B40] py-[2px] px-[8px] rounded-[5px] text-white text-[16px] font-bold">
              <p>?</p>
            </div>
            <p className="text-[#787895] text-[12px] font-medium">
              Estatísticas desde o início da sua conta
            </p>
          </div>
        </div>
        <div className="flex flex-col lg:flex-row lg:items-center gap-[20px]">
          <div className="flex items-center gap-[10px]">
            <div className="bg-[#2B2B40] p-[10px] rounded-[5px]">
              <PiUsers className="text-white" size={24} />
            </div>
            <div className="flex flex-col">
              <h1 className="text-[20px] text-white font-medium">
                {loading ? '...' : statistic?.totalUsers}
              </h1>
              <p className="text-[14px] text-secondary-100">Indicações</p>
            </div>
          </div>
          <div className="flex items-center gap-[10px]">
            <div className="bg-[#2B2B40] p-[10px] rounded-[5px]">
              <PiMoney className="text-white" size={24} />
            </div>
            <div className="flex flex-col">
              <h1 className="text-[20px] text-white font-medium">
                {loading
                  ? '...'
                  : statistic?.totalComission.toLocaleString('pt-br', {
                      currency: 'BRL',
                      style: 'currency',
                    })}
              </h1>
              <p className="text-[14px] text-secondary-100">Total ganhos</p>
            </div>
          </div>
          <div className="flex items-center gap-[10px]">
            <div className="bg-[#2B2B40] p-[10px] rounded-[5px]">
              <PiMoney className="text-white" size={24} />
            </div>
            <div className="flex flex-col">
              <h1 className="text-[20px] text-white font-medium">
                {loading
                  ? '...'
                  : statistic?.lastComission.toLocaleString('pt-br', {
                      currency: 'BRL',
                      style: 'currency',
                    })}
              </h1>
              <p className="text-[14px] text-secondary-100">Último ganho</p>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col lg:flex-row justify-between lg:items-center bg-[#27273D] px-[20px] py-[30px] rounded-[4px] lg:gap-0 gap-[20px]">
        <div className="flex flex-col gap-[10px]">
          <h1 className="text-[16px] text-secondary-100 font-medium">
            Seu link de referência
          </h1>
          <p className="text-[14px] text-white">
            mush.bet/r/{user ? user.indicationCode.code : '...'}
          </p>
        </div>
        <div className="flex items-center gap-[10px]">
          <CopyToClipboard
            text={`https://www.mush.bet/r/${user ? user.indicationCode.code : '...'}`}
            onCopy={() => toast.success('Código de afiliado copiado!')}
          >
            <button className="flex items-center gap-[3px] font-medium bg-[#2B2B40] p-[15px] text-secondary-100 text-[12px] rounded-[5px]">
              <PiCopy className="text-secondary-100" size={18} /> Copiar link
            </button>
          </CopyToClipboard>
        </div>
      </div>
      <div className="flex flex-col lg:flex-row justify-between lg:items-center bg-[#27273D] px-[20px] py-[30px] rounded-[4px] lg:gap-0 gap-[20px]">
        <div className="flex flex-col gap-[10px]">
          <h1 className="text-[16px] text-secondary-100 font-medium">
            Compartilhe seu link
          </h1>
          <p className="text-[14px] text-white">Clique para compartilhar</p>
        </div>
        <div className="flex items-center gap-[10px]">
          <Link
            href={`https://www.facebook.com/share.php?u=https://www.mush.bet/r/${
              user ? user.indicationCode.code : '...'
            }`}
            className="bg-[#2B2B40] p-[20px] rounded-[5px]"
            target="_blank"
          >
            <PiFacebookLogo className="text-secondary-100" size={20} />
          </Link>
          <Link
            href={`https://www.instagram.com/?url=https://www.mush.bet/r/${
              user ? user.indicationCode.code : '...'
            }`}
            className="bg-[#2B2B40] p-[20px] rounded-[5px]"
            target="_blank"
          >
            <PiInstagramLogo className="text-secondary-100" size={20} />
          </Link>
          <Link
            href={`https://twitter.com/intent/tweet?url=https://www.mush.bet/r/${
              user ? user.indicationCode.code : '...'
            }&text=Entre neste link e ganhe até R$100,00 para começar a apostar.`}
            className="bg-[#2B2B40] p-[20px] rounded-[5px]"
            target="_blank"
          >
            <PiTwitterLogo className="text-secondary-100" size={20} />
          </Link>
          {/*<Link
            href={`https://www.facebook.com/share.php?u=https://www.mush.bet/r/${
              user ? user.indicationCode.code : '...'
            }`}
            className="bg-[#2B2B40] p-[20px] rounded-[5px]"
            target="_blank"
          >
            <PiDiscordLogo className="text-secondary-100" size={20} />
          </Link>*/}
        </div>
      </div>
    </div>
  );
}
