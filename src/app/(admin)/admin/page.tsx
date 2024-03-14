import { Container } from '@src/components';

import { LastDeposits, LastWithdraws, Statistics } from './(components)';
import { PiHeartBold } from 'react-icons/pi';

export default function Home() {
  return (
    <div className="">
      <Container>
        <h1 className="flex items-center gap-3 text-[25px] text-white mb-8 font-semibold">
          Bem-vindo ao Painel de Administração{' '}
          <PiHeartBold className="text-primary-100" size={32} />
        </h1>
        <Statistics />
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div>
            <h1 className="flex items-center gap-3 text-[18px] text-white my-8 font-semibold">
              Últimos 5 depósitos recentes
            </h1>
            <LastDeposits />
          </div>
          <div>
            <h1 className="flex justify-end text-end items-center gap-3 text-[18px] text-white my-8 font-semibold">
              Últimos 5 saques recentes
            </h1>
            <LastWithdraws />
          </div>
        </div>
      </Container>
    </div>
  );
}
