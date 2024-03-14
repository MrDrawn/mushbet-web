'use client';

import { useEffect, useState } from 'react';

import { apiClient } from '@src/services';

import { IGame } from '@src/interfaces';

import { RiLoader4Fill } from 'react-icons/ri';
import { Game } from '.';
import Link from 'next/link';
import { usePathname, useSearchParams } from 'next/navigation';

export function Games() {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const [loading, setLoading] = useState(true);

  const search = searchParams.get('search') || '';
  const page = searchParams.get('page') || 1;

  const [games, setGames] = useState<IGame[]>([]);

  async function getGames() {
    setLoading(true);

    await apiClient
      .get(`/games?page=${page}`)
      .then(response => {
        setGames(response.data);

        setLoading(false);
      })
      .catch(error => {});
  }

  useEffect(() => {
    getGames();
  }, [page, search]);

  return (
    <div className="bg-dark-100 mt-8 border border-dark-200 rounded-[4px]">
      <div className="relative overflow-x-auto overflow-y-hidden sm:rounded-lg">
        <table className="w-full text-left text-slate-500">
          <thead className="text-[14px] text-white uppercase">
            <tr>
              <th scope="col" className="px-6 py-3">
                ID
              </th>
              <th scope="col" className="px-6 py-3">
                Nome
              </th>
              <th scope="col" className="px-6 py-3">
                ID Externo
              </th>
              <th scope="col" className="px-6 py-3">
                Slug
              </th>
              <th scope="col" className="px-6 py-3">
                Última atualização
              </th>
              <th scope="col" className="px-6 py-3">
                Ativo?
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
            ) : games.length > 0 ? (
              games.map((game, index) => <Game key={index} {...game} />)
            ) : (
              <tr>
                <td colSpan={8} className="text-center py-4">
                  Nenhum jogo encontrada.
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
                  disabled={games.length < 9 ? true : false}
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
