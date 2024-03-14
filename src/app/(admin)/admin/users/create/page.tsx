import { Container } from '@src/components';

import { PiUser } from 'react-icons/pi';
import { CreateUser } from './(components)';

export default function UserCreatePage() {
  return (
    <div className="">
      <Container>
        <h1 className="flex items-center gap-3 text-[25px] text-white font-semibold mb-8">
          <PiUser className="text-primary-100" size={32} /> Criando usuário
        </h1>
        <CreateUser />
      </Container>
    </div>
  );
}
