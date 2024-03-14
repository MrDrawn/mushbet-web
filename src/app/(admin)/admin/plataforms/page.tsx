import { Container } from '@src/components';
import { PiGridFour } from 'react-icons/pi';
import { Plataforms } from './(components)';
import Link from 'next/link';

export default function PlataformsPage() {
  return (
    <div className="">
      <Container>
        <div className="flex items-center justify-between mb-8">
          <h1 className="flex items-center gap-3 text-[25px] text-white mb-8 font-semibold">
            <PiGridFour className="text-primary-100" size={32} /> Plataformas
          </h1>
          <Link
            href="/admin/plataforms/create"
            className="text-[12px] lg:text-[14px] bg-purple-400 hover:bg-purple-500 text-white py-2 px-5 rounded-lg transition-all ease-in-out duration-300"
          >
            Criar plataforma
          </Link>
        </div>
        <Plataforms />
      </Container>
    </div>
  );
}
