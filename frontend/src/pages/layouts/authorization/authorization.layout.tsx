import React from 'react';
import { Outlet } from 'react-router-dom';

import './authorization.style.scss';

import { Container } from '../../../components';


export const AuthorizationLayout: React.FunctionComponent = () => {
    return (
        <section className='authorization'>
            <Container className='authorization__container'>
                <Outlet />
            </Container>
        </section>
    );
};
