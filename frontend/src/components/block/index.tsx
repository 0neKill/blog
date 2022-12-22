import React from 'react';
import clsx from 'clsx';

import './block.style.scss';

import { Routes } from 'helpers';
import { Button } from '../button';

interface Props {
    children: React.ReactNode,
    to: Routes,
    titleLink: string,
    className?: string
    handlerSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
}


export const Block: React.FunctionComponent<Props> = React.memo(({
                                                                     titleLink,
                                                                     to,
                                                                     children,
                                                                     className,
                                                                     handlerSubmit,
                                                                 }) => {
    return (
        <div className={clsx('block', className)}>
            <div className='block__header'>
                <h1 className='block__title'>Blog</h1>
            </div>
            <form className='block__wrapper' onSubmit={handlerSubmit}>
                {children}
            </form>
            <Button.Link to={to} className='block__link'>{titleLink}</Button.Link>
        </div>
    );
});
