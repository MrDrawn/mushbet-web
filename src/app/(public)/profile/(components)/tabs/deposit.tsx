'use client';

import { useEffect, useState } from 'react';

import { apiClient } from '@src/services';
import { ITransaction } from '@src/interfaces';
import { format } from 'date-fns';
import { usePathname, useSearchParams } from 'next/navigation';
import Link from 'next/link';
import { RiLoader4Fill } from 'react-icons/ri';

export function DepositTab() {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const [loading, setLoading] = useState(true);

  const page = searchParams.get('page') || 1;

  const [transactions, setTransactions] = useState<ITransaction[]>([]);

  async function getTransactions() {
    setLoading(true);

    await apiClient
      .get(`/transactions/user?page=${page}&type=DEPOSIT`)
      .then(response => {
        setTransactions(response.data);

        setLoading(false);
      })
      .catch(error => {});
  }

  useEffect(() => {
    getTransactions();
  }, [page]);

  return (
    <div className="bg-[#27273D] p-[25px] rounded-[4px]">
      <div className="relative overflow-x-auto">
        <table className="w-full text-left">
          <thead className="text-[15px] font-medium text-white">
            <tr>
              <th scope="col" className="px-6 py-5">
                Meio de pagamento
              </th>
              <th scope="col" className="pl-4 py-5">
                Valor
              </th>
              <th scope="col" className="px-6 py-5">
                Tipo
              </th>
              <th scope="col" className="px-6 py-5">
                Criado em
              </th>
              <th scope="col" className="px-6 py-5">
                Última atualização
              </th>
              <th scope="col" className="px-6 py-5">
                Status
              </th>
            </tr>
          </thead>
          <tbody>
            {loading ? (
              <tr>
                <td colSpan={6} className="text-[14px] text-center text-white py-4">
                  <div className="flex justify-center items-center gap-2">
                    <RiLoader4Fill className="animate-spin" size={20} /> Carregando...
                  </div>
                </td>
              </tr>
            ) : transactions.length > 0 ? (
              transactions.map((transaction, index) => (
                <tr key={index} className="bg-[#212134]">
                  <th
                    scope="row"
                    className="pl-4 py-4 font-medium whitespace-nowrap text-white rounded-l-[4px]"
                  >
                    {transaction.payment_gateway}
                  </th>
                  <td className="px-6 py-4 text-white">
                    {transaction.amount.toLocaleString('pt-br', {
                      currency: 'BRL',
                      style: 'currency',
                    })}
                  </td>
                  <td className="px-6 py-4 text-white">
                    {(transaction.type === 'DEPOSIT' && 'Depósito') ||
                      (transaction.type === 'WITHDRAW' && 'Saque') ||
                      (transaction.type === 'INDICATION' && 'Indicação') ||
                      (transaction.type === 'WIN' && 'Vitória') ||
                      (transaction.type === 'BET' && 'Perdeu')}
                  </td>
                  <td className="px-6 py-4 text-white">
                    {transaction.created_at
                      ? format(new Date(transaction.created_at), "dd/MM/yyyy 'às' HH:mm")
                      : null}
                  </td>
                  <td className="px-6 py-4 text-white">
                    {transaction.updated_at
                      ? format(new Date(transaction.updated_at), "dd/MM/yyyy 'às' HH:mm")
                      : null}
                  </td>
                  <td className="px-6 py-4 rounded-r-[4px] text-white">
                    {(transaction.status === 'PENDING' && 'Pendente') ||
                      (transaction.status === 'PAID' && 'Aprovado') ||
                      (transaction.status === 'CANCELED' && 'Cancelado') ||
                      (transaction.status === 'REFUNDED' && 'Reembolsado') ||
                      (transaction.status === 'REJECTED' && 'Recusado') ||
                      (transaction.status === 'FAILED' && 'Falhou') ||
                      (transaction.status === 'WAITING_PAYMENT_GATEWAY' && 'Aguardando')}
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td
                  colSpan={6}
                  className="text-[14px] text-center text-secondary-100 py-4"
                >
                  Nenhuma transação encontrada.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
      <div className="flex justify-center items-center py-5">
        <nav aria-label="Paginação">
          <ul className="list-style-none flex gap-2">
            <li>
              <Link href={pathname + `?tab=deposit&page=${Number(page) - 1}`}>
                <button
                  className="relative block bg-transparent px-3 py-1.5 text-sm md:text-md rounded-full transition-all duration-300 text-white hover:bg-dark-200 disabled:opacity-50 disabled:cursor-not-allowed"
                  disabled={Number(page) === 1}
                >
                  Anterior
                </button>
              </Link>
            </li>
            <li aria-current="page">
              <Link
                className="relative block bg-transparent border border-dark-200 rounded-full px-3 py-1 text-sm md:text-md font-medium text-white transition-all duration-300"
                href="#!"
              >
                {Number(page)}
                <span className="absolute -m-px h-px w-px overflow-hidden whitespace-nowrap border-0 p-0 [clip:rect(0,0,0,0)]">
                  (ativo)
                </span>
              </Link>
            </li>
            <li>
              <Link href={pathname + `?tab=deposit&page=${Number(page) + 1}`}>
                <button
                  className="relative block bg-transparent px-3 py-1.5 text-sm md:text-md rounded-full transition-all duration-300 text-white hover:bg-dark-200 disabled:opacity-50 disabled:cursor-not-allowed"
                  disabled={transactions.length < 9 ? true : false}
                >
                  Próxima
                </button>
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
}
