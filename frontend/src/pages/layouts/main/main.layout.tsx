import React from 'react';
import { Outlet } from 'react-router-dom';

import './main.style.scss';

import { Container, Header } from 'components';


export const MainLayout: React.FunctionComponent = () => {
    return (
        <section className='main'>
            <Header />
            <Container>
                <Outlet />
            </Container>
        </section>
    );
};
