import { Container } from '@src/components';
import { PiGridFour } from 'react-icons/pi';
import { Plataforms } from './(components)';
import Link from 'next/link';

export default function PlataformsPage() {
  return (
    <div className="">
      <Container>
        <div className="flex items-center justify-between mb-8">
          <h1 className="flex items-center gap-3 text-[25px] text-white font-semibold">
            <PiGridFour className="text-primary-100" size={32} /> Plataformas
          </h1>
          <Link
            href="/admin/plataforms/create"
            className="bg-primary-100 hover:bg-primary-200 text-white rounded-[5px] px-[20px] py-[15px] font-medium text-[14px] transition-all duration-300 ease-in-out disabled:opacity-50 disabled:cursor-not-allowed"
          >
            Criar plataforma
          </Link>
        </div>
        <Plataforms />
      </Container>
    </div>
  );
}
