import React, { useState, useEffect } from 'react';
import axios from 'axios';

const API_URL = 'https://dummyjson.com/posts';

const Home = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    axios.get(API_URL)
      .then(response => setPosts(response.data))
      .catch(error => console.error('Error fetching posts:', error));
  }, []);

  return (
    <div className="page">
      <h1>Posts</h1>
      <ul>
        {posts.map(post => (
          <li key={post.id}>
            <h3>{post.title}</h3>
            <p>{post.body}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Home;
