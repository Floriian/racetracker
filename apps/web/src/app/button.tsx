import { link } from 'fs';
import { ReactNode } from 'react';
import { Link } from 'react-router-dom';

interface ButtonProps {
  color: 'primary' | 'dark' | 'outline';
  children: ReactNode;
  link: string;
}

Button.defaultProps = {
  color: 'primary',
  link: '/',
};

export function Button({ color, children, link }: ButtonProps) {
  return (
    <>
      <Link
        to={link}
        className={`${
          color === 'primary'
            ? 'bg-lead hover:bg-lead-dark text-primary'
            : color === 'dark'
            ? 'bg-dark hover:bg-darker text-lead'
            : 'bg-transparent hover:bg-lead text-lead border border-lead hover:border-hover-dark hover:text-primary'
        } inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center rounded-lg focus:ring-2 focus:ring-lead`}
      >
        {children}
      </Link>
    </>
  );
}

export default Button;
