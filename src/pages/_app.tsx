import '../styles/global.css';

import { Analytics } from '@vercel/analytics/react';
import type { AppProps } from 'next/app';
import { Raleway } from 'next/font/google';

import { PaulProvider } from '@/lib/context';

const lato = Raleway({
  variable: '--font-lato',
  subsets: ['latin'],
});

const MyApp = ({ Component, pageProps }: AppProps) => (
  <PaulProvider>
    <main className={`${lato.variable} font-sans`}>
      <Component {...pageProps} />
      <Analytics />
    </main>
  </PaulProvider>
);

export default MyApp;
