import Image from 'next/image';
import Link from 'next/link';

import { PiFireBold } from 'react-icons/pi';

export function Popular() {
  return (
    <div className="flex flex-col gap-[30px]">
      <h1 className="flex items-center gap-3 text-white text-[20px] font-medium">
        <PiFireBold size={20} /> Recomendados
      </h1>
      <div className="grid grid-cols-3 lg:grid-cols-3 2xl:grid-cols-3 lg:gap-[30px] gap-[10px]">
        <Link
          href="/casino/pg-soft/fortune-tiger"
          className="relative flex justify-center group"
        >
          <Image
            src={
              'https://imagedelivery.net/BgH9d8bzsn4n0yijn4h7IQ/1ee83eee-3d52-4bee-9262-b0e32414d700/w=900'
            }
            className="rounded-[4px] h-[150px] md:h-[100px] md:content-[url('https://imagedelivery.net/BgH9d8bzsn4n0yijn4h7IQ/6791647d-8684-4ef2-9acf-cf49e8dfce00/w=1761')]"
            height={500}
            width={500}
            quality={100}
            alt="Fortune Dragon"
          />
          <div className="rounded-lg w-full h-full absolute bottom-0 z-20 flex flex-col justify-end px-3 pb-3 transition-all ease-in-out duration-300"></div>
        </Link>
        <Link
          href="/casino/pg-soft/fortune-rabbit"
          className="relative flex justify-center group"
        >
          <Image
            src={
              'https://imagedelivery.net/BgH9d8bzsn4n0yijn4h7IQ/61608506-7a17-4f22-c3c4-9eb680906d00/w=900'
            }
            className="rounded-[4px] h-[150px] md:h-[100px] md:content-[url('https://imagedelivery.net/BgH9d8bzsn4n0yijn4h7IQ/2e37e8f3-14ca-40b1-d781-388181eae100/w=1761')]"
            height={500}
            width={500}
            quality={100}
            alt="Fortune Tiger"
          />
          <div className="rounded-lg w-full h-full absolute bottom-0 z-20 flex flex-col justify-end px-3 pb-3 transition-all ease-in-out duration-300"></div>
        </Link>
        <Link href="/casino/mines" className="relative flex justify-center group">
          <Image
            src={
              'https://imagedelivery.net/BgH9d8bzsn4n0yijn4h7IQ/61f2a29a-5c71-464f-a568-f44438428b00/w=900'
            }
            className="rounded-[4px] h-[150px] md:h-[100px] md:content-[url('https://imagedelivery.net/BgH9d8bzsn4n0yijn4h7IQ/4bf0ab65-75cf-4bc9-8ade-0abab4febb00/w=1761')]"
            height={500}
            width={500}
            quality={100}
            alt="Mines"
          />
          <div className="rounded-lg w-full h-full absolute bottom-0 z-20 flex flex-col justify-end px-3 pb-3 transition-all ease-in-out duration-300"></div>
        </Link>
      </div>
    </div>
  );
}
