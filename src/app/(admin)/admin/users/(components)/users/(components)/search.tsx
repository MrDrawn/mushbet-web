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
        className={`w-full bg-[#242435] px-[15px] text-[14px] py-[10px] placeholder:text-[#45454D] text-secondary-100 rounded-[5px] outline-none`}
        placeholder="Pesquisar por usuario..."
        required
        onChange={event => setSearch(event.target.value)}
      />
      <Link
        href={pathname + (search.length > 0 ? `?search=${search}&page=1` : `?page=1`)}
        className="bg-primary-100 hover:bg-primary-200 text-white rounded-[5px] px-[20px] py-[12px] font-medium text-[14px] transition-all duration-300 ease-in-out disabled:opacity-50 disabled:cursor-not-allowed"
      >
        <PiMagnifyingGlassBold size={18} />
      </Link>
    </div>
  );
}
