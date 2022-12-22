import React from 'react';
import clsx from 'clsx';

import './container.style.scss';

interface Props {
    className?: string,
    children: React.ReactNode,
}

export const Container: React.FunctionComponent<Props> = ({ className, children }) => {
    return (
        <div className={clsx('container', className)}>
            {children}
        </div>
    );
};
