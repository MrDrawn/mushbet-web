import { Container } from '@src/components';

import { Games } from './(components)';

import { PiGameController } from 'react-icons/pi';
import Link from 'next/link';

export default function GamesPage() {
  return (
    <div className="">
      <Container>
        <div className="flex items-center justify-between mb-8">
          <h1 className="flex items-center gap-3 text-[25px] text-white font-semibold">
            <PiGameController className="text-primary-100" size={32} /> Jogos
          </h1>
          <Link
            href="/admin/games/create"
            className="text-[12px] lg:text-[14px] bg-purple-400 hover:bg-purple-500 text-white py-2 px-5 rounded-lg transition-all ease-in-out duration-300"
          >
            Criar jogo
          </Link>
        </div>
        <Games />
      </Container>
    </div>
  );
}