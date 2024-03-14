import { PiCopy, PiUsersBold } from 'react-icons/pi';

import { IndicationTab, Tabs, Topbar } from './(components)';
import { Container } from '@src/components';

interface Item {
  title: string | React.ReactNode;
  content: string | React.ReactNode;
  identifier: 'INDICATION';
}

export default function Affiliates({
  searchParams,
}: {
  searchParams: { [key: string]: string | string[] | undefined };
}) {
  const { tab } = searchParams as {
    tab: 'indication';
  };

  const items: Item[] = [
    {
      title: (
        <div className="flex items-center gap-[8px]">
          <PiCopy className="text-[#A9A9CA]" size={20} /> Ganhos
        </div>
      ),
      content: <IndicationTab />,
      identifier: 'INDICATION',
    },
  ];

  return (
    <Container>
      <div className="flex flex-col gap-[40px]">
        <h1 className="flex items-center gap-3 text-white text-[20px] font-medium">
          <PiUsersBold size={20} /> Afiliado
        </h1>
        <Topbar />
        <Tabs items={items} tab={tab} />
      </div>
    </Container>
  );
}
