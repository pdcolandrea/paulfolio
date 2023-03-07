import { useRouter } from 'next/router';
import { useContext } from 'react';

import Section from '@/components/Content/Section';
import { Meta } from '@/layouts/Meta';
import { ContextOfPaul } from '@/lib/context';
import { sections } from '@/lib/sections';
import { Main } from '@/templates/Main';

const Index = () => {
  const { asPath } = useRouter();
  const { setCurrSection } = useContext(ContextOfPaul);

  const path = asPath.substring(2);
  if (path) {
    console.log('FOUND AS PATHs', path);
    setCurrSection(asPath.substring(2));
  }

  const renderSections = () => {
    return sections.map((section, key) => {
      return (
        <Section
          key={key}
          Component={section.Content}
          title={section.title}
          center={section.center ?? false}
        />
      );
    });
  };

  return (
    <Main
      meta={<Meta title="PaulFolio" description="Paul Colandrea Portfolio" />}
    >
      {renderSections()}
    </Main>
  );
};

export default Index;
