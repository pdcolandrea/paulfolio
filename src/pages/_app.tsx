import '../styles/global.css';

import type { AppProps } from 'next/app';

import { PaulProvider } from '@/lib/context';

const MyApp = ({ Component, pageProps }: AppProps) => (
  <PaulProvider>
    <Component {...pageProps} />
  </PaulProvider>
);

export default MyApp;
