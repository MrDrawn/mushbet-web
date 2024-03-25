import { headers } from 'next/headers';

import { Container } from '@src/components';

import { Banners, Plataforms, Popular, Topbar } from './(components)';
import Link from 'next/link';
import Image from 'next/image';

export default function Home() {
  const header = headers();

  const userAgent = header.get('user-agent');

  return (
    <div className="flex justify-center items-center relative min-h-[100vh]">
      <Container>
        {/*    <Banners userAgent={userAgent} />
        <div className="px-[20px] lg:px-0">
          <Topbar />
        </div>
        <div className="flex flex-col gap-[30px] px-[20px] lg:px-0">
          <Popular />
          <Plataforms />
        </div>*/}
        <div className="w-full flex flex-col items-center gap-4 justify-center">
          <Link href="/" aria-label="MushBet">
            <Image
              src="/logotipo.png"
              width={100}
              height={100}
              quality={100}
              alt="MushBet"
            />
          </Link>
          <h1 className="text-white">Coming soon...</h1>
        </div>
      </Container>
    </div>
  );
}
