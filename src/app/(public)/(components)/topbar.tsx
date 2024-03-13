'use client';

import { PiMagnifyingGlass } from 'react-icons/pi';

export function Topbar() {
  return (
    <div className="relative w-full mb-[40px]">
      <div className="absolute inset-y-0 left-0 flex items-center pl-3.5 pointer-events-none">
        <PiMagnifyingGlass className="text-secondary-100" size={18} />
      </div>
      <input
        id="search"
        type="text"
        placeholder="Procurar um jogo de cassio..."
        className="w-full bg-[#212134] px-[20px] py-[12px] rounded-[4px] outline-none pl-10 text-secondary-100 placeholder:text-[#3B3B4D] text-[14px]"
      />
    </div>
  );
}
