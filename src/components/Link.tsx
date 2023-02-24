import React from 'react';

const StyledLink: React.FC<React.HTMLProps<HTMLAnchorElement>> = (props) => {
  return (
    <a
      className="hover:text-white hover:opacity-100 active:text-green-500"
      {...props}
    />
  );
};

export default StyledLink;
