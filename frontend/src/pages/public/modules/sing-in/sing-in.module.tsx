import React from 'react';

import './sing-in.style.scss';

import { Button, Input } from 'components';
import { singInInput, withValidateBlock, createInitialSingInData } from 'helpers';


export const SingIn: React.FunctionComponent = withValidateBlock(({ formik }) => {
    const input = React.useMemo(() => singInInput.map(item => (
        <Input
            key={item.name}
            id={item.name}
            name={item.name}
            type={item.type}
            placeholder={item.placeholder}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values[item.name]}
            status={(formik.touched[item.name] && formik.errors[item.name]) ? 'error' : ''}
            errorMessage={formik.errors[item.name]}
        />
    )), [formik]);

    return (
        <>
            {input}
            <Button className='block__btn' size='big'>
                Sing in
            </Button>
        </>
    );
}, createInitialSingInData);
