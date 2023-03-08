// @ts-ignore
import { disableBodyScroll, enableBodyScroll } from 'body-scroll-lock';
import Image from 'next/image';
import React, { useRef, useState } from 'react';
import { FaCaretRight } from 'react-icons/fa';

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
      className={`md:group fixed top-0 right-0 h-full w-fit max-w-screen-4/5 bg-navbg p-12 duration-500 md:sticky md:top-0 md:z-10 md:flex md:h-screen md:w-screen-1/3 md:flex-col md:items-end md:bg-inherit md:pt-16 md:pr-36 md:pl-16 ${
        isHidden && '-right-full'
      }`}
    >
      <Image
        className="hidden md:block"
        src="/me2.png"
        width={200}
        height={200}
        alt="avatar"
        priority
      />
      <h1 className="mb-0 whitespace-nowrap text-3xl font-bold">
        Paul Colandrea
      </h1>
      <div className="relative flex flex-col items-end gap-6 py-16 px-0">
        {renderMenu()}
      </div>
      <Social />
      <a
        onClick={toggle}
        className="!active:text-green-500 fixed bottom-12 right-12 flex h-16 w-16 cursor-pointer items-center justify-center rounded-full bg-[#292929] text-text shadow-md hover:scale-[0.98] hover:bg-[#383838] hover:transition-transform active:bg-[#424242] md:hidden"
      >
        <FaCaretRight
          className={`transition-all duration-500 ${isHidden && 'rotate-180'}`}
        />
      </a>
    </div>
  );
}
