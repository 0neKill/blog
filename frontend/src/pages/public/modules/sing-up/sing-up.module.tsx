import React from 'react';

import './sing-up.style.scss';

import { Button, Input } from 'components';
import { createInitialSingUpData, withValidateBlock, singUpInput } from 'helpers';

export const SingUp: React.FunctionComponent = withValidateBlock(({ formik }) => {
    const input = React.useMemo(() => singUpInput.map(item => (
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
                Sing Up
            </Button>
        </>
    );
}, createInitialSingUpData);
