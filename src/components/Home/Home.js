import React, { useEffect, useState } from 'react';
import Post from '../Post/Post';

const Home = () => {
    const [posts, setPosts] = useState([]);
    useEffect(()=>{
          const url = `https://jsonplaceholder.typicode.com/posts`;
          fetch(url)
          .then(res => res.json())
          .then(data => setPosts(data))
    },[]);
    return (
        <div>
           <h1>{posts.length}</h1>
           {
               posts.map(post => <Post Data={post}></Post>)
           }
        </div>
    );
};

export default Home;