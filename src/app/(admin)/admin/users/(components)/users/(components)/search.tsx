'use client';

import Link from 'next/link';

import { usePathname } from 'next/navigation';

import { useState } from 'react';

import { PiMagnifyingGlassBold } from 'react-icons/pi';

export function Search() {
  const [search, setSearch] = useState('');

  const pathname = usePathname();

  return (
    <div className="flex flex-row gap-2 p-3">
      <input
        id="email"
        type="text"
        className="w-full text-[14px] bg-gray-800 border border-gray-700 rounded-md py-2 px-3 outline-none"
        placeholder="Pesquisar por usuario..."
        required
        onChange={event => setSearch(event.target.value)}
      />
      <Link
        href={pathname + (search.length > 0 ? `?search=${search}&page=1` : `?page=1`)}
        className="text-[14px] bg-purple-400 hover:bg-purple-500 text-white px-3 py-3 rounded-md transition-colors duration-300 ease-in-out disabled:opacity-50 disabled:cursor-not-allowed"
      >
        <PiMagnifyingGlassBold size={18} />
      </Link>
    </div>
  );
}
