import type { ReactNode } from 'react';

import Footer from '@/components/Footer';
import Navbar from '@/components/Nav/Navbar';

type IMainProps = {
  meta: ReactNode;
  children: ReactNode;
};

const Main = (props: IMainProps) => (
  <div className="h-screen w-screen">
    {props.meta}

    {/* <Header /> */}

    <div className="my-0 mx-auto flex min-h-full max-w-3/4 flex-row">
      <Navbar />
      <main
        id="main"
        className="flex w-full flex-col items-center justify-center gap-4"
      >
        {props.children}
        <Footer />
      </main>
    </div>
  </div>
);

export { Main };
