import React from 'react';

type ButtonProps = {
  href: string;
  className?: string;
  children?: React.ReactNode;
};

function ButtonLink({ children, href, className }: ButtonProps) {
  return (
    <a href={href}>
      <p
        className={`py-2 px-10 rounded-xl text-lg font-semibold ${className}`}
      >
        {children}
      </p>
    </a>
  );
}

export default ButtonLink;