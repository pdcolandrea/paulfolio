import BioContent from '@/components/Content/Bio/Bio';

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
];
