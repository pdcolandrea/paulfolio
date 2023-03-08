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
      aria-label={`Scroll to ${name}`}
      href={`#${name}`}
      onClick={handleClick}
      className={`whitespace-nowrap text-xl transition-all duration-300 hover:text-2xl hover:text-white hover:opacity-100 hover:before:content-['>_'] active:text-green-500 group-hover:text-shadow  ${
        isVisible && `!text-2xl !text-green-500 before:content-['>_']`
      }`}
    >
      {name}
    </a>
  );
};

export default NavItem;
