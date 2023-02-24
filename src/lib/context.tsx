import React, { createContext, useState } from 'react';

interface IPaulContext {
  currSection: string;
  setCurrSection: (section: string) => void;
}

// @ts-ignore
export const ContextOfPaul = createContext<IPaulContext>(null);

export const PaulProvider = ({ children }: { children: React.ReactNode }) => {
  const [currSection, setCurrSection] = useState('bio');

  return (
    <ContextOfPaul.Provider value={{ currSection, setCurrSection }}>
      {children}
    </ContextOfPaul.Provider>
  );
};
