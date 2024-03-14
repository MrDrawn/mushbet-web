import { Container } from '@src/components';

import { PiGear } from 'react-icons/pi';

export default function SettingsPage() {
  return (
    <div className="">
      <Container>
        <h1 className="flex items-center gap-3 text-[25px] text-white mb-8 font-semibold">
          <PiGear className="text-primary-100" size={32} /> Configurações
        </h1>
      </Container>
    </div>
  );
}
