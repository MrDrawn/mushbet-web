import { headers } from 'next/headers';

import { Container } from '@src/components';
import { Banners, Topbar } from '@src/app/(public)/(components)';
import { PiGameControllerBold } from 'react-icons/pi';
import { Games } from './(components)';

export default function AllGames() {
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
          <h1 className="flex items-center gap-3 text-white text-[20px] font-medium">
            <PiGameControllerBold size={20} /> Todos os jogos
          </h1>
          <Games />
        </div>
      </Container>
    </div>
  );
}
