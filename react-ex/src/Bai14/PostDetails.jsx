import React from 'react'
import { useParams } from 'react-router-dom'

export default function PostDetails() {
    const params = useParams();
    const postId = params.postId
    return (
        <div>PostDetails

            POST ID = {postId}
        </div>
    )
}
