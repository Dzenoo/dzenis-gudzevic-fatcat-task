import React from 'react';
import clsx from 'clsx';

interface LayoutProps {
    children: React.ReactNode;
    background?: string;
}

const Layout: React.FC<LayoutProps> = ({ children, background }) => {
    return <section className={clsx('py-20', background)}>{children}</section>;
};

export default Layout;
