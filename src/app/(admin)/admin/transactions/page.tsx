import { Container } from '@src/components';

import { Transactions } from './(components)';

import { PiCards } from 'react-icons/pi';

export default function TransactionsPage() {
  return (
    <div className="">
      <Container>
        <h1 className="flex items-center gap-3 text-[25px] text-white mb-8 font-semibold">
          <PiCards className="text-primary-100" size={32} /> Transações
        </h1>
        <Transactions />
      </Container>
    </div>
  );
}
