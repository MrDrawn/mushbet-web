import { Container } from '@src/components';

import { Topbar, Tabs, WithdrawTab } from './(components)';

import { PiCopy } from 'react-icons/pi';

export default function Profile() {
  const items = [
    {
      title: (
        <div className="flex items-center gap-[8px]">
          <PiCopy className="text-[#A9A9CA]" size={20} /> Saques
        </div>
      ),
      content: <WithdrawTab />,
    },
  ];

  return (
    <Container>
      <div className="flex flex-col gap-[40px]">
        <Topbar />
        <Tabs items={items} />
      </div>
    </Container>
  );
}
