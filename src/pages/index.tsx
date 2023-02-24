import { useRouter } from 'next/router';
import { useState } from 'react';

import Section from '@/components/Content/Section';
import { Meta } from '@/layouts/Meta';
import { sections } from '@/lib/sections';
import { Main } from '@/templates/Main';

const Index = () => {
  const [currSection, setCurrSection] = useState('bio');
  const router = useRouter();

  const renderSections = () => {
    return sections.map((section, key) => {
      return (
        <Section
          key={key}
          Component={section.Content}
          title={section.title}
          setSection={setCurrSection}
          center={section.center ?? false}
        />
      );
    });
  };

  return (
    <Main
      meta={
        <Meta
          title="Next.js Boilerplate Presentation"
          description="Next js Boilerplate is the perfect starter code for your project. Build your React application with the Next.js framework."
        />
      }
    >
      {renderSections()}
    </Main>
  );
};

export default Index;
