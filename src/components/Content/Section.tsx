import React, { useRef } from 'react';

import useOnScreen from '@/hooks/useOnScreen';

interface ISectionProps {
  title: string;
  Component: React.FC<any> | React.ReactNode;
  setSection: (val: string) => void;
  center?: boolean;
}

function Section(props: ISectionProps) {
  const { title, Component, setSection, center } = props;
  const ref = useRef(null);
  const isVisible = useOnScreen(ref);

  if (isVisible) {
    setSection(title);
  }

  const renderComponent = () => {
    if (typeof Component === 'function') return <Component />;

    return Component;
  };

  const getLink = () => {
    // scroll to section
  };

  return (
    <div
      className={`mb-12 min-h-screen w-full px-0 pt-0 pb-12 transition ${
        center && 'flex flex-col justify-center'
      }`}
    >
      <a
        onClick={getLink}
        className="flex cursor-pointer items-center gap-6 hover:block"
      >
        <h2 className="my-12 mx-0 max-w-fit border-b border-b-shadow pb-2 transition-colors">
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
