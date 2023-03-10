import React, { useContext, useRef } from 'react';

import useOnScreen from '@/hooks/useOnScreen';
import { ContextOfPaul } from '@/lib/context';
import { scrollToSection } from '@/lib/selectors';

interface ISectionProps {
  title: string;
  Component: React.FC<any> | React.ReactNode;
  center?: boolean;
}

function Section(props: ISectionProps) {
  const { setCurrSection } = useContext(ContextOfPaul);
  const { title, Component, center } = props;
  const ref = useRef(null);
  const isVisible = useOnScreen(ref);

  if (isVisible) {
    console.log('setting current title', title);
    setCurrSection(title);
  }

  const renderComponent = () => {
    if (typeof Component === 'function') return <Component />;

    return Component;
  };

  const getLink = () => {
    scrollToSection(title);
  };

  return (
    <div
      id={title}
      ref={ref}
      className={`mb-12 min-h-screen w-full px-0 pt-0 pb-12 transition ${
        center && 'flex flex-col justify-center'
      }`}
    >
      <a
        onClick={getLink}
        className="flex cursor-pointer items-center gap-6 hover:block"
      >
        <h2 className="my-12 mx-0 max-w-fit border-b border-b-shadow pb-2 text-2xl font-bold transition-all">
          {title}
        </h2>

        {/* <a href="#" className="hidden p-0">
          <small>#</small>
        </a> */}
      </a>

      {renderComponent()}
    </div>
  );
}

export default Section;
