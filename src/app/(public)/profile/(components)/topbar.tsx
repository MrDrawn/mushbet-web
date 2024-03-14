'use client';

import { useUser } from '@src/contexts';

import { PiMoney } from 'react-icons/pi';

export function Topbar() {
  const { user } = useUser();

  return (
    <div className="grid grid-cols-1 2xl:grid-cols-2 gap-[40px]">
      <div className="flex flex-col lg:flex-row lg:gap-0 gap-[20px] justify-between items-center p-[20px] bg-[#27273D] rounded-[4px]">
        <div className="flex items-center gap-[20px]">
          <div className="w-[120px] h-[120px] rounded-full border-[3px] border-primary-100">
            {user ? user.username.charAt(0).toUpperCase() : '?'}
          </div>
          <div className="flex flex-col gap-[20px]">
            <div className="flex items-center gap-[20px]">
              <button className="bg-primary-100/10 text-primary-100/100 text-[16px] font-medium py-[5px] px-[20px] uppercase rounded-[5px]">
                55
              </button>
              <h1 className="text-[25px] text-white font-medium">
                {user ? user.username : '...'}
              </h1>
            </div>
            <div className="flex flex-col gap-[2px]">
              <p className="text-[16px] text-secondary-100">500 Coins to level up</p>
              <div className="bg-[#2B2B40] w-full h-[5px] rounded-[5px]">
                <div className="bg-primary-100 w-[50%] h-[5px] rounded-[5px]"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-[20px] p-[20px] bg-[#27273D] rounded-[4px]">
        <div className="flex flex-col lg:flex-row justify-between">
          <h1 className="text-[20px] text-white font-medium">Leaderboard</h1>
        </div>
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-[20px]">
          <div className="flex items-center gap-[10px]">
            <div className="bg-[#2B2B40] p-[10px] rounded-[5px]">
              <PiMoney className="text-white" size={24} />
            </div>
            <div className="flex flex-col">
              <h1 className="text-[20px] text-white font-medium">$0.00</h1>
              <p className="text-[14px] text-secondary-100">Total earnings</p>
            </div>
          </div>
          <div className="flex items-center gap-[10px]">
            <div className="bg-[#2B2B40] p-[10px] rounded-[5px]">
              <PiMoney className="text-white" size={24} />
            </div>
            <div className="flex flex-col">
              <h1 className="text-[20px] text-white font-medium">$0.00</h1>
              <p className="text-[14px] text-secondary-100">Earnings last 30 days</p>
            </div>
          </div>
          <div className="flex items-center gap-[10px]">
            <div className="bg-[#2B2B40] p-[10px] rounded-[5px]">
              <PiMoney className="text-white" size={24} />
            </div>
            <div className="flex flex-col">
              <h1 className="text-[20px] text-white font-medium">$0.00</h1>
              <p className="text-[14px] text-secondary-100">Referred Users</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
