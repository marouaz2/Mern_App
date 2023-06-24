import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

const Home = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    axios.get('/posts')
      .then(response => {
        setPosts(response.data);
      })
      .catch(error => {
        console.error('Error retrieving posts:', error);
      });
  }, []);

  return (
    <div>
      <header>
        <h1>Welcome to My MERN App</h1>
        {/* <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/users">Users</Link>
            </li>
            <li>
              <Link to="/posts">Posts</Link>
            </li>
            <li>
              <Link to="/comments">Comments</Link>
            </li>
            <li>
              <Link to="/categories">Categories</Link>
            </li>
          </ul>
        </nav> */}
      </header>

      <section>
        <h2>Explore and Interact</h2>
        <p>Welcome to our MERN web application. Start exploring the various features and functionalities.</p>
        <p>Feel free to browse through users, posts, comments, and categories.</p>
        <p>Click on the links in the navigation to access different sections of the application.</p>

        <h3>Latest Posts</h3>
        {posts.length > 0 ? (
          <ul>
            {posts.map(post => (
              <li key={post._id}>
                <h4>{post.title}</h4>
                <p>{post.content}</p>
              </li>
            ))}
          </ul>
        ) : (
          <p>No posts found.</p>
        )}
      </section>

      <footer>
        <p>&copy; 2023 My MERN App. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Home;
