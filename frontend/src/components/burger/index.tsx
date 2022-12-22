import React from 'react';

import './burger.style.scss';

interface Props {

}

export const Burger: React.FunctionComponent<Props> = ({}) => {
    return (
        <div className='burger'>
            <input id='menu-toggle' type='checkbox' />
            <label className='menu-button-container' htmlFor='menu-toggle'>
                <div className='menu-button' />
            </label>
        </div>
    );
};
