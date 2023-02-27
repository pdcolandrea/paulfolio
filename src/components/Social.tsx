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
    href: '',
    icon: <FaLinkedin />,
  },
  {
    title: 'Github',
    href: '',
    icon: <FaGithub />,
  },
  {
    title: 'Email',
    href: '',
    icon: <FaEnvelopeOpen />,
  },
  {
    title: 'Resume',
    href: '',
    icon: <FaFileAlt />,
  },
];

const Social = () => {
  return (
    <div className="flex flex-row gap-3 text-xl text-text hover:text-green-500 group-hover:text-shadow">
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
