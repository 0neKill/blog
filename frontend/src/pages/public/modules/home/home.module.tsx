import React from 'react';

import './home.styles.scss';
import { PostList } from '../../../../components';
import { Categories, Post } from '../../../../__types__/post.type';

const posts: Array<Post> = [
    {
        id: '1',
        category: Categories['Front-end'],
        backgroundImage: 'https://cdn.dribbble.com/users/1247975/screenshots/17462231/media/64934ea29a7e71f715262fbe111fdce8.jpg?compress=1&resize=1000x750&vertical=top',
        created_at: new Date(),
        text: 'Suitable Quality is determined by product users, clients or customers, not by society in general. For example, a low priced product may be viewed as having high.',
        title: 'The More Important the Work, the More Important the Rest',
        user: {
            id: 123,
            email: 'sa@bk.ru',
            name: 'Leslie Alexander',
            skill: 'Front-end developer',
            avatar:'https://img.quizur.com/f/img5fa2c48e27a8d2.43648289.jpg?lastEdited=1604502675'
        },
    },
    {
        id: '2',
        category: Categories['UI Design'],
        backgroundImage: 'https://cdn.dribbble.com/users/1247975/screenshots/17462231/media/64934ea29a7e71f715262fbe111fdce8.jpg?compress=1&resize=1000x750&vertical=top',
        created_at: new Date(),
        text: 'Suitable Quality is determined by product users, clients or customers, not by society in general. For example, a low priced product may be viewed as having high.',
        title: 'The More Important the Work, the More Important the Rest',
        user: {
            id: 123,
            email: 'sa@bk.ru',
            name: 'Alexander',
            skill: 'Front-end developer',
        },
    },
    {
        id: '2',
        category: Categories['UI Design'],
        backgroundImage: 'https://cdn.dribbble.com/users/1247975/screenshots/17462231/media/64934ea29a7e71f715262fbe111fdce8.jpg?compress=1&resize=1000x750&vertical=top',
        created_at: new Date(),
        text: 'Suitable Quality is determined by product users, clients or customers, not by society in general. For example, a low priced product may be viewed as having high.',
        title: 'The More Important the Work, the More Important the Rest',
        user: {
            id: 123,
            email: 'sa@bk.ru',
            name: 'Alexander',
            skill: 'Front-end developer',
        },
    },
    {
        id: '2',
        category: Categories['UI Design'],
        backgroundImage: 'https://cdn.dribbble.com/users/1247975/screenshots/17462231/media/64934ea29a7e71f715262fbe111fdce8.jpg?compress=1&resize=1000x750&vertical=top',
        created_at: new Date(),
        text: 'Suitable Quality is determined by product users, clients or customers, not by society in general. For example, a low priced product may be viewed as having high.',
        title: 'The More Important the Work, the More Important the Rest',
        user: {
            id: 123,
            email: 'sa@bk.ru',
            name: 'Alexander',
            skill: 'Front-end developer',
        },
    },
    {
        id: '2',
        category: Categories['UI Design'],
        backgroundImage: 'https://cdn.dribbble.com/users/1247975/screenshots/17462231/media/64934ea29a7e71f715262fbe111fdce8.jpg?compress=1&resize=1000x750&vertical=top',
        created_at: new Date(),
        text: 'Suitable Quality is determined by product users, clients or customers, not by society in general. For example, a low priced product may be viewed as having high.',
        title: 'The More Important the Work, the More Important the Rest',
        user: {
            id: 123,
            email: 'sa@bk.ru',
            name: 'Alexander',
            skill: 'Front-end developer',
        },
    },

    {
        id: '2',
        category: Categories['UI Design'],
        backgroundImage: 'https://cdn.dribbble.com/users/1247975/screenshots/17462231/media/64934ea29a7e71f715262fbe111fdce8.jpg?compress=1&resize=1000x750&vertical=top',
        created_at: new Date(),
        text: 'Suitable Quality is determined by product users, clients or customers, not by society in general. For example, a low priced product may be viewed as having high.',
        title: 'The More Important the Work, the More Important the Rest',
        user: {
            id: 123,
            email: 'sa@bk.ru',
            name: 'Alexander',
            skill: 'Front-end developer',
        },
    },    {
        id: '2',
        category: Categories['UI Design'],
        backgroundImage: 'https://cdn.dribbble.com/users/1247975/screenshots/17462231/media/64934ea29a7e71f715262fbe111fdce8.jpg?compress=1&resize=1000x750&vertical=top',
        created_at: new Date(),
        text: 'Suitable Quality is determined by product users, clients or customers, not by society in general. For example, a low priced product may be viewed as having high.',
        title: 'The More Important the Work, the More Important the Rest',
        user: {
            id: 123,
            email: 'sa@bk.ru',
            name: 'Alexander',
            skill: 'Front-end developer',
        },
    },
];

export const Home: React.FunctionComponent = () => {
    return (
        <section className='home'>
            <PostList posts={posts} />
        </section>
    );
};
