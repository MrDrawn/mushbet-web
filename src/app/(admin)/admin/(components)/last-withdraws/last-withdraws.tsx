'use client';

import { useEffect, useState } from 'react';

import { apiClient } from '@src/services';

import { LastWithdraw } from '.';

import { ITransaction } from '@src/interfaces';

import { RiLoader4Fill } from 'react-icons/ri';

export function LastWithdraws() {
  const [loading, setLoading] = useState(true);

  const [transactions, setTransactions] = useState<ITransaction[]>([]);

  async function getTransactions() {
    await apiClient
      .get('/transactions?type=WITHDRAW&status=PAID&limit=5')
      .then(response => {
        setTransactions(response.data);

        setLoading(false);
      })
      .catch(error => {});
  }

  useEffect(() => {
    getTransactions();
  }, []);

  return (
    <div className="bg-gray-900 mt-8 border border-gray-800 rounded-[12px]">
      <div className="relative overflow-x-auto overflow-y-hidden sm:rounded-lg">
        <table className="w-full text-left text-slate-500">
          <thead className="text-[14px] text-white uppercase">
            <tr>
              <th scope="col" className="px-6 py-3">
                ID
              </th>
              <th scope="col" className="px-6 py-3">
                Usuário
              </th>
              <th scope="col" className="px-6 py-3">
                Valor
              </th>
              <th scope="col" className="px-6 py-3">
                Meio de pagamento
              </th>
              <th scope="col" className="px-6 py-3">
                Tipo
              </th>
              <th scope="col" className="px-6 py-3">
                Última atualização
              </th>
              <th scope="col" className="px-6 py-3">
                Status
              </th>
            </tr>
          </thead>
          <tbody>
            {loading ? (
              <tr>
                <td colSpan={7} className="text-[14px] text-center text-white py-4">
                  <div className="flex justify-center items-center gap-2">
                    <RiLoader4Fill className="animate-spin" size={20} /> Carregando...
                  </div>
                </td>
              </tr>
            ) : transactions.length > 0 ? (
              transactions.map((transaction, index) => (
                <LastWithdraw key={index} {...transaction} />
              ))
            ) : (
              <tr>
                <td colSpan={7} className="text-center py-4">
                  Nenhuma transação encontrada.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}
