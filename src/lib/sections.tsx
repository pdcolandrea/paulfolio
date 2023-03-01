import BioContent from '@/components/Content/Bio/Bio';
import ExperienceContent from '@/components/Content/Experience/Experience';

export interface ISection {
  title: string;
  Content: React.ReactNode;
  center?: boolean;
}

export const sections: Array<ISection> = [
  {
    title: 'bio',
    Content: <BioContent />,
    center: true,
  },
  {
    title: 'experience',
    Content: <ExperienceContent />,
  },
  {
    title: 'personal',
    Content: null,
  },
];
