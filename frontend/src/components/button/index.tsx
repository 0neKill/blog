import React from 'react';
import clsx from 'clsx';

import './button.style.scss';
import { Routes } from '../../helpers';
import { NavLink } from 'react-router-dom';

interface Props extends React.DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> {
    children?: React.ReactNode,
    size?: 'big',
}


export const Button = function ButtonDefault({ children, size, className,...anyProps }: Props) {

    return (
        <button className={clsx('btn', size, className)} {...anyProps}>
            {children}
        </button>
    );

};

Button.Link = function ButtonDefaultLink({
                                             to,
                                             className,
                                             children,
                                         }: { to: Routes, children: React.ReactNode, className?: string }) {
    return (
        <NavLink to={to} className={clsx('link', className)}>{children}</NavLink>
    );
};


