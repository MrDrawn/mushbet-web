import { Container } from '@src/components';

import { PiGridFour } from 'react-icons/pi';
import { Plataform } from './(components)';

export default function PlataformPage({
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
          <PiGridFour className="text-primary-100" size={32} /> Visualizando plataforma
        </h1>
        <Plataform id={id} />
      </Container>
    </div>
  );
}
