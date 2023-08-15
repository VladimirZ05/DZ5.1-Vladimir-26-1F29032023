import React, { useState } from 'react';
import axios from 'axios';

const API_URL = 'https://dummyjson.com/posts';

const CreatePost = () => {
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');

  const handleSubmit = async e => {
    e.preventDefault();

    if (title && body) {
      const newPost = { title, body };

      try {
        await axios.post(API_URL, newPost);
        // Очистка полей формы
        setTitle('');
        setBody('');
      } catch (error) {
        console.error('Error creating post:', error);
      }
    }
  };

  return (
    <div className="page">
      <h1>Create Post</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Title"
          value={title}
          onChange={e => setTitle(e.target.value)}
        />
        <textarea
          placeholder="Body"
          value={body}
          onChange={e => setBody(e.target.value)}
        />
        <button type="submit">Create</button>
      </form>
    </div>
  );
};

export default CreatePost;
