import { Container } from '@src/components';

import { PiGameController } from 'react-icons/pi';
import { CreateGame } from './(components)';

export default function GameCreatePage() {
  return (
    <div className="">
      <Container>
        <h1 className="flex items-center gap-3 text-[25px] text-white font-semibold mb-8">
          <PiGameController className="text-primary-100" size={32} /> Criando jogo
        </h1>
        <CreateGame />
      </Container>
    </div>
  );
}
