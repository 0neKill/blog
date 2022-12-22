import React from 'react';

import './input.style.scss';
import clsx from 'clsx';

interface Props extends React.DetailedHTMLProps<React.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement> {
    children?: React.ReactNode,
    status?: string
    errorMessage?: string
}


export const Input: React.FunctionComponent<Props> = React.memo(({
                                                                     onBlur,
                                                                     value,
                                                                     onChange,
                                                                     className,
                                                                     placeholder,
                                                                     id,
                                                                     status,
                                                                     errorMessage,
                                                                 }) => {
    return (
        <div className={clsx('input', status, className)}>
            <input onBlur={onBlur} onChange={onChange} className='input__field' type='text' id={id} placeholder=' '
                   value={value} />
            <label className='input__placeholder' htmlFor={id}>{placeholder}</label>
            <span className={clsx('input__error', status)}>{errorMessage} </span>
        </div>
    );
});
