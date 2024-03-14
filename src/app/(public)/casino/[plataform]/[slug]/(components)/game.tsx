'use client';

import Link from 'next/link';

import { useEffect } from 'react';

export function Game({ game, fullscreen }: { game: any; fullscreen: boolean }) {
  useEffect(() => {
    // O conteúdo que você deseja escrever no iframe
    const content = game;

    // Obtendo a referência do iframe
    const iframe: any = document.getElementById('my-iframe');

    // Verifica se o iframe foi encontrado e escreve o conteúdo nele
    if (iframe) {
      const iframeDocument = iframe.contentDocument;
      if (iframeDocument) {
        iframeDocument.open();
        iframeDocument.write(content);
        iframeDocument.close();
      }
    }
  }, []);

  return (
    <div className={`relative w-full h-full z-50`}>
      <div
        className={`${
          fullscreen ? 'fixed' : 'fixed lg:hidden'
        } top-0 w-full h-[30px] bg-black/50 py-1 z-51`}
      >
        <Link
          href="/"
          className="flex justify-center items-center mx-auto text-white text-[14px] font-semibold text-center"
        >
          Clique para sair
        </Link>
      </div>
      <iframe
        id="my-iframe"
        title="iFrame Content"
        className={`h-[100vh] ${!fullscreen && 'lg:h-[60vh]'}`}
        width="100%"
        height="100%"
      />
    </div>
  );
}
