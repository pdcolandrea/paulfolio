// @ts-ignore
import { disableBodyScroll, enableBodyScroll } from 'body-scroll-lock';
import Image from 'next/image';
import React, { useRef, useState } from 'react';

import useClickOutside from '@/hooks/useClickOutside';
import { sections } from '@/lib/sections';

import Social from '../Social';
import NavItem from './NavItem';

export default function Navbar() {
  const [isHidden, setIsHidden] = useState(true);
  const navRef = useRef(null);

  const hide = () => {
    enableBodyScroll(navRef.current);
    setIsHidden(true);
  };

  const show = () => {
    disableBodyScroll(navRef.current);
    setIsHidden(false);
  };

  const toggle = isHidden ? show : hide;

  useClickOutside(navRef, hide);

  // const renderSubmenu = (
  //   sectionTitle: string,
  //   content: Array<Section>,
  //   key: number
  // ) => {
  //   return (
  //     <SubMenu title={sectionTitle} currentSection={section}>
  //       {content.map(({ title: subtitle }, submenuKey) => {
  //         return (
  //           <MenuItem
  //             key={`${key}-${submenuKey}`}
  //             sectionName={subtitle}
  //             className="menu-item"
  //             section={section}
  //             setSection={setSection}
  //             hideNav={hide}
  //             fontSize={18}
  //           />
  //         );
  //       })}
  //     </SubMenu>
  //   );
  // };

  const renderMenu = () => {
    return sections.map(({ title }, key) => {
      // if (Array.isArray(Content)) return renderSubmenu(title, Content, key);
      return <NavItem key={key} name={title} hideNavbar={hide} />;
    });
  };

  return (
    <div
      ref={navRef}
      className={`group sticky top-0 z-10 flex h-screen w-screen-1/3 flex-col items-end pt-16 pr-36 pl-16`}
    >
      <Image
        className="hidden md:block"
        src="/me2.png"
        width={200}
        height={200}
        alt="avatar"
      />
      <h1 className="mb-0 whitespace-nowrap text-3xl font-bold">
        Paul Colandrea
      </h1>
      <div className="relative flex flex-col items-end gap-6 py-16 px-0">
        {renderMenu()}
      </div>
      <Social />
    </div>
  );
}
