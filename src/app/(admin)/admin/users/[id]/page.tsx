import { Container } from '@src/components';

import { PiUser } from 'react-icons/pi';
import { User } from './(components)';

export default function UserPage({
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
          <PiUser className="text-primary-100" size={32} /> Visualizando usuário
        </h1>
        <User id={id} />
      </Container>
    </div>
  );
}
