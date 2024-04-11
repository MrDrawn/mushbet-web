import type { Metadata, Viewport } from 'next';

import { Raleway } from 'next/font/google';

import '../globals.css';

import { ChatLive, Footer } from '@src/components';

import { Toaster } from 'react-hot-toast';

import { MainLayout } from '../layouts';
import { AuthProvider } from '@src/contexts';

const raleway = Raleway({ subsets: ['latin'] });

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  minimumScale: 1,
  userScalable: false,
};

export const metadata: Metadata = {
  title: 'Mush Bet Apostas Online | MushBet | Fortune Tiger',
  description:
    'Descubra a maior casa de apostas da América Latina. Junte-se ao MushBet e aproveite os jogos exclusivos como Fortune Tiger, Fortune Dragon e mais. Depósito mínimo de R$10 e saques rápidos a partir de R$20.',
  keywords:
    'mushbet, mush bet, apostas online, cassino online, jogo online, roleta, slots, blackjack, casino ao vivo, bônus de boas-vindas, afiliados mushbet, ganhos rápidos, apostas no Brasil',
  themeColor: '#5fd732',
  robots: 'index, follow',
  twitter: {
    title: 'Aposte no Mush Bet | Jogos Exclusivos e Bônus Generosos',
    description:
      'Participe do MushBet e ganhe com nossos jogos exclusivos como Fortune Tiger. Apostas seguras com altos retornos.',
    images: [
      {
        url: 'https://www.mush.bet/logotipo.png',
      },
    ],
  },
  openGraph: {
    title: 'Mush Bet Apostas Online | Aposte e Ganhe com Segurança',
    type: 'website',
    countryName: 'Brasil',
    alternateLocale: 'pt_BR',
    locale: 'pt_BR',
    description:
      'Entre na maior casa de apostas da América Latina. Desfrute de uma plataforma segura e dinâmica com jogos exclusivos como Fortune Tiger.',
    images: [
      {
        url: 'https://www.mush.bet/logotipo.png',
      },
    ],
    siteName: 'MushBet',
    url: 'https://www.mush.bet',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <head>
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="mobile-web-app-capable" content="yes" />
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link
          rel="icon"
          href="/icon?<generated>"
          type="image/<generated>"
          sizes="<generated>"
        />
        <link
          rel="apple-touch-icon"
          href="/apple-icon?<generated>"
          type="image/<generated>"
          sizes="<generated>"
        />
        <ChatLive />
      </head>
      <body className={`${raleway.className} bg-dark-300 h-full relative`}>
        <AuthProvider>
          <Toaster
            position="top-right"
            toastOptions={{
              style: {
                background: '#000',
                color: '#fff',
              },
            }}
          />
          <MainLayout>{children}</MainLayout>
          <div className="lg:ml-[220px]">
            <Footer />
          </div>
        </AuthProvider>
      </body>
    </html>
  );
}
