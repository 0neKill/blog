import React from 'react';

import './post.styles.scss';

import { Profile } from '../../profile';
import type { Post as IProps } from '__types__/post.type';
import { Link } from 'react-router-dom';
import { Routes } from '../../../helpers';

interface Props {
    data: IProps,
}


export const Post: React.FunctionComponent<Props> = ({ data }) => {
    return (
        <article className='post'>
            <div className='post__header'>
                <Link to={Routes.POST} className={'test'}>
                    <img
                        src={data.backgroundImage}
                        alt='1' />
                </Link>
            </div>
            <div className='post__body'>
                <div className='post__metadata'>
                    <p className='post__category'>{data.category}</p>
                    <p className='post__data'>{data.created_at.toLocaleString('ru')}</p>
                </div>
                <h2 className='post__title'>{data.title}</h2>
                <p className='post__description'>{data.text}</p>
                <div className='post__footer'>
                    <Profile mode='post' user={data.user} />
                </div>
            </div>
        </article>
    );
};
