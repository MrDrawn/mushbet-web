'use client';

import Script from 'next/script';

import { useMediaQuery } from 'react-responsive';

export function ChatLive() {
  const isTabletOrMobile = useMediaQuery({ query: '(max-width: 1224px)' });

  if (isTabletOrMobile) {
    return <></>;
  } else {
    return <Script src="//code.tidio.co/p4kzmsqzqsbr8mqbzcljykxtodtxlhpn.js" async />;
  }
}
