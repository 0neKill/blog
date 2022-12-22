import React from 'react';
import clsx from 'clsx';

import './profile.style.scss';

import { Avatar } from 'components';
import type { User } from '../../__types__/post.type';

interface Props {
    className?: string,
    user: User,
    mode: 'post' | 'header'
}

export const Profile: React.FunctionComponent<Props> = ({ className, mode, user }) => {
    return (
        <div className={clsx('profile', className, { 'profile--post': mode === 'post' })}>
            <div className='profile__info'>
                <span className='profile__name'>{user.name}</span>
                {mode === 'post' && <span className='profile__category'>{user.skill}</span>}
            </div>
            <Avatar isDisableSettings={true} className='profile__avatar' alt='avatar' src={user.avatar} />
        </div>
    );
};
