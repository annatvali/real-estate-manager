import Link from 'next/link';
import clsx from 'clsx';

interface ButtonProps {
  href?: string;
  children: React.ReactNode;
  className?: string;
  variant?: 'primary' | 'secondary' | 'delete';
  component?: 'link' | 'button';
  onClick?: () => void;
  hasIcon?: boolean;
}

const Button: React.FC<ButtonProps> = ({
  href,
  children,
  className,
  variant = 'primary',
  component = 'link',
  onClick,
  hasIcon = false,
}) => {
  const commonClasses = clsx(
    'group inline-flex items-center gap-[2px] rounded-[10px] px-[16px] py-[14px] font-firago font-medium text-base transition duration-300',
    {
      'bg-red-primary text-white hover:bg-red-hover': variant === 'primary',
      'border border-red-primary text-red-primary hover:bg-red-primary hover:text-white':
        variant === 'secondary',
      'border border-gray-medium text-gray-medium hover:bg-gray-medium hover:text-white':
        variant === 'delete',
    },
    className
  );

  const iconClasses = clsx(
    'icon-[ic--round-plus] h-[22px] w-[22px] transition duration-300',
    {
      'text-red-primary group-hover:text-white': variant === 'secondary',
    }
  );

  if (component === 'button') {
    return (
      <button className={commonClasses} onClick={onClick}>
        {hasIcon && variant !== 'delete' && (
          <span className={iconClasses}></span>
        )}
        {children}
      </button>
    );
  }

  return (
    <Link className={commonClasses} href={href || '#'}>
      {hasIcon && variant !== 'delete' && <span className={iconClasses}></span>}
      {children}
    </Link>
  );
};

export default Button;
