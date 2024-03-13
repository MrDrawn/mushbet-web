import { headers } from 'next/headers';

import { Container } from '@src/components';

import { Banners, Games, Popular, Topbar } from './(components)';

export default function Home() {
  const header = headers();

  const userAgent = header.get('user-agent');

  return (
    <div className="relative min-h-[100vh]">
      <Container>
        <Banners userAgent={userAgent} />
        <div className="px-[20px] lg:px-0">
          <Topbar />
        </div>
        <div className="flex flex-col gap-[30px] px-[20px] lg:px-0">
          <Popular />
          <Games />
        </div>
      </Container>
    </div>
  );
}
