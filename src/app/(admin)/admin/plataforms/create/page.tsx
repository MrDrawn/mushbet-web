import { Container } from '@src/components';

import { PiGridFour } from 'react-icons/pi';
import { CreatePlataform } from './(components)';

export default function PlataformCreatePage() {
  return (
    <div className="">
      <Container>
        <h1 className="flex items-center gap-3 text-[25px] text-white font-semibold mb-8">
          <PiGridFour className="text-primary-100" size={32} /> Criando plataforma
        </h1>
        <CreatePlataform />
      </Container>
    </div>
  );
}
