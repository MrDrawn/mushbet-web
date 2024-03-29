import { Container } from '@src/components';

import { Topbar, Tabs, WithdrawTab, DepositTab, BetTab } from './(components)';

import { PiClock, PiCurrencyDollar, PiUserBold, PiWallet } from 'react-icons/pi';

interface Item {
  title: string | React.ReactNode;
  content: string | React.ReactNode;
  identifier: 'WITHDRAW' | 'DEPOSIT' | 'BET';
}

export default function Profile({
  searchParams,
}: {
  searchParams: { [key: string]: string | string[] | undefined };
}) {
  const { tab } = searchParams as {
    tab: 'withdraw' | 'deposit' | 'bet';
  };

  const items: Item[] = [
    {
      title: (
        <div className="flex items-center gap-[8px]">
          <PiCurrencyDollar className="text-white" size={20} /> Saques
        </div>
      ),
      content: <WithdrawTab />,
      identifier: 'WITHDRAW',
    },
    {
      title: (
        <div className="flex items-center gap-[8px]">
          <PiWallet className="text-white" size={20} /> Depósitos
        </div>
      ),
      content: <DepositTab />,
      identifier: 'DEPOSIT',
    },
    {
      title: (
        <div className="flex items-center gap-[8px]">
          <PiClock className="text-white" size={20} /> Apostas
        </div>
      ),
      content: <BetTab />,
      identifier: 'BET',
    },
  ];

  return (
    <Container>
      <div className="flex flex-col gap-[40px] px-[20px] lg:px-0">
        <h1 className="flex items-center gap-3 text-white text-[20px] font-medium">
          <PiUserBold size={20} /> Perfil
        </h1>
        <Topbar />
        <Tabs items={items} tab={tab} />
      </div>
    </Container>
  );
}
