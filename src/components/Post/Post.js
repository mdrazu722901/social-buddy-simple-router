import React from 'react';
import { useHistory } from 'react-router-dom';

const Post = (props) => {
    const {id, title, body} = props.Data;
    const history = useHistory();
    const handleClick = (id) => {
        const url = `/comment/${id}`;
        history.push(url);
    };
    return (
        <div>
            <h1><strong>id:{id}</strong>{title}</h1>
            <h3>{body}</h3>
            <button onClick={()=> handleClick(id)}>Show Comment</button>
        </div>
    );
};

export default Post;