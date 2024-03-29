'use client';

import Image from 'next/image';
import Link from 'next/link';

import MobileDetect from 'mobile-detect';

import Carousel from 'react-multi-carousel';

import 'react-multi-carousel/lib/styles.css';

export function Banners({ userAgent }: { userAgent: string | null }) {
  let deviceType = '';

  const md = new MobileDetect(userAgent || 'desktop');

  if (md.tablet()) {
    deviceType = 'tablet';
  } else if (md.mobile()) {
    deviceType = 'mobile';
  } else {
    deviceType = 'desktop';
  }

  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 1,
      slidesToSlide: 1,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 1,
      slidesToSlide: 1,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      slidesToSlide: 1,
    },
  };

  const images = [
    {
      src: 'https://cdn.mush.bet/teste-sua-sorte-roleta.png',
      link: '/casino/pg-soft/fortune-dragon',
    },
  ];

  const CustomDot = ({ onMove, index, onClick, active }: any) => {
    return (
      <li
        className={`h-[2.5px] w-8 mr-2 mb-2 rounded-full cursor-pointer ${
          active ? 'bg-primary-100' : 'bg-dark-400'
        }`}
        onClick={() => onClick()}
      ></li>
    );
  };

  return (
    <div className="lg:rounded-[4px] mb-[40px]">
      <Carousel
        responsive={responsive}
        className="lg:rounded-[4px]"
        showDots
        arrows={false}
        customDot={<CustomDot />}
        autoPlay
        ssr
        infinite
        deviceType={deviceType}
        autoPlaySpeed={6000}
      >
        {images.map((image, index) => (
          <Link key={index} href={image.link} aria-label="Banner">
            <Image
              src={image.src}
              width={1280}
              height={300}
              className="min-h-[120px] h-auto lg:rounded-[4px] cursor-grab"
              quality={100}
              alt="Banner"
              onDragStart={event => event.preventDefault()}
            />
          </Link>
        ))}
      </Carousel>
    </div>
  );
}
