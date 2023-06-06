import Link from "next/link";
import React, { ButtonHTMLAttributes } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  href?: string;
}

const Button: React.FC<ButtonProps> = ({ href, children }) => {
  if (href) {
    return (
      <Link
        href={href}
        className="w-[6rem] h-[0.1rem]rounded-md px-3.5 py-2 m-1 overflow-hidden relative group cursor-pointer border-2 font-medium border-indigo-600 text-indigo-600 text-white"
      >
        <span className="absolute w-64 h-0 transition-all duration-300 origin-center rotate-45 -translate-x-20 bg-indigo-600 top-1/2 group-hover:h-64 group-hover:-translate-y-32 ease"></span>
        <span className="relative text-indigo-600 transition duration-300 group-hover:text-white ease">
          {children}
        </span>
      </Link>
    );
  }
  return (
    <Link
      href="#_"
      className="w-[6rem] h-[0.1rem]rounded-md px-3.5 py-2 m-1 overflow-hidden relative group cursor-pointer border-2 font-medium border-indigo-600 text-indigo-600 text-white"
    >
      <span className="absolute w-64 h-0 transition-all duration-300 origin-center rotate-45 -translate-x-20 bg-indigo-600 top-1/2 group-hover:h-64 group-hover:-translate-y-32 ease"></span>
      <span className="relative text-indigo-600 transition duration-300 group-hover:text-white ease">
        Button
      </span>
    </Link>
  );
};

export default Button;
