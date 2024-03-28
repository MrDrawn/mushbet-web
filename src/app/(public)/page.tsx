import { headers } from 'next/headers';

import { Container } from '@src/components';

import { Banners, Plataforms, Popular, Topbar } from './(components)';

export default function Home() {
  const header = headers();

  const userAgent = header.get('user-agent');

  return (
    <div className="flex justify-center items-center relative min-h-[100vh]">
      <Container>
            <Banners userAgent={userAgent} />
        <div className="px-[20px] lg:px-0">
          <Topbar />
        </div>
        <div className="flex flex-col gap-[30px] px-[20px] lg:px-0">
          <Popular />
          <Plataforms />
        </div>
      </Container>
    </div>
  );
}
