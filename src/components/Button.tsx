import React from 'react';

import clsx from 'clsx';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    children: React.ReactNode;
    className?: string;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
    ({ children, onClick, className, ...rest }, ref) => {
        return (
            <button
                ref={ref}
                className={clsx(
                    'rounded-lg',
                    'px-4',
                    'py-2',
                    'bg-black',
                    'text-white',
                    className
                )}
                onClick={onClick}
                {...rest}
            >
                {children}
            </button>
        );
    }
);
Button.displayName = 'Button';

export default Button;
