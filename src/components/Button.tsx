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
      className="hidden items-center justify-center gap-2 rounded bg-[#1F1F1F] py-2 px-5 text-text duration-300 hover:scale-[0.98] hover:bg-[#292929] active:bg-[#333333] active:text-green-500 md:flex"
    >
      {children}
    </a>
  );
}

export default Button;
