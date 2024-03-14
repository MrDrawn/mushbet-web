import Image from 'next/image';

import { Container } from '@src/components';

import { apiServer } from '@src/services';

import { redirect } from 'next/navigation';
import { AffiliateRegister } from './(components)';

export default async function AffiliatePage({
  params,
}: {
  params: {
    code: string;
  };
}) {
  const { code } = params;

  let affiliate;

  try {
    const { data: dataAfilliate } = await apiServer.get(`/affiliate/${code}`);

    affiliate = dataAfilliate;
  } catch (error: any) {
    return redirect('/');
  }

  return (
    <Container>
      <div className="flex flex-col lg:flex-row items-center justify-between gap-8 lg:px-0 mt-10 px-[20px]">
        <div>
          <h1 className="flex items-center gap-5 text-[20px] text-white mb-[30px] font-semibold">
            <div className="h-[2px] w-10 bg-primary-100" /> {affiliate.user.username}{' '}
            convidou você!
          </h1>
          <h1 className="text-[30px] lg:text-[50px] lg:w-[600px] text-white font-semibold">
            Se cadastre agora e ganhe bônus de depósito de até 50%
          </h1>
          <p className="text-[18px] lg:text-[25px] lg:w-[600px] text-gray-400 mt-5">
            Deposite agora e receba um bônus de até 50%
          </p>
          <AffiliateRegister code={code} />
        </div>
        <Image
          src="https://i.imgur.com/f70rYuv.png"
          width={600}
          height={600}
          alt="Fortune Tiger"
        />
      </div>
    </Container>
  );
}
