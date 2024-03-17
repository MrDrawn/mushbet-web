import type { Metadata, Viewport } from 'next';

import { Raleway } from 'next/font/google';

import '../globals.css';

import { Footer } from '@src/components';

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
  title: 'Casa de aposta online | MushBet',
  description: 'A maior casa de aposta da américa latina.',
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
