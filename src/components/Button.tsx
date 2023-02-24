import React from 'react';

interface IButtonProps {
  href: string;
  children: React.ReactNode;
  onClick?: React.MouseEvent<HTMLElement>;
}
function Button(props: IButtonProps) {
  const { children, href } = props;
  return (
    <a
      href={href}
      className="flex items-center justify-center gap-2 rounded py-2 px-5 text-text hover:bg-red-500"
    >
      {children}
    </a>
  );
}

export default Button;
