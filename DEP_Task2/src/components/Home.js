// src/components/Home.js
import React, { useState } from 'react';
import BlogPost from './BlogPost';
import chococake from './images/chococake.jpg'; 
import lemontart from './images/lemontart.jpg'; 
import lavacake from './images/lavacake.jpg';
import './Home.css';

const Home = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [newPostTitle, setNewPostTitle] = useState('');
  const [newPostContent, setNewPostContent] = useState('');
  const [newPostImage, setNewPostImage] = useState('');
  const [posts, setPosts] = useState([
    {
      id: 1,
      title: 'Chocolate Cake',
      content: 'Rich, moist chocolate cake is a beloved classic dessert. Layers of deep cocoa-flavored cake are often covered in smooth chocolate frosting.',
      image: chococake // Local image import
    },
    {
      id: 2,
      title: ' Lemon Tart',
      content: 'A Bright and refreshing, lemon tart balances sweet and tart flavors perfectly. A buttery pastry crust holds a silky, zesty lemon custard filling.',
      image: lemontart // Local image import
    },
    {
      id: 3,
      title: 'Lava Cake',
      content: 'Also known as molten chocolate cake, this decadent dessert features a warm chocolate cake exterior with a gooey, liquid chocolate center.',
      image: lavacake // Local image import
      // Add more initial posts as needed
    }
  ]);

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleCreatePost = () => {
    const newPost = {
      id: posts.length + 1,
      title: newPostTitle,
      content: newPostContent,
      image: newPostImage || chococake // Default to chocolate cake image if no URL provided
    };
    setPosts([...posts, newPost]);
    setNewPostTitle('');
    setNewPostContent('');
    setNewPostImage('');
  };

  const handleDelete = (postId) => {
    setPosts(posts.filter(post => post.id !== postId));
  };

  return (
    <div className="home">
      <div className="create-post-section">
        <h2>Create a New Post</h2>
        <div className="create-post-form">
          <input
            type="text"
            placeholder="Title"
            value={newPostTitle}
            onChange={(e) => setNewPostTitle(e.target.value)}
          />
          <textarea
            placeholder="Content"
            value={newPostContent}
            onChange={(e) => setNewPostContent(e.target.value)}
          />
          <input
            type="text"
            placeholder="Image URL "
            value={newPostImage}
            onChange={(e) => setNewPostImage(e.target.value)}
          />
          <button className="btn create-btn" onClick={handleCreatePost}>Create Post</button>
        </div>
      </div>
      <div className="toolbar">
        <input
          type="text"
          placeholder="Search posts..."
          value={searchTerm}
          onChange={handleSearchChange}
        />
      </div>
      <div className="posts">
        {posts.filter(post =>
          post.title.toLowerCase().includes(searchTerm.toLowerCase())
        ).map(post => (
          <div key={post.id} className="post">
            <BlogPost {...post} />
            <div className="post-actions">
              <button className="btn edit-btn">Edit</button>
              <button className="btn delete-btn" onClick={() => handleDelete(post.id)}>Delete</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Home;
