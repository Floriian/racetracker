import { ReactNode } from 'react';

interface ButtonProps {
  children: ReactNode;
  className?: string;
  onClick?: () => void;
  disabled?: boolean;
  color?: 'primary' | 'dark' | 'outline';
  link?: string;
}

const Button = ({
  children,
  className,
  onClick,
  disabled = false,
  color = 'primary',
}: ButtonProps) => {
  return (
    <>
      <button
        onClick={onClick}
        disabled={disabled}
        className={`${className ? `${className} ` : ''}${
          color === 'primary'
            ? 'bg-lead hover:bg-lead-dark text-primary disabled:bg-disabled'
            : color === 'dark'
            ? 'bg-dark hover:bg-darker text-lead disabled:text-disabled disabled:hover:bg-dark'
            : 'bg-transparent text-lead border border-lead hover:border-lead-dark hover:text-lead-dark disabled:text-disabled disabled:border-disabled disabled:hover:bg-transparent'
        } inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center rounded-lg focus:ring-2 focus:ring-lead`}
      >
        {children}
      </button>
    </>
  );
};

export default Button;
