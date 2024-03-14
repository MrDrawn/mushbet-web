import { Container } from '@src/components';

import { PiGameController } from 'react-icons/pi';
import Link from 'next/link';
import { Game } from './(components)';

export default function GamePage({
  params,
}: {
  params: {
    id: string;
  };
}) {
  const { id } = params;

  return (
    <div className="">
      <Container>
        <h1 className="flex items-center gap-3 text-[25px] text-white font-semibold mb-8">
          <PiGameController className="text-primary-100" size={32} /> Visualizando jogo
        </h1>
        <Game id={id} />
      </Container>
    </div>
  );
}
