'use client';

import Script from 'next/script';

import { useMediaQuery } from 'react-responsive';

export function ChatLive() {
  const isTabletOrMobile = useMediaQuery({ query: '(max-width: 1224px)' });

  if (isTabletOrMobile) {
    return <></>;
  } else {
    return (
      <Script src="https://embed.tawk.to/66064237a0c6737bd126202c/1hq475aju" async />
    );
  }
}
