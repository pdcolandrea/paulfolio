import React, { useContext, useEffect, useState } from 'react';

import { ContextOfPaul } from '@/lib/context';

interface INavItemProps {
  name: string;
  fontSize?: number;
  hideNavbar?: () => void;
}

const NavItem: React.FC<INavItemProps> = (props) => {
  const { currSection, setCurrSection } = useContext(ContextOfPaul);
  const { name, fontSize, hideNavbar } = props;
  const isVisible = currSection === name;

  const [anchorTarget, setAnchorTarget] = useState<HTMLElement | null>(null);

  useEffect(() => {
    setAnchorTarget(document.getElementById(name));
  }, [name]);

  const handleClick = (event: { preventDefault: () => void }) => {
    event.preventDefault();
    setCurrSection(name);

    if (hideNavbar) hideNavbar();
    if (anchorTarget) {
      anchorTarget.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <a
      href={`#${name}`}
      onClick={handleClick}
      className={`whitespace-nowrap text-xl hover:text-white hover:opacity-100 active:text-green-500 ${
        isVisible && 'bg-red-500 text-2xl '
      }`}
    >
      {name}
    </a>
  );
};

export default NavItem;
