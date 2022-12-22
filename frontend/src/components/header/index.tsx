import React from 'react';

import './header.style.scss';

import { Burger, Button, Container, Profile, Search } from 'components';
import { Routes } from 'helpers';

const user = {
    id: 123,
    email: 'sa@bk.ru',
    name: 'Leslie Alexander',
    skill: 'Front-end developer',
};

export const Header: React.FunctionComponent = () => {
    const handlerClickForLi = (e: React.MouseEvent<HTMLAnchorElement>) => {
        e.preventDefault();
    };
    return (
        <header className='header'>
            <Container className='header__container'>
                <div className='header__start'>
                    <Burger />
                    <Button.Link to={Routes.MAIN} className='header__logo'>
                        <div className='logo__block'><span>E</span></div>
                        <p className='logo__title'>My Blog</p>
                    </Button.Link>
                    <nav className='nav'>
                        <ul className='nav__ul'>
                            <li className='nav__li link'>
                                <a href='#li' onClick={handlerClickForLi}>UI Design</a>
                            </li>
                            <li className='nav__li link'>
                                <a href='#li' onClick={handlerClickForLi}>Front-end</a>
                            </li>
                            <li className='nav__li link'>
                                <a href='#li' onClick={handlerClickForLi}>Back-end</a>
                            </li>
                        </ul>
                    </nav>
                </div>
                <div className='header__options'>
                    <Search className='header__search' />
                    <Profile mode='header' className='header__profile' user={user} />
                </div>
            </Container>
        </header>
    );
};
