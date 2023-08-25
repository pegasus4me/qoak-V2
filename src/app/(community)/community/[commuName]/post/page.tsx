import React from 'react'
import PostPage from '@/components/post/postPage'
import { PropsParams } from '../page';

const Post = ({params}:PropsParams) => {
    return <div>
        <PostPage commuinyName={params.commuName}/>
    </div>
}

export default Post