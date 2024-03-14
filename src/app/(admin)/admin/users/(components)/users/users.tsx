'use client';

import { useEffect, useState } from 'react';

import { apiClient } from '@src/services';

import { RiLoader4Fill } from 'react-icons/ri';
import { IUser } from '@src/interfaces';
import { User } from '.';
import { usePathname, useSearchParams } from 'next/navigation';
import Link from 'next/link';
import { Search } from './(components)';

export function Users() {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const [loading, setLoading] = useState(true);

  const search = searchParams.get('search') || '';
  const page = searchParams.get('page') || 1;

  const [users, setUsers] = useState<IUser[]>([]);

  async function getUsers() {
    setLoading(true);

    await apiClient
      .get(search ? `/users?search=${search}&page=${page}` : `/users?page=${page}`)
      .then(response => {
        setUsers(response.data);

        setLoading(false);
      })
      .catch(error => {});
  }

  useEffect(() => {
    getUsers();
  }, [page, search]);

  return (
    <div className="bg-dark-100 mt-8 border border-dark-200 rounded-[4px]">
      <Search />
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
                E-mail
              </th>
              <th scope="col" className="px-6 py-3">
                Carteira
              </th>
              <th scope="col" className="px-6 py-3">
                Saque bloqueado?
              </th>
              <th scope="col" className="px-6 py-3">
                Última atualização
              </th>
              <th scope="col" className="px-6 py-3">
                Status
              </th>
              <th scope="col" className="px-6 py-3"></th>
            </tr>
          </thead>
          <tbody>
            {loading ? (
              <tr>
                <td colSpan={8} className="text-[14px] text-center text-white py-4">
                  <div className="flex justify-center items-center gap-2">
                    <RiLoader4Fill className="animate-spin" size={20} /> Carregando...
                  </div>
                </td>
              </tr>
            ) : users.length > 0 ? (
              users.map((user, index) => <User key={index} {...user} />)
            ) : (
              <tr>
                <td colSpan={8} className="text-center py-4">
                  Nenhuma conta encontrada.
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
              <Link
                href={
                  pathname +
                  (search.length > 0
                    ? `?search=${search}&page=${Number(page) - 1}`
                    : `?page=${Number(page) - 1}`)
                }
              >
                <button
                  className="relative block bg-transparent px-3 py-1.5 text-sm md:text-md rounded-full transition-all duration-300 text-white hover:bg-gray-800 disabled:opacity-50 disabled:cursor-not-allowed"
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
              <Link
                href={
                  pathname +
                  (search.length > 0
                    ? `?search=${search}&page=${Number(page) + 1}`
                    : `?page=${Number(page) + 1}`)
                }
              >
                <button
                  className="relative block bg-transparent px-3 py-1.5 text-sm md:text-md rounded-full transition-all duration-300 text-white hover:bg-gray-800 disabled:opacity-50 disabled:cursor-not-allowed"
                  disabled={users.length < 9 ? true : false}
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
