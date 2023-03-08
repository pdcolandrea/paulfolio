import React from 'react';
import {
  FaEnvelopeOpen,
  FaFileAlt,
  FaGithub,
  FaLinkedin,
} from 'react-icons/fa';

const links = [
  {
    title: 'Linkedin',
    href: 'https://www.linkedin.com/in/pdcolandrea/',
    icon: <FaLinkedin />,
  },
  {
    title: 'Github',
    href: 'https://github.com/pdcolandrea',
    icon: <FaGithub />,
  },
  {
    title: 'Email',
    href: 'mailto:colandreapaul@gmail.com',
    icon: <FaEnvelopeOpen />,
  },
  {
    title: 'Resume',
    href: '/resume.pdf',
    icon: <FaFileAlt />,
  },
];

const Social = () => {
  return (
    <div className="!hover:text-green-500 flex flex-row justify-end gap-3 text-xl text-text duration-300 group-hover:text-shadow">
      {links.map((link, index) => {
        return (
          <a
            key={index}
            href={link.href}
            className="duration-1000 hover:scale-[1.1] hover:text-green-500 hover:opacity-100 hover:transition-transform active:text-green-500"
          >
            {link.icon}
          </a>
        );
      })}
    </div>
  );
};

export default Social;
