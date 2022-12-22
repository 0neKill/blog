import React from 'react';

import './post-list.style.scss';

import { Post as PostComponent } from './post';
import type { Post } from '__types__/post.type';

interface Props {
    posts: Array<Post>,
}

export function PostList({ posts }: Props) {
    return (
        <div className='post-list'>
            {
                posts.map(post => (
                    <PostComponent key={post.id} data={post} />
                ))
            }
        </div>
    );
}

PostList.Post = PostComponent;


