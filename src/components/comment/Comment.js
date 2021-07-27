import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import CommentDetails from '../CommentsDetails/CommentDetails';

const Comment = () => {
    const {id} = useParams();
    const [post, setPost] = useState({});
    const [comments, setComments] = useState([]);
    useEffect(()=>{
        const url = `https://jsonplaceholder.typicode.com/posts/${id}`;
        fetch(url)
        .then(res => res.json())
        .then(data => setPost(data))
    },[]);
    useEffect(()=>{
        const url = `https://jsonplaceholder.typicode.com/comments?postId=${id}`;
        fetch(url)
        .then(res => res.json())
        .then(data => setComments(data))
    },[]);
    return (
        <div>
            <h1>post: {post.id}</h1>
            <h1>title: {post.title}</h1>
            <h1>body: {post.body}</h1>
            <h1>comments side</h1>
           {
               comments.map(dt => <CommentDetails data={dt}></CommentDetails>)
           }
        </div>
    );
};

export default Comment;