import React from 'react';

const CommentDetails = (props) => {
    const {name,body} = props.data;
    return (
        <div>
          <h4>Name:{name}</h4>
          <h4>body: {body}</h4>
        </div>
    );
};

export default CommentDetails;